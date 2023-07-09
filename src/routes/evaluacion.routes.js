const { Router } = require("express");

module.exports = function ({ EvaluacionController }) {
  const router = Router();
  router.post("/crearEvaluacion", EvaluacionController.crearEvaluacion);
  router.get("/listarEvaluacion", EvaluacionController.listarEvaluacion);

  return router;
};
