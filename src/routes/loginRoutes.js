const express = require("express");
const User = require("../models/userModel");
const { verify } = require("../helper");

const app = express();

app.post("/loginGoogle", async (req, res) => {
  const token = req.body.idtoken;
  try {
    const googleUser = await verify(token);

    if (googleUser.err === true) {
      return res.status(404).json({ messague: "El correo con el que intenta ingresar no tiene acceso", error: true });
    }

    //validacion (si el usuario ya esta registrado)

    const searchUser = await User.find({ email: googleUser.email });
    if (Object.keys(searchUser).length !== 0) {
      return res.json({
        name: googleUser.name,
        email: googleUser.email,
        img: googleUser.img,
        error: false
      });
      
    }

    const UserDB = new User({
      name: googleUser.name,
      urlImage: googleUser.img,
      email: googleUser.email,
    });

    const newUser = await UserDB.save();
    return res.json({
      name: newUser.name,
      email: newUser.email,
      img: newUser.urlImage,
      error: false,
      messague: "Guardado con exito",
    });
  } catch (err) {
    return res.status(404).json({ err });
  }
});

module.exports = app;
