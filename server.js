const express = require('express');
const app = express();
const port = process.env.PORT || 3333;
const mongoose = require('mongoose');
const passport = require('passport');
const flash = require('connect-flash');

const morgan = require('morgan');
const cookieParse = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');

const configDB = require('./config/database');

mongoose.connect(configDB.url);

require('./config/passport')(passport);

app.use(morgan('dev'));
app.use(cookieParse()); //read cookie 
app.use(bodyParser());

app.set('view engine', 'ejs');

app.use(session({secret:'nhantt'})); //chuoi bi mat ma hoa
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

require('./app/routes')(app, passport);

app.listen(port);
console.log('Server listen port ' + port);