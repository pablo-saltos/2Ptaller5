module.exports = (req, res, next) =>
  res
    .status(404)
    .send({ status: 404, message: "recurso no encontrado microservicio user" });
