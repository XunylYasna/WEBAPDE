const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
    commentOn: {
    },

    author:{

    },
    
    date: {
        type: Date,
        default: Date.now
    },

    replies: [],

    upvotes: [],

    downvotes: []
})

const Comment = mongoose.model('Comment', CommentSchema)

module.exports = Comment;