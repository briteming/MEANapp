var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var logger = require('morgan');
var serveStatic = require('serve-static');

var routes = require('./webserver/routes/index');




var app = express();

app.set('views',path.join(__dirname,'webpage','pages'));
app.set('view engine','jade');

app.use(logger('dev'));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cookieParser());

app.use('/static',serveStatic(path.join(__dirname,'webpage','static')));

app.use('/',routes);

app.use(function(req, res, next){
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
});

app.use(function(err,req,res,next){
	res.status(err.status || 500);
	res.render('error', {
		message: err.message,
		error: err
	});
});
module.exports = app;