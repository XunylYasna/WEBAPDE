// const express = require('express');
// const router = express.Router();

// // Post Model
// const Post = require('../model/Post');


// // Passport
// const passport = require('passport')

// const { ensureAuthenticated } = require('../config/auth')

// // Get All Locations
// router.get('/', (req,res) => {
//     Post.find({}, function(err, posts) {
//         var allLocations = {};

//         Post.forEach((posts) => {
//             allLocations[posts._id] = posts.location;
//         });

//         res.render('map',{
//             allLocations:allLocations
//         })
//      }); 
// })


// // Get All Locations
// router.get('/post', (req,res) => {
//     var allLocations = {};
//     Post.find({}, function(err, posts) {
        

//         Post.forEach((posts) => {
//             allLocations[posts._id] = posts.location;
//         });
//      }); 

//     Post.findOne({
//         _id: req.query.id
//     }, (err,post) =>{
//         if(err){
//             res.send(err)
//         }
        
//         else{
//             res.render('map',{
//                 allLocations:allLocations,
//                 post:post
//             })
//         }
//     })  

// })


// router.get('/add', ensureAuthenticated, (req, res) => {
//     res.render('add')
// })

// // Add post handle
// router.post('/addPost', ensureAuthenticated, (req, res) => {
    
//     const { title, writeup, location, picture} = req.body;
    
   
//     const newPost = new Post({
//         title:title,
//         writeup:writeup,
//         author:req.user,
//         location:location,
//         date: Date.now,
//         picture:picture
//     })           
// })


// router.post('/like', ensureAuthenticated, (req, res) => {
    
   
//     Post.findOne({
//         _id: req.query.id
//     }, (err,post) =>{
//         if(err){
//             res.send(err)
//         }
        
//         else{
//             post.score += 1
//         }
//     })    
// })

// router.post('/dislike', ensureAuthenticated, (req, res) => {
    
   
//     Post.findOne({
//         _id: req.query.id
//     }, (err,post) =>{
//         if(err){
//             res.send(err)
//         }
        
//         else{
//             post.score -= 1
//         }
//     })    
// })



// module.exports = router;
