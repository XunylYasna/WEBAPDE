const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Handlebars
var exphbs  = require('express-handlebars');

var hbs = exphbs.create();

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');

// Routes
app.use(express.static(__dirname + '/public'));
app.use('/', require('./routes/index'))
app.use('/users',require('./routes/users'))
app.listen(PORT, console.log(`Server started on port ${PORT}`))