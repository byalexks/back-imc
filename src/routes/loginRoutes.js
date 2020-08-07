const express = require("express");
const { verify } = require("../helper")



const app = express();

app.get("/homeLogin/:id", (req, res) => {
  const id = req.params.id;

  res.json({ messague: "Hola mundo Get", id });
});


app.post("/loginGoogle", async (req, res) => {
  const token = req.body.idtoken;

  const prueba = await verify(token);

  if (prueba === true)
    return res.status(400).json({ err: "El dominio del email no es valido" });

  return res.json({ messague: "listo para guardar" });
});

module.exports = app;
