const { Router } = require('express');
const UsuarioController = require('../controllers/UsuarioController');

const router = Router();

router.get('/usuarios', UsuarioController.pegaTodosUsuarios)
      .delete('/usuarios/:id', UsuarioController.apagaUsuario);

module.exports = router;
