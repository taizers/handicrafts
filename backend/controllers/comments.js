const Comments = require('../models/comments');

exports.getComments = (req, res) => {
    const id = req.params.id;

    Comments.find({ postId: id })
        .then(comments => res.json(comments))
        .catch(err => res.status(400));
};

exports.getAllComments = (req, res) => {
    Comments.find()
        .then(comments => res.json(comments))
        .catch(err => res.status(400));
};

exports.createComment = (req,res) => {
    const body = req.body.payload;
    console.log(body);
    const newComment = new Comments(body);
    newComment.save()
        .then(() => res.status(200))
        .catch(() => res.status(400))
};

exports.deleteComment = (req,res) => {
    Comments.deleteOne({ _id: req.params.id })
    .then(() => res.status(200))
    .catch(() => res.status(400));
};

exports.updateComment = (req,res) => {
    const body = req.body;

    Comments.findOneAndUpdate(
        { 
            _id: req.params.id 
        }, 
        { 
            $set: {...body, updatedAt: Date.now()} 
        }, 
        { 
            returnDocument: "after"
        },
        function (err, result) {
            if(err) { res.status(500); return; }
            res.status(200);
        }
    )
};