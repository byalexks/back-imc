const mongoose = require("mongoose");

let Schema = mongoose.Schema;

let imcSchema = new Schema({
  year: {
    type: String,
    required: [true, "La estatura es requerida"],
  },
  weight: {
    type: String,
    required: [true, "El peso es requerido"],
  },
  height: {
    type: String,
    required: [true, "El peso es requerido"],
  },
  imc: {
    type: String,
    required: [true, "El imc es requerido"],
  },
  name: {
    type: String,
    required: [true, "El nombre es requerido"],
  },
  gender: {
    type: String,
    required: [true, "El genero es requerido"],
  },
  date: {
    type: Date,
    default: new Date()
  },
  user: {
    required: [true, "El usuario es requerido"],
    type: Schema.ObjectId,
    ref: "User",
  },
});

module.exports = mongoose.model("Imc", imcSchema);
