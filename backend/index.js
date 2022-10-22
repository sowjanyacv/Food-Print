const express = require("express");
const path = require("path");
const cors = require("cors");
const { pool } = require("./db.js");
const bodyParser = require("body-parser");
//const sslRedirect = require('heroku-ssl-redirect').default
const app = express();

//middlewares
app.use(cors());
app.use(express.json());
//app.use(sslRedirect());

app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

app.get("/test", async (req, res) => {
    return res.status(200).json({ text: "connect test" });
});

app.post("/testPost", async (req, res) => {
    console.log('req.body', req.body);
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    try {
        await pool.query(
          "INSERT INTO users(username, email, user_password) VALUES($1,$2,$3) RETURNING *",
          [username, email, password]
        );
        return res.status(200).json({ status: "ok" })
      } catch (error) {
        return res.json({ error: error.message });
      }
});

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client/build/index.html"));
  });
  

  app.listen(process.env.PORT || 5000);