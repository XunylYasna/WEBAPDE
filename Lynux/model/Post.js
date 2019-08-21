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

    maps_link: {

    },

    date: {
        type: Date,
        default: Date.now
    },

    comments: [],

    upvotes: [],

    downvotes: [],

    pictures:[]
})

const Blog = mongoose.model('Blog', BlogSchema)

module.exports = Blog;