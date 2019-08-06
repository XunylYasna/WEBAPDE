const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },

    post: {
        type: String,
        required: true
    },

    author:{
        
    },

    location: {
        loc :  { type: {type:String}, coordinates: [Number]}
    },

    date: {
        type: Date,
        default: Date.now
    },

    comments: [],

    upvotes: [],

    downvotes: []
})

const Blog = mongoose.model('Blog', BlogSchema)

module.exports = Blog;