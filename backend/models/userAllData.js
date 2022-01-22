const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    first_name: { type: String, required: true, trim: true, },
    last_name: { type: String, required: true, trim: true, },
    email: { type: String, trim: true, },
    id: { type: String, trim: true, required: true, },
    avatar: { type: String, trim: true, },
    passport: { type: String, trim: true, required: true, },
    adress: { type: String, trim: true, },
    phone: { type: String, trim: true, },
    sex: { type: String, trim: true, },
    age: { type: Number, trim: true, required: true, },
}, {
    timestamps: true,
});

const UserAllData = mongoose.model('UserAllData', userSchema);

module.exports = UserAllData;