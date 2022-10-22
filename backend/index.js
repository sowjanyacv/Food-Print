const express = require("express");
const cookieSession = require('cookie-session');
const path = require("path");
const cors = require("cors");
const { pool } = require("./db.js");
const bodyParser = require("body-parser");
const cloudinary = require("cloudinary");
const { ocrSpace } = require('ocr-space-api-wrapper');
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);
require("dotenv").config();
const {getTextFromImage}= require('./receiptScan/getTextFromImage.js');

//multer for file upload
const multer = require("multer");
const uidSafe = require("uid-safe");

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

app.use(express.urlencoded({ extended: true }));


if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

app.get("/test", async (req, res) => {
    return res.status(200).json({ text: "connect test" });
});

const diskStorage = multer.diskStorage({
    destination: function(req, file, callback) {
      callback(null, "./uploads");
    },
    filename: function(req, file, callback) {
      uidSafe(24).then(function(uid) {
        callback(null, uid + path.extname(file.originalname));
      });
    }
  });
  
  const uploader = multer({
    storage: diskStorage,
    limits: {
      fileSize: 2000000
    }
  });

//AUTH 
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

//RECEIPT SCAN 

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
});
app.post('/receipts/scan', async (req, res) => {
    console.log('req.body', req.file);

    uploader.single("file")(req, res, function(err) {
        if (err instanceof multer.MulterError) {
          return res.json({ error: true });
        } else if (err) {
          return res.json({ error: true });
        }
    
        if (req.file) {
            console.log('req.file.path', req.file.path);
          cloudinary.uploader.upload(req.file.path, async function(result) {
            const uploadedUrl = result.secure_url;
            console.log('uploadedUrl', uploadedUrl);
    
        const response = await ocrSpace(uploadedUrl);
        const foodText = await getTextFromImage(response.ParsedResults && response.ParsedResults[0].ParsedText);
            console.log('foodText', foodText);

            //calculate carbonFootprintScore
            //calculate user's points 


            //insert foodText in database with date 
            //insert carbonFootprintScore
            //calculate user's points in database


        })
    }
});
});



app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client/build/index.html"));
  });
  

  app.listen(process.env.PORT || 5000);