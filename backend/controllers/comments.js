const Commnets = require('../models/comments');

exports.getComments = (req, res) => {
    const id = req.params.id;

    Commnets.find({ postId: id })
        .then(comments => res.json(comments))
        .catch(err => res.status(400));
};

exports.createComment = (req,res) => {
    const body = req.body;

    const newComment = new Commnets(body);
    newComment.save()
        .then(() => res.status(200))
        .catch(() => res.status(400))
};

exports.deleteComment = (req,res) => {
    Commnets.deleteOne({ _id: req.params.id })
    .then(() => res.status(200))
    .catch(() => res.status(400));
};

exports.updateComment = (req,res) => {
    const body = req.body;

    Commnets.findOneAndUpdate(
        { 
            _id: req.params.id 
        }, 
        { 
            $set: {first_name: body.first_name, last_name: body.last_name, updatedAt: Date.now()} 
        }, 
        { 
            returnDocument: "after"
        },
        function (err, result) {
            if(err) { res.status(500); return; }
            res.status(200).json(result);
        }
    )
};