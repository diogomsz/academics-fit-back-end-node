const { Router } = require('express');
const UsuarioController = require('../controllers/usuarioController');

const router = Router();

router.post('/cadastrar', UsuarioController.cadastraUsuario);

module.exports = router;
