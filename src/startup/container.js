const { createContainer, asClass, asFunction, asValue } = require("awilix");

const config = require("../config");
const app = require(".");

const {
  EvaluacionService,
  EstudianteService,
  RegistroService,
} = require("../services");

const {
  EvaluacionController,
  EstudianteController,
  RegistroController,
} = require("../controllers");

const {
  EvaluacionRoutes,
  EstudianteRoutes,
  RegistroRoutes,
} = require("../routes/index.routes");

const Routes = require("../routes");
const container = createContainer();
container
  .register({
    app: asClass(app).singleton(),
    router: asFunction(Routes).singleton(),
    config: asValue(config),
  })
  .register({
    EvaluacionService: asClass(EvaluacionService).singleton(),
    EstudianteService: asClass(EstudianteService).singleton(),
    RegistroService: asClass(RegistroService).singleton(),
  })
  .register({
    EvaluacionController: asClass(
      EvaluacionController.bind(EvaluacionController)
    ).singleton(),
    EstudianteController: asClass(
      EstudianteController.bind(EstudianteController)
    ).singleton(),
    RegistroController: asClass(
      RegistroController.bind(RegistroController)
    ).singleton(),
  })
  .register({
    EvaluacionRoutes: asFunction(EvaluacionRoutes).singleton(),
    EstudianteRoutes: asFunction(EstudianteRoutes).singleton(),
    RegistroRoutes: asFunction(RegistroRoutes).singleton(),
  });

module.exports = container;
