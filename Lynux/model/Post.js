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
        loc :  { type: {type:String}, coordinates: [Number]}
    },


    date: {
        type: Date,
        default: Date.now
    },

    picture:[],

    score: {
        default:0
    }
})

const Blog = mongoose.model('Blog', BlogSchema)

module.exports = Blog;