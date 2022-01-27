const router = require('express').Router();
const handicraftsController = require('../controllers/handicrafts');

router.route('/').get(handicraftsController.getHandicraftsList);

module.exports = router;
