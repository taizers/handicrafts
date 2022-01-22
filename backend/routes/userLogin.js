const router = require('express').Router();
const userLoginController = require('../controllers/userLogin');

router.route('/').put(userLoginController.signIn);

router.route('/').post(userLoginController.signUp);

module.exports = router;