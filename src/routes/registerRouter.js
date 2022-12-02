const { Router } = require('express');
const RegistrarController = require('../controllers/registrarController');

const router = Router();

router.post('/cadastrar', RegistrarController.registrar);

module.exports = router;
