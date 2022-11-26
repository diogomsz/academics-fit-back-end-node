const bodyParser = require("body-parser");

module.exports = app => {
    app.get('/', (req, res) => {
        res.status(200).json({ message: 'Bem-vindo à API de Academia' });
    });
    app.use(bodyParser.json());
};
