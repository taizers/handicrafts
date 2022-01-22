const router = require('express').Router();
const userController = require('../controllers/users');

router.route('/:id/all').get(userController.getAllAboutUser);

router.route('/').get(userController.getAllUsers);

router.route('/').post(userController.createUser);

router.route('/:id').delete(userController.deleteUser);

router.route('/:data').get(userController.getUser);

router.route('/:id').put(userController.updateUserData);

module.exports = router;
