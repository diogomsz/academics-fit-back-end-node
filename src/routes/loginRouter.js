const { Router } = require('express');
const LoginController = require('../controllers/LoginController');

const router = Router();

router.post('/loginAluno', LoginController.login);

module.exports = router;
