const bodyParser = require("body-parser");
const loginRouter = require('../routes/loginRouter');
const cadastrarRouter = require('./cadastrarRouter');
const usuarioRouter = require('./usuarioRouter');
const solicitacaoFichaRouter = require('./SolicitacaoFichaRouter');
const alunoRouter = require('./AlunoRouter');

module.exports = app => {
    app.use(bodyParser.json(), usuarioRouter, loginRouter, cadastrarRouter, solicitacaoFichaRouter, alunoRouter);
};
