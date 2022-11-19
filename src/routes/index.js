const bodyParser = require("body-parser");

const alunosRoutes = require("./alunosRoutes");
const cadastradosRoutes = require("./cadastradosRoutes");
const disponibilidadeRoutes = require("./disponibilidadeRoutes");
const exerciciosRoutes = require("./exerciciosRoutes");
const personaisRoutes = require("./personaisRoutes");

module.exports = app => {
    app.get('/', (req, res) => {
        res.status(200).json({ message: 'Bem-vindo à API de Academia' });
    });
    app.use(bodyParser.json(), alunosRoutes, cadastradosRoutes, disponibilidadeRoutes, exerciciosRoutes, personaisRoutes);
};
