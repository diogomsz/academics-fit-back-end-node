const { Router } = require('express');
const PersonaisController = require('../controllers/PersonaisController');

const router = Router();

router
    .get('/personais', PersonaisController.pegaTodosOsPersonais)
    .get('/personais/:id', PersonaisController.pegaUmPersonal)
    .post('/personais', PersonaisController.criaPersonal)
    .put('/personais/:id', PersonaisController.atualizaPersonal)
    .delete('/personais/:id', PersonaisController.apagaPersonal);

module.exports = router;
