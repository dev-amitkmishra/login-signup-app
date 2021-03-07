const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstName: {
        type: String,
        match: [/^[a-zA-Z0-9]+$/, 'is invalid'],
        required: [true, "enter firstname"]
    },
    lastName: {
        type: String,
        match: [/^[a-zA-Z0-9]+$/, 'is invalid'],
        required: [true, "enter lastname"]
    },
    userName: {
        type: String,
        lowercase: true,
        unique: true,
        required: [true, "enter username"],
        match: [/^[a-zA-Z0-9]+$/, 'is invalid'],
        index: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    }
}, {
    collection: 'User'
});

module.exports = mongoose.model('User', UserSchema);