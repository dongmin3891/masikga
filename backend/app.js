var createError = require('http-errors');
var express = require('express');
var bodyParser = require('body-parser')
let mongoose = require('mongoose');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
let menuListRouter = require('./routes/menuList')
let categoryRouter = require('./routes/category');
let loginRouter = require('./routes/member/login');
const signupRouter = require('./routes/member/signup');

var app = express();

const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Hello World',
      version: '1.0.0',
    },
  },
  apis: ['./routes/*.js'], // files containing annotations as above 
};
const openapiSpec = swaggerJsdoc(options);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(openapiSpec));

let cors = require('cors');
app.use(cors());

const uri = 'mongodb+srv://rlaehdals224:qwe9093265@masikga.zk5z8sv.mongodb.net/masikga?retryWrites=true&w=majority'
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection succes");
});
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api', require('./routes/api'));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/menuList', menuListRouter);
app.use('/category', categoryRouter);
app.use('/member/login', loginRouter );
app.use('/member/signup', signupRouter )


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
