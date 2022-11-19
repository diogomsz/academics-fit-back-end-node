const bodyParser = require("body-parser");

const alunosRoutes = require("./alunosRoutes");
const cadastradosRoutes = require("./cadastradosRoutes");
const disponibilidadeRoutes = require("./disponibilidadeRoutes");
const exerciciosRoutes = require("./exerciciosRoutes");
const personaisRoutes = require("./personaisRoutes");

module.exports = app => {
    app.use(bodyParser.json(), alunosRoutes, cadastradosRoutes, disponibilidadeRoutes, exerciciosRoutes, personaisRoutes);
};
