const mongoose = require("mongoose");
const { Schema } = mongoose;

const EvaluacionSchema = new Schema({
  nombre: { type: String },
  asignatura: { type: String },
  docente: { type: String },
});

module.exports = mongoose.model("Evaluacion", EvaluacionSchema);
