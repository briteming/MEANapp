/* 
 * description: save a record into mongoDB
 * author: ylxdzsw@gmail.com
 * date: 2014.9.7
 */
var consts = require('../constants');
var debug = require('../debug');
var monk = require('monk');
var update = require('./update');
var db = monk(consts.db.url);

var save = function(type,content,callback){
	if(isValid(type,content)){
		db.get(type).insert(clean(type,content)).success(function(content){
			if(type == 'village'){
				update.addVillageToTown(content.s1,content._id);
			}
			debug.log("A record of "+type+" was saved successfully (save.js - 3954)");
			if(callback){
				callback(false,type,content);
			}
		});
	}else{
		debug.exception("A record of "+type+" was not valid and not saved (save.js - 1068)");
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