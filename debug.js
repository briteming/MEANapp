/* 
 * description: log debug info
 * author: ylxdzsw@gmail.com
 * date: 2014.9.7
 */
var consts = require('./constants');
var fs = require('fs');

var foo = function(prefix,consolefun){
	return function(x){
		fs.appendFile(consts.app.log,prefix+" - "+x+" - "+Date()+"\n")
		consolefun(x);
	};
};

var log = foo('log',console.log)
var exception = foo('exception',console.log)
var warn = foo('warning',console.warn)
var error = foo('error',console.error)

module.exports = {log:log,exception:exception,warn:warn,error:error}