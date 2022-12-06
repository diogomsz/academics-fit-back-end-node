const { Router } = require('express');
const CadastrarController = require('../controllers/CadastrarController');

const router = Router();

router.post('/cadastrarAluno', CadastrarController.registrar)
      .post('/cadastrarPersonal', CadastrarController.registrar)
    
module.exports = router;
