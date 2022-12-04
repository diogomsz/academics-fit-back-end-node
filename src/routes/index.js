const bodyParser = require("body-parser");
const usuariosRouter = require('../routes/usuariosRouter');
const loginRouter = require('../routes/loginRouter');
const cadastrarRouter = require('./cadastrarRouter');
const path = require('path');

module.exports = app => {
    app.set('view engine', 'ejs');
    app.set('views', path.join(__dirname, 'src/views'));
    app.use(bodyParser.json(), usuariosRouter, loginRouter, cadastrarRouter);
};
