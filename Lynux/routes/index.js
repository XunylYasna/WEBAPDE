const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../config/auth')


router.get('/', (req,res) => res.render('welcome'))

router.get('/add', (req,res) => res.render("add"))

router.get('/dashboard', ensureAuthenticated, (req,res) => 
    res.render('dashboard',{
        user:req.user
    }))

router.get('/about', ensureAuthenticated, (req,res) => res.render("about"))

router.get('/map', ensureAuthenticated, (req,res) => res.render("map"))

router.get('/profile', ensureAuthenticated, (req,res) => 
    res.render('profile',{
        user:req.user
    }))




module.exports = router;
