const bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
const express = require('express');
const models = require('./models');
const path = require('path');
const passport = require('passport');


const PORT = process.env.PORT || 8000;

const app = express();

app.use('/webhook', require('./controllers/webhook'));

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(passport.initialize());


// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

//Protected Pages
//app.use('/debug', passport.authenticate('jwt', {session: false, successRedirect: '/debug', failureRedirect: '/tryagain' }));

// View Engine
const exphbs = require('express-handlebars');
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs({
    defaultLayout: 'main', helpers: {
        ifEquals: function (arg1, arg2, options) {
            return (arg1 == arg2) ? options.fn(this) : options.inverse(this);
        },
        ifNotEquals: function (arg1, arg2, options) {
            return (arg1 != arg2) ? options.fn(this) : options.inverse(this);
        }
    }
}));
app.set('view engine', 'handlebars');

// Load up all of the controllers
const controllers = require('./controllers');
app.use(controllers);


// First, make sure the Database tables and models are in sync
// then, start up the server and start listening.
models.sequelize.sync({force: false})
    .then(() => {
        const noop = () => {
        };
        models.Status.create({
            name: 'New'
        }).catch(noop);
        models.Status.create({
            name: 'In Progress'
        }).catch(noop);
        models.Status.create({
            name: 'Done'
        }).catch(noop);

        //NOTE: CustomerEmail field must be a valid signed up user or there will be a foreign key constraint error.

         models.Order.create({
             StatusName: 'New',
             CustomerEmail: 'thomasjimenez1997@gmail.com',
             address: '770 Michigan Avenue, Gibsonia, PA 15044',
             pickuptime: '2019-05-25T13:00:00.000Z',
             washdry: {Large: {quantity: 4}},
             updatedAt: '2019-05-19T21:41:07.853Z',
             createdAt: '2019-05-19T21:41:07.853Z',
             dryclean: null,
             washdrydeliverytime: '2019-05-26T13:00:00.000Z',
             drycleandeliverytime: null,
             WorkerEmail: null
         });
         models.Order.create({
             StatusName: 'In Progress',
             CustomerEmail: "testcustomer@gmail.com",
             address: '770 Michigan Avenue, Gibsonia, PA 15044',
             pickuptime: '2019-05-25T13:00:00.000Z',
             washdry: {Small: {quantity: 1}},
             updatedAt: '2019-05-19T21:41:07.853Z',
             createdAt: '2019-05-19T21:41:07.853Z',
             dryclean: null,
             washdrydeliverytime: '2019-05-26T13:00:00.000Z',
             drycleandeliverytime: null,
             WorkerEmail: null
         });

        app.listen(PORT, () => {
            console.log(`Server is up and running on port: ${PORT}`)
        });
    });