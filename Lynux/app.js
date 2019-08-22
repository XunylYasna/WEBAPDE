const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const path = require('path')
const bodyParser = require('body-parser');


// Body Parser
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));

// Handlebars
const exphbs  = require('express-handlebars');

var hbsHelpers = exphbs.create({
    extname: '.hbs',
    defaultLayout: 'main',
    helpers: require("./helpers/maphelper.js").helpers,
    layoutsDir: path.join(__dirname, "views/layouts/"),
    partialsDir: path.join(__dirname, 'views/partials')
});

app.engine( 'hbs', exphbs( {
    extname: '.hbs',
    defaultLayout: 'main',
    helpers: {
      json: function (content) { return JSON.stringify(content); },
      bar: function () { return 'BAR!'; }
    },
    layoutsDir: path.join(__dirname, "views/layouts/"),
    partialsDir: path.join(__dirname, 'views/partials')
  }));

app.set('view engine', '.hbs');

// Multer
const multer = require('multer');


// Mongoose Config and Connection
const mongoose = require('mongoose');
const db = require('./config/keys').MongoURI;
mongoose.connect(db, { useNewUrlParser : true })
    .then(() => console.log("MongoDB Connected..."))
    .catch(err => console.log(err));


// Express Session Middleware
const session = require('express-session');
app.use(session({
  secret: 'killroy',
  resave: true,
  saveUninitialized: true,
//   cookie: { secure: true }
}))


// Passport middleware
const passport = require('passport');
require('./config/passport')(passport);
app.use(passport.initialize());
app.use(passport.session());

// Connect Flash
const flash = require('connect-flash');
app.use(flash())


//Global Var
app.use((req,res,next) =>{
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error_msg');
    next();
})


// Routes
app.use(express.static(__dirname + '/public'));
app.use('/', require('./routes/index'))
app.use('/users',require('./routes/users'))
// app.use('/map',require('./routes/posts'))
app.listen(PORT, console.log(`Server started on port ${PORT}`))