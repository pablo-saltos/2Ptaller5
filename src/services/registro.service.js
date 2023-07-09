const { Registro } = require("../models");
const { mongo } = require("mongoose");

class RegistroService {
  crear(req, res) {
    var datos = req.body;
    if (
      !datos.estudiante_id ||
      !datos.evaluacion_id ||
      !datos.fecha ||
      !datos.hora ||
      !datos.notamax ||
      !datos.notamin
    ) {
      return res.status(400).json({ message: "Faltan campos" });
    }
    try {
      const registro = {
        estudiante_id: mongo.ObjectId(datos.estudiante_id),
        evaluacion_id: mongo.ObjectId(datos.evaluacion_id),
        fecha: datos.fecha,
        hora: datos.hora,
        notamax: datos.notamax,
        notamin: datos.notamin,
      };
      Registro.create(registro, function (err, registro) {
        if (err) {
          return res
            .status(500)
            .json({ mensaje: "Error al buscar al crear reguistro" });
        } else {
          return res.status(200).json({ datos: registro });
        }
      });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ message: "Error al crear el registro" });
    }
  }

  listar(req, res) {
    try {
      Registro.findOne(function (err, registroEncontrado) {
        if (err) {
          return res.status(500).json({
            message: "Error al listar los registros",
          });
        }
        if (!registroEncontrado) {
          return res.status(400).json({
            message: "No hay registro",
          });
        }
        Registro.find(
          {
            registro_id: registroEncontrado.registro_id,
          },
          function (err, registro) {
            if (err) {
              return res.status(404).json({
                message: "Hubo un error al listar los registros",
              });
            } else {
              return res.status(202).json({
                message: "Lista de registro",
                registro: registro,
              });
            }
          }
        );
      });
    } catch (error) {
      return res.status(500).json({
        message: "Error en la api de listar",
      });
    }
  }
}

module.exports = RegistroService;
