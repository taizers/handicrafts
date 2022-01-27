const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const handicraftsSchema = new Schema({
    url: { type: String, required: true, trim: true, },
    title: { type: String, required: true, trim: true, },
    subTitle: { type: String, trim: true, },
    text: { type: Array, required: true, },
    usefullLinks: { type: Array, required: true, },
    location: { type: Array, required: true, },
    comments: { type: Array }
}, {
    timestamps: true,
});

const Handicrafts = mongoose.model('Handicrafts', handicraftsSchema);

module.exports = Handicrafts;