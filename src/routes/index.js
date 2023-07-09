const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const compression = require("compression");
require("express-async-errors");

const { NotFoundMiddleware, ErrorMiddleware } = require("../middlewares");

module.exports = function ({
  EvaluacionRoutes,
  EstudianteRoutes,
  RegistroRoutes,
}) {
  const router = express.Router();
  const apiRoutes = express.Router();
  apiRoutes
    .use(cors())
    .use(helmet())
    .use(compression())
    .use(express.json())
    .use(express.urlencoded({ extended: true }));

  apiRoutes.use("/Evaluacion", EvaluacionRoutes);
  apiRoutes.use("/Estudiante", EstudianteRoutes);
  apiRoutes.use("/Registro", RegistroRoutes);

  router.use("/v1/api", apiRoutes);
  router.use(NotFoundMiddleware);
  router.use(ErrorMiddleware);
  return router;
};
