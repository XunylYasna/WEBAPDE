const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },

    writeup: {
        type: String,
        required: true
    },

    author: {

    },

    location: {
        type: String
    },


    date: {
        type: Date,
        default: Date.now
    },

    picture:{ 
        data: Buffer, contentType: String 
    },

    score: {
        type: Number,
        default:0
    }
})

const Blog = mongoose.model('Blog', BlogSchema)

module.exports = Blog;