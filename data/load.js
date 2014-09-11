/* 
 * description: load a record from mongoDB
 * author: ylxdzsw@gmail.com
 * date: 2014.9.7
 */
var consts = require('../constants');
var debug = require('../debug');
var monk = require('monk');
var db = monk(consts.db.url);

var load = function(type,query,callback){
	console.log(query);
	db.get(type).find({t01:query.name},function(err,content){
		if(callback){
			callback(err,type,content);
		}else{
			debug.exception("Queried but no callback (load.js - 2895)");
		}
	});
};

module.exports = load;