const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const port = process.env.PORT || 8000;
const app = express();
const mongoose = require("mongoose");
const RegisterUser = require("./Models/RegisterUser");
const Files = require("./Models/Files");
const bcrypt = require("bcrypt");
const saltRounds = 5;
app.use(cors());
app.use(express.static(__dirname));
app.use(bodyParser.json());

mongoose.connect(
  "mongodb+srv://PhanidharBeeram:Phani12zebra@heroku-y2fob.mongodb.net/test?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err, connected) => {
    if (connected) {
      console.log("Connected to mongoDB");
    } else {
      console.log(err);
    }
  }
);
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.get("/home", (req, res) => {
  Files.find({}, (err, res) => {
    if (err) {
      console.log(err);
    } else {
      console.log(res);
    }
  });
});
app.post("/register", (req, res) => {
  RegisterUser.find({}, (err, all) => {
    console.log(all);
    if (all.length === 0) {
      bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
        let newer = new RegisterUser({
          firstname: req.body.firstname,
          lastname: req.body.lastname,
          email: req.body.email,
          password: hash,
        });
        newer.save((err, user) => {
          err
            ? console.error(err)
            : console.log(user.firstname + " saved to DataBase");
        });
      });
    }
    if (all.length > 0) {
      RegisterUser.find({ email: req.body.email }, (err, match) => {
        console.log(match.length);
        console.log(all.length);
        if (match.length === 0) {
          bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
            let newer = new RegisterUser({
              firstname: req.body.firstname,
              lastname: req.body.lastname,
              email: req.body.email,
              password: hash,
            });
            console.log(newer);
            newer.save((err, user) => {
              user
                ? console.log(user.firstname + " saved to DataBase")
                : console.log(err);
            });
          });
        } else {
          res.json("Email Id already exists");
        }
      });
    }
  });

  app.post("/login", (req, res) => {
    console.log(req.body);
    RegisterUser.find({ email: req.body.email }, (err, match) => {
      if (match) {
        if ((match.password = req.body.password)) {
          res.json("User logged and match of password").status(200);
        } else {
          res.json("Password Not matched").status(400);
        }
      }
    });
  });
});

app.listen(port, (req, res) => {
  console.log("server running on port" + port);
});
