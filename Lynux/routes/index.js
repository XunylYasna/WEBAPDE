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

// Searching post
router.get('/search', (req,res) => {
    var search = req.query.search

    Post.find({"title": { "$regex": search, "$options": "i"}}, function(err, posts) {
        if (err) return handleError(err)

        res.render('map',{
            user:req.user,
            posts:posts
        })
     }); 
})


// Liking post
router.post('/like', (req, res, next) => {
    // const id = req.body.id;
    // const act = req.body.act;
    // var current = req.body.cur;

    var counter = 1000;
    if(act > 0){
        counter = 1;
    }

    // Post.update({_id: id}, {$inc: {score: counter}}, {}, (err, numberAffected) => {});

    
    res.send({ some: counter });
});

// Realtime updates to multiple clients liking

module.exports = router;
