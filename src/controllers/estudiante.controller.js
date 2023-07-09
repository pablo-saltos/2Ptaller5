let _estudianteservice = null;
class EstudianteController {
  constructor({ EstudianteService }) {
    _estudianteservice = EstudianteService;
  }
  crearEstudiante(req, res) {
    return _estudianteservice.crear(req, res);
  }
  listarEstudiante(req, res) {
    return _estudianteservice.listar(req, res);
  }
}

module.exports = EstudianteController;
