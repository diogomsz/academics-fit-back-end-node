const express = require("express"); 
const app = express();

const routes = require('./src/routes/index');

routes(app);

const port = process.env.PORT || 3030;

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/src/views/index.html');
});

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});
