const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    login: { type: String, required: true, trim: true, },
    password: { type: String, required: true, trim: true, },
    role: { type: String, required: true, trim: true, },
    displayedName: { type: String, trim: true, },
    avatar: { type: String, trim: true, },
}, {
    timestamps: true,
});

const UserLogin = mongoose.model('UserLogin', userSchema);

module.exports = UserLogin;