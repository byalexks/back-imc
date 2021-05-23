const express = require("express");
const { badRequest } = require("../helper");

const Imc = require("../models/imcModel");

const app = express();

app.get("/imc/:user", async (req, res) => {
  try {
    const { user } = await req.params;
    const ImcDb = await Imc.find({user})
    const total = await Imc.count();
    res.json({
      error: false,
      data: ImcDb,
      total,
    });
  } catch (error) {
    return badRequest(res, error);
  }
});
app.post("/imc", async (req, res) => {
  try {
    const newImc = new Imc(req.body);
    await newImc.save();
    res.json({ error: false, message: "Imc guardado correctamente" });
  } catch (error) {
    return badRequest(res, error);
  }
});
app.delete("/imc/:id", async (req, res) => {
  try {
    const { id } = await req.params;
    await Imc.findByIdAndDelete(id);
    res.json({ error: false, message: "Imc eliminado correctamente" });
  } catch (error) {
    return badRequest(res, error);
  }
});

module.exports = app;
