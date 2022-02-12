const router = require('express').Router();
const commentsController = require('../controllers/comments');

router.route('/:id').get(commentsController.getComments);

router.route('/').post(commentsController.createComment);

router.route('/:id').put(commentsController.updateComment);

router.route('/:id').delete(commentsController.deleteComment);

module.exports = router;