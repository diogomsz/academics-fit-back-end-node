const bodyParser = require("body-parser");
const loginRouter = require('../routes/loginRoute');

module.exports = app => {
    app.get('/', (req, res) => {
        res.status(200).json({ message: 'back-end diogo martins' });
    });
    app.use(bodyParser.json(), loginRouter);
};
