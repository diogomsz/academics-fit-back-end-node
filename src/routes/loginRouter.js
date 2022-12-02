const { Router } = require('express');
const UsuarioController = require('../controllers/usuarioController');

const router = Router();

router.post('/login', UsuarioController.validaUsuario);

module.exports = router;
