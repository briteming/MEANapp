/* 
 * description: update a record in mongoDB
 * author: ylxdzsw@gmail.com
 * date: 2014.9.14
 */
var consts = require('../constants');
var debug = require('../debug');
var monk = require('monk');
var db = monk(consts.db.url);

var update = function(){
	/*TODO*/
	return new Error("TODO");
};

update.addVillageToTown = function(townname,villageid,callback){
	db.get('town').update({r1:townname},{$push:{s1:villageid}}).success(function(){
		debug.log("A village was added to a town successfully (update.js - 9316)");
		if(callback){
			callback(false);
		}
	}).error(function(a){
		debug.error("Add a village to a town failed! (update.js - 3829)");
		if(callback){
			callback(new Error("Unknown bug"));
		}
	});
};

module.exports = update;