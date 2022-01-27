const router = require('express').Router();
const handicraftsController = require('../controllers/handicrafts');

router.route('/:id').get(handicraftsController.getHandicraft);

module.exports = router;