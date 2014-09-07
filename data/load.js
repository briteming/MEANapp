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
	db.get(type).find(query,function(err,docs){
		if(callback){
			callback(err,type,docs);
		}else{
			debug.exception("Queried but no callback (load.js - 2895)");
		}
	});
};

module.exports = load;