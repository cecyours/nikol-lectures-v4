var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var dotenv = require('dotenv')
var cors = require('cors')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var authRouter = require('./routes/auth');
var productsRouter = require("./routes/products");
var cartRouter = require("./routes/cart");
var addressRouter = require("./routes/addresses");
var orderRouter = require("./routes/order");




const { default: mongoose } = require('mongoose');
const connectDB = require('./config/db');

var app = express();

dotenv.config()



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use(cors({
  methods: ["GET", "POST", "PUT", "DELETE"],
  origin: process.env.CLIENT_URL,
  credentials: true
}))


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/auth', authRouter);
app.use("/products", productsRouter);
app.use("/cart", cartRouter)
app.use("/addresses", addressRouter)
app.use("/orders", orderRouter)







connectDB();

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
