let _evaluacionservice = null;
class EvaluacionController {
  constructor({ EvaluacionService }) {
    _evaluacionservice = EvaluacionService;
  }
  crearEvaluacion(req, res) {
    return _evaluacionservice.crear(req, res);
  }
  listarEvaluacion(req, res) {
    return _evaluacionservice.listar(req, res);
  }
}

module.exports = EvaluacionController;
