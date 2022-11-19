const { Router } = require('express');
const FichaController = require('../controllers/FichaController');

const router = Router();

router
    .get('/fichas', FichaController.pegaTodasAsFichas)
    .get('/fichas/:id', FichaController.pegaUmaFicha)
    .post('/fichas', FichaController.criaFicha)
    .put('/fichas/:id', FichaController.atualizaFicha)
    .delete('/fichas/:id', FichaController.apagaFicha);

module.exports = router;
