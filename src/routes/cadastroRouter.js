const { Router } = require('express');
const CadastrarController = require('../controllers/CadastrarController');

const router = Router();

router.post('/cadastroAluno', CadastrarController.registrar);

module.exports = router;
