const mongoose = require("mongoose");
const { Schema } = mongoose;

const RegistroSchema = new Schema({
  estudiante_id: { type: Schema.Types.ObjectId, ref: "Estudiante" },
  evaluacion_id: { type: Schema.Types.ObjectId, ref: "Evaluacion" },
  fecha: { type: String },
  hora: { type: String },
  notamax: { type: String },
  notamin: { type: String },
});

module.exports = mongoose.model("Registro", RegistroSchema);
