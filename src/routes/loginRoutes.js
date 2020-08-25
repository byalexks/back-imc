const express = require("express");
const jwt = require('jsonwebtoken')

const User = require("../models/userModel");

const { verify } = require("../helper");
const {verifyToken} = require("../../middlewares/authentication")

const app = express();

app.get('/home', verifyToken ,(req, res) => {

  const dataUser = req.user

  return res.json({
    ok: true,
    user: dataUser
  })


})

// ----------------------------------------------------------------------------------------------\\

app.post("/loginGoogle", async (req, res) => {
  const tokenGoogle = req.body.idtoken;
  try {
    const googleUser = await verify(tokenGoogle);

    const token = jwt.sign({
      user: googleUser,
    }, process.env.SEED, {expiresIn: process.env.TIMEEXPIRED})

    if (googleUser.err === true) {
      return res
        .status(404)
        .json({
          messague: "El correo con el que intenta ingresar no tiene acceso",
          error: true,
        });
    }

    //validacion (si el usuario ya esta registrado)

    const searchUser = await User.find({ email: googleUser.email });
    if (Object.keys(searchUser).length !== 0) {
      return res.json({
        token,
        error: false,
      });
    }

    const UserDB = new User({
      name: googleUser.name,
      urlImage: googleUser.img,
      email: googleUser.email,
    });

    const newUser = await UserDB.save();
    return res.json({
      token,
      messague: "Guardado con exito",
    });
  } catch (err) {
    return res.status(404).json({ err });
  }
});

module.exports = app;
