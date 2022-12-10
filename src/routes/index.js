const bodyParser = require("body-parser");
const loginRouter = require('../routes/loginRouter');
const cadastrarRouter = require('./cadastrarRouter');
const usuarioRouter = require('./usuarioRouter');

module.exports = app => {
    app.use(bodyParser.json(), usuarioRouter, loginRouter, cadastrarRouter);
};
