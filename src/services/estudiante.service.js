const { Estudiante } = require("../models");
const { mongo } = require("mongoose");

class EstudianteService {
  crear(req, res) {
    var datos = req.body;
    try {
      const estudiante = {
        nombre: datos.nombre,
        identificacion: datos.identificacion,
        representante: datos.representante,
        curso: datos.curso,
      };
      Estudiante.create(estudiante, function (err, estudiante) {
        if (err) {
          return res.status(400).json({
            message: "Error al agregar EL ESTUDIANTE",
          });
        } else {
          return res.status(200).json({
            message: "Se agrego la evaluacion",
            datos: estudiante,
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
      Estudiante.findOne(function (err, estudianteEncontrado) {
        if (err) {
          return res.status(500).json({
            message: "Error al listar las evaluaciones",
          });
        }
        if (!estudianteEncontrado) {
          return res.status(400).json({
            message: "No hay evaluaciones",
          });
        }
        Estudiante.find(
          {
            estudiante_id: estudianteEncontrado.estudiante_id,
          },
          function (err, estudiante) {
            if (err) {
              return res.status(404).json({
                message: "Hubo un error al listar las evaluaciones",
              });
            } else {
              return res.status(202).json({
                message: "Lista de evaluaciones",
                estudiante: estudiante,
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

module.exports = EstudianteService;
