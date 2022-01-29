const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const commentsSchema = new Schema({
    userId: { type: String, required: true, trim: true, },
    postId: { type: String, required: true, trim: true, },
    text: { type: String, required: true, trim: true, },
    icon: { type: String, trim: true, },
    isEdited: { type: Boolean, },
}, {
    timestamps: true,
});

const Handicrafts = mongoose.model('Comments', commentsSchema);

module.exports = Handicrafts;