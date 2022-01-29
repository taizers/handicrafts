const router = require('express').Router();
const authController = require('../controllers/auth');

router.route('/').put(authController.signIn);

router.route('/').post(authController.signUp);

module.exports = router;