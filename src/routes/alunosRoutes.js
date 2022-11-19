const { Router } = require('express');
const AlunosController = require('../controllers/AlunosController');

const router = Router();

router
    .get('/alunos', AlunosController.pegaTodosOsAlunos)
    .get('/alunos/:id', AlunosController.pegaUmAluno)
    .post('/alunos', AlunosController.criaAluno)
    .put('/alunos/:id', AlunosController.atualizaAluno)
    .delete('/alunos/:id', AlunosController.apagaAluno);

module.exports = router;
