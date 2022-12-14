const path = require("path");
const express = require("express"); 
const routes = require('./src/routes/index');

const port = process.env.PORT || 3030;

const app = express();

app.use(express.static(__dirname + '/src/views'));
app.set('views', path.join(__dirname, 'src/views'));

routes(app);

app.get('/', (req, res) => {
    res.sendFile('src/views/index.html', { root: __dirname });
});

app.get('/loginAluno', (req, res) => {
    res.sendFile('src/views/loginAluno.html', { root: __dirname });
});

app.get('/loginPersonal', (req, res) => {
    res.sendFile('src/views/loginPersonal.html', { root: __dirname });
});

app.get('/cadastrarAluno', (req, res) => {
    res.sendFile('src/views/cadastrarAluno.html', { root: __dirname });
});

app.get('/cadastrarPersonal', (req, res) => {
    res.sendFile('src/views/cadastrarPersonal.html', { root: __dirname });
});

app.get('/solicitarFicha', (req, res) => {
    res.sendFile('src/views/solicitarFicha.html', { root: __dirname });
});

app.get('/perfilAluno', (req, res) => {
    res.sendFile('src/views/alunoPrincipal.html', { root: __dirname });
});

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});
