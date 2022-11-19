const { Router } = require('express');
const ExerciciosController = require('../controllers/ExerciciosController');

const router = Router();

router
    .get('/exercicios', ExerciciosController.pegaTodosOsExercicios)
    .get('/exercicios/:id', ExerciciosController.pegaUmExercicio)
    .post('/exercicios', ExerciciosController.criaExercicio)
    .put('/exercicios/:id', ExerciciosController.atualizaExercicio)
    .delete('/exercicios/:id', ExerciciosController.apagaExercicio);

module.exports = router;
