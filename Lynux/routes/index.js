const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../config/auth')



// Post Model
const Post = require('../model/Post');


// Displaying post
router.get('/', (req,res) => {
    Post.find({}, function(err, posts) {
        res.render('map',{
            user:req.user,
            posts:posts
        })
     }); 
})


// Adding a post
router.get('/add', ensureAuthenticated, (req,res) =>
    res.render('add',{
        user:req.user,
        location:req.location
    }))

// Liking a post


// Unlinking a post


module.exports = router;
