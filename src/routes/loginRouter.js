const { Router } = require('express');
const LoginController = require('../controllers/LoginController');

const router = Router();

router.post('/loginAluno', LoginController.login)
      .post('/loginPersonal', LoginController.login);

module.exports = router;
