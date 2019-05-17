const bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
const express = require('express');
const models = require('./models');
const path = require('path');
const passport = require('passport');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(passport.initialize());

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

//Protected Pages
//app.use('/debug', passport.authenticate('jwt', {session: false, successRedirect: '/debug', failureRedirect: '/tryagain' }));

// View Engine
const exphbs = require('express-handlebars');
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs({defaultLayout:'main'}));
app.set('view engine', 'handlebars');

// Load up all of the controllers
const controllers = require('./controllers');
app.use(controllers);


// First, make sure the Database tables and models are in sync
// then, start up the server and start listening.
models.sequelize.sync({force: false})
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is up and running on port: ${PORT}`)
    }); 
});