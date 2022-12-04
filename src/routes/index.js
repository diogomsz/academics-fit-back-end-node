const bodyParser = require("body-parser");
const usuariosRouter = require('../routes/usuariosRouter');
const loginRouter = require('../routes/loginRouter');
const cadastroRouter = require('../routes/cadastroRouter');

module.exports = app => {
    app.use(bodyParser.json(), usuariosRouter, loginRouter, cadastroRouter);
};
