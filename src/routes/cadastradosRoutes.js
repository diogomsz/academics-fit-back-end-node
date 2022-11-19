const { Router } = require('express');
const CadastradosController = require('../controllers/CadastradosController');

const router = Router();

router
    .get('/cadastrados', CadastradosController.pegaTodosOsCadastrados)
    .get('/cadastrados/:id', CadastradosController.pegaUmCadastrado)
    .post('/cadastrados', CadastradosController.criaCadastrado)
    .put('/cadastrados/:id', CadastradosController.atualizaCadastrado)
    .delete('/cadastrados/:id', CadastradosController.apagaCadastrado);

module.exports = router;
