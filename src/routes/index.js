const bodyParser = require("body-parser");
const express = require("express");
const usuariosRouter = require('../routes/usuariosRouter');
const loginRouter = require('../routes/loginRouter');
const cadastroRouter = require('./cadastroRouter');

module.exports = app => {
    app.get('/', (req, res) => {
        res.render(app.use(express.static('../views/index.html')));
    });
    app.use(bodyParser.json(), usuariosRouter, loginRouter, cadastroRouter);
};
