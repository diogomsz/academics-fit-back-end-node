const { Router } = require('express');
const SolicitacoesFichaController = require('../controllers/SolicitacoesFichaController');

const router = Router();

router.get('/solicitacoesFicha', SolicitacoesFichaController.pegaTodasAsSolicitacoes);

module.exports = router;
