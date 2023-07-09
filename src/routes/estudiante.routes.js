const { Router } = require("express");

module.exports = function ({ EstudianteController }) {
  const router = Router();
  router.post("/crearEstudiante", EstudianteController.crearEstudiante);
  router.get("/listarEstudiante", EstudianteController.listarEstudiante);

  return router;
};
