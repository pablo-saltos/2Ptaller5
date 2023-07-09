let _registroservice = null;
class RegistroController {
  constructor({ RegistroService }) {
    _registroservice = RegistroService;
  }
  crearRegistro(req, res) {
    return _registroservice.crear(req, res);
  }
  listarRegistro(req, res) {
    return _registroservice.listar(req, res);
  }
}

module.exports = RegistroController;
