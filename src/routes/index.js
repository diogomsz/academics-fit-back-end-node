const bodyParser = require("body-parser");
const loginRouter = require('../routes/loginRouter');
const cadastrarRouter = require('./cadastrarRouter');

module.exports = app => {
    app.use(bodyParser.json(), loginRouter, cadastrarRouter);
};
