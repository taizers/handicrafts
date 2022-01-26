const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const handicraftsSchema = new Schema({
    url: { type: String, required: true, trim: true, },
    title: { type: String, required: true, trim: true, },
    subTitle: { type: String, trim: true, },
    text: { type: Array, trim: true, },
    usefullLinks: { type: Array, trim: true, },
    location: { type: Array, trim: true, },
}, {
    timestamps: true,
});

const Handicrafts = mongoose.model('Handicrafts', handicraftsSchema);

module.exports = Handicrafts;