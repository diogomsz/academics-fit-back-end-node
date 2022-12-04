const path = require("path");
const express = require("express"); 
const routes = require('./src/routes/index');

const port = process.env.PORT || 3030;

const app = express();
routes(app);

app.use(express.static(__dirname + '/src/views'));

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
    res.sendFile(__dirname + '/src/views/CadastrarAluno.html');
});

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});
