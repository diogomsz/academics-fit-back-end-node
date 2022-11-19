const { Router } = require('express');
const DisponibilidadeController = require('../controllers/DisponibilidadeController');

const router = Router();

router
    .get('/disponibilidade', DisponibilidadeController.pegaTodasAsDisponibilidades)
    .get('/disponibilidade/:id', DisponibilidadeController.pegaUmaDisponibilidade)
    .post('/disponibilidade', DisponibilidadeController.criaDisponibilidade)
    .put('/disponibilidade/:id', DisponibilidadeController.atualizaDisponibilidade)
    .delete('/disponibilidade/:id', DisponibilidadeController.apagaDisponibilidade);

module.exports = router;
