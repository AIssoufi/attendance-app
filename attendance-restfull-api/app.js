// Global variable
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import session from 'express-session';
import expressSession from 'connect-mongo';

import { AuthRoute, CalendarRoute, AttendanceRoute } from './routes';

const MongoStore = expressSession(session);
const app = express();

//connect to MongoDB
mongoose.connect('mongodb://admin:toor2019*@ds013405.mlab.com:13405/attendance-app');

const db = mongoose.connection;

//handle mongo error
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log("we're connected!");
});

//use sessions for tracking logins
app.use(session({
  secret: 'work hard',
  resave: true,
  saveUninitialized: false,
  store: new MongoStore({
    mongooseConnection: db
  })
}));

// parse incoming requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// include routes
app.use('/attendance', AttendanceRoute);
app.use('/auth', AuthRoute);
app.use('/calendar', CalendarRoute);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  const err = new Error('File Not Found');
  err.status = 404;
  next(err);
});

// error handler
// define as the last app.use callback
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.send(err.message);
});


// listen on port 3000
app.listen(3000, function () {
  console.log('Express app listening on port 3000');
});