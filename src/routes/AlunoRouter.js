const { Router } = require('express');
const AlunoController = require('../controllers/AlunoController');

const router = Router();

router.get('/alunos', AlunoController.pegaTodosOsAlunos);
router.get('/alunos/:id', AlunoController.pegaUmAluno);
router.post('/solicitarFicha', AlunoController.criaSolicitacaoFicha);
router.put('/alunos/:id', AlunoController.atualizaAluno);
router.delete('/alunos/:id', AlunoController.apagaAluno);

module.exports = router;
