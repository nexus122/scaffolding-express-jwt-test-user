// server.js
const cors = require("cors");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const express = require("express");

//CREATE EXPRESS APP
const app = express();
app.use(cors());
app.use(bodyParser.json());

// DECLARE JWT-secret
const JWT_Secret = "your_secret_key";
const PORT = process.env.PORT || 8080;
const HOST = "0.0.0.0";

var testUsers = [
  { email: "user@user.com", password: "1234", role: "Viwer" },
  { email: "admin@user.com", password: "1234", role: "Admin" },
];

app.get("/", (req, res) => {
  res.send(`
  <div>
    <h1>👋 Hola</h1>
    <p>🔐 Si quieres un token haz un post a: <b>/api/authenticate</b></p>
    <p>- <b>Usuario</b>: user@user.com</p>
    <p>- <b>Password</b>: 1234</p>
  </div>
  `);
});

app.post("/api/authenticate", (req, res) => {
  if (req.body) {
    var user = req.body;

    var foundUser = userExist(user, testUsers);

    if (foundUser) {
      var token = jwt.sign(foundUser, JWT_Secret);
      res.status(200).send({
        signed_user: {
          email: foundUser.email,
          password: foundUser.password,
          role: foundUser.role,
        },
        token: token,
      });
    } else {
      res.status(403).send({
        errorMessage: "Authorisation required!",
      });
    }
  } else {
    res.status(403).send({
      errorMessage: "Please provide email and password",
    });
  }
});

function userExist(user, users) {
  return users.find(
    (u) => u.email === user.email && u.password === user.password
  );
}

app.listen(PORT, HOST, () =>
  console.log(`Servidor encendido en: PORT -> ${PORT} | HOST -> ${HOST}`)
);
