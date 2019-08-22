const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../config/auth')


// ROUTE FOR THE MAP AND POSTS


// Post Model
const Post = require('../model/Post');


// Displaying post on Map
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

// Viewing post
router.get('/view', (req,res) => {
    var postid = req.query.post_id

    Post.findOne({_id:postid})
    .then(post => {
        res.render('story',{
            post:post
        })
    })
})


// Liking post
router.post('/view/:id/act', (req, res, next) => {
    const action = req.body.action;
    const counter = action === 'Like' ? 1 : -1;
    Post.update({_id: req.params.id}, {$inc: {score: counter}}, {}, (err, numberAffected) => {
        res.send('');
    });
});

// Realtime updates to multiple clients liking

module.exports = router;
