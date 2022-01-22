const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    first_name: { type: String, required: true, trim: true, },
    last_name: { type: String, required: true, trim: true, },
    email: { type: String, trim: true, },
    avatar: { type: String, trim: true, },
    updateAt: { type: Date, },
}, {
    timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;
