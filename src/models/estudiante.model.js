const mongoose = require("mongoose");
const { Schema } = mongoose;

const EstudianteSchema = new Schema({
  nombre: { type: String },
  identificacion: { type: String },
  representante: { type: String },
  curso: { type: String },
});

module.exports = mongoose.model("Estudiante", EstudianteSchema);
