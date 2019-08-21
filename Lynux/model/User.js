const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true
    },

    datejoined: {
        type: Date,
        default: Date.now
    },

    post: [],

    karma:{
        
    },

    picture: {

    }
})

const User = mongoose.model('User', UserSchema)

module.exports = User;