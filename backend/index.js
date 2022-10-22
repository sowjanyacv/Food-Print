const express = require("express");
const cookieSession = require('cookie-session');
const path = require("path");
const cors = require("cors");
const { pool } = require("./db.js");
const bodyParser = require("body-parser");
const { ocrSpace } = require('ocr-space-api-wrapper');
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);

//const sslRedirect = require('heroku-ssl-redirect').default
const app = express();

//middlewares
app.use(cors());
app.use(express.json());
//app.use(sslRedirect());

app.use(
    cookieSession({
        secret: `The secret is used to generate the second cookie which is used 
        to verify the integrity of the first cookie`,
        cookie: {
            secure: true,
            httpOnly: true,
            maxAge: 1000 * 60 * 60 * 24 * 14,
        }
    })
);

app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

app.get("/test", async (req, res) => {
    return res.status(200).json({ text: "connect test" });
});

app.post("/users/register", async (req, res) => {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    const hashedPassword = bcrypt.hashSync(password , salt);

    try {
        await pool.query(
          "INSERT INTO users(username, email, user_password) VALUES($1,$2,$3) RETURNING *",
          [username, email, hashedPassword]
        );
        return res.status(200).json({message: "register success"});
      } catch (error) {
        return res.json({ error: error.message });
      }
});

app.post("/users/login", async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    try {
        const userInfo = await pool.query(`SELECT * FROM users where email=$1`, [
            email
        ]);

        console.log('userInfo', userInfo);

        if(userInfo && userInfo?.rows?.length > 0){
            const passwordDB = userInfo.rows[0].user_password;
            const passwordMatched = await bcrypt.compareSync(password, passwordDB);

            if(passwordMatched){
                req.session.userId = userInfo.rows[0]?.id;
                return res.status(200).json({message: "login success"})
            } else {
                return res.json({ error: 'incorrect password' });
            }

        } else {
            return res.json({ error: "user not found" });
        }

      } catch (error) {
        return res.json({ error: error.message });
      }
});



app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client/build/index.html"));
  });
  

  app.listen(process.env.PORT || 5000);