const router = require('express').Router();
const commentsController = require('../controllers/comments');

router.route('/:id').get(commentsController.getComments);

router.route('/').post(commentsController.createComment);

router.route('/').put(commentsController.updateComment);

router.route('/').delete(commentsController.deleteComment);

module.exports = router;