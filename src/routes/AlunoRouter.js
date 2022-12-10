const { Router } = require('express');
const AlunoController = require('../controllers/AlunoController');

const router = Router();

router.get('/alunos', AlunoController.pegaTodosOsAlunos);
router.get('/alunos/:cpf', AlunoController.pegaUmAluno);
router.post('/solicitarFicha', AlunoController.criaSolicitacaoFicha);
router.put('/alunos/:cpf', AlunoController.atualizaAluno);
router.delete('/alunos/:cpf', AlunoController.apagaAluno);

module.exports = router;
