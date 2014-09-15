/* 
 * description: load a record from mongoDB
 * author: ylxdzsw@gmail.com
 * date: 2014.9.7
 */
var consts = require('../constants');
var debug = require('../debug');
var monk = require('monk');
var formula = require('./formula');
var ds = require('./datascheme');

var db = monk(consts.db.url);

var load = function(type,query,callback){
	db.get(type).find({t01:query.name},function(err,content){
		for(i in ds[type]){
			if(i[0] == 'i'){
				content[i] = formula[ds[type][i]['_formula']](content);
			}
		}
		if(callback){
			callback(err,type,content);
		}else{
			debug.exception("Queried but no callback (load.js - 2895)");
		}
	});
};

load.one = function(type,id,callback){
	db.get(type).find({_id:id},function(err,content){
		if(err || !content.length){
			callback(false);
		}else{
			callback(content[0]);
		}
	});
};

module.exports = load;