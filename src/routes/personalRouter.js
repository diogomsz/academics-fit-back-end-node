const { Router } = require('express');
const PersonalController = require('../controllers/PersonalController');

const router = Router();

router.get('/personais', PersonalController.getPersonal);
router.get('/personais/:id', PersonalController.getPersonalById);
router.put('/personais/:id', PersonalController.updatePersonal);
router.delete('/personais/:id', PersonalController.deletePersonal);

module.exports = router;
