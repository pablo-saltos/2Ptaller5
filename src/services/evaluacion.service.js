const { Evaluacion } = require("../models");
const { mongo } = require("mongoose");

class EvaluacionService {
  crear(req, res) {
    var datos = req.body;
    try {
      const evaluacion = {
        nombre: datos.nombre,
        asignatura: datos.asignatura,
        docente: datos.docente,
      };
      Evaluacion.create(evaluacion, function (err, evaluacion) {
        if (err) {
          return res.status(400).json({
            message: "Error al agregar la evaluacion",
          });
        } else {
          return res.status(200).json({
            message: "Se agrego la evaluacion",
            datos: evaluacion,
          });
        }
      });
    } catch (error) {
      return res.status(500).json({
        message: "Error en la api de crear",
      });
    }
  }

  listar(req, res) {
    try {
      Evaluacion.findOne(function (err, evaluacionEncontrado) {
        if (err) {
          return res.status(500).json({
            message: "Error al listar las evaluaciones",
          });
        }
        if (!evaluacionEncontrado) {
          return res.status(400).json({
            message: "No hay evaluaciones",
          });
        }
        Evaluacion.find(
          {
            evaluacion_id: evaluacionEncontrado.evaluacion_id,
          },
          function (err, evaluacion) {
            if (err) {
              return res.status(404).json({
                message: "Hubo un error al listar las evaluaciones",
              });
            } else {
              return res.status(202).json({
                message: "Lista de evaluaciones",
                evaluacion: evaluacion,
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

module.exports = EvaluacionService;
