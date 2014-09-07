/* 
 * description: save a record into mongoDB
 * author: ylxdzsw@gmail.com
 * date: 2014.9.7
 */
var consts = require('../constants');
var debug = require('../debug');
var monk = require('monk');
var db = monk(consts.db.url);

var save = function(type,content,callback){
	if(isValid(type,content)){
		db.get(type).insert(clean(type,content));
		if(callback){
			callback(false,type,content);
		}
	}else{
		callback(new Error('Not Valid Data!'),type,content);
	}
};

var isValid = function(type,content){
	/*TODO*/
	return true;
};

var clean = function(type,content){
	/*TODO*/
	return content;
};

module.exports = save;