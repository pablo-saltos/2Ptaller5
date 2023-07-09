const { Router } = require("express");

module.exports = function ({ RegistroController }) {
  const router = Router();
  router.post("/crearRegistro", RegistroController.crearRegistro);
  router.get("/listarRegistro", RegistroController.listarRegistro);

  return router;
};
