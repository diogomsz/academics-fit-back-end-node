const path = require("path");
const express = require("express"); 
const routes = require('./src/routes/index');

const port = process.env.PORT || 3030;

const app = express();
app.use(express.static(__dirname + '/src/views'));

routes(app);

app.get('/', (req, res) => {
    res.render(path.join(__dirname, 'src/views/index'), {url: '/home'});
});

app.get('/loginAluno', (req, res) => {
    res.render(path.join(__dirname, 'src/views/loginAluno'), {url: '/loginAluno'});
});

app.get('/loginPersonal', (req, res) => {
    res.render(path.join(__dirname, 'src/views/loginPersonal'), {url: '/loginPersonal'});
});

app.get('/cadastrarAluno', (req, res) => {
    res.render(path.join(__dirname, 'src/views/cadastrarAluno'), {url: '/cadastrarAluno'});
});

app.get('/cadastrarPersonal', (req, res) => {
    res.render(path.join(__dirname, 'src/views/cadastrarPersonal'), {url: '/cadastrarPersonal'});
});

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});
