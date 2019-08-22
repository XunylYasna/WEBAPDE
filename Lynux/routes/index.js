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


// Adding a post, getting the form
router.get('/add', ensureAuthenticated, (req,res) =>
    res.render('add',{
        user: req.user,
        location: req.query.latlong
    })
)

// Adding a post, storing the post to DB
router.post('/addStory', ensureAuthenticated, (req,res) =>{
    
    const { title, writeup, location, picture} = req.body;
    const newPost = new Post({
        title:title,
        writeup:writeup,
        author:req.user,
        location:location,
        date: Date.now(),
        picture:picture
    })

    newPost.save()
        .then(post => {
            req.flash('success_msg', 'New story added.')
            res.redirect('/')
        })
        .catch(err => console.log(err))
})

// Liking a post


// Unlinking a post


module.exports = router;
