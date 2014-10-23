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
	db.get(type).find(query,function(err,content){
		content = content[0];
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

load.town = function(query,callback){
	db.get('town').find(query,function(err,content){
		content = content[0];
		load.villageDatas(content,function(data){
			if(data.s1.length){
				for(i in ds['town']){
					if(i[0] == 'i'){
						data[i] = formula[ds['town'][i]['_formula']](data);
					}
				}
			}
			if(callback){
				callback(err,data);
			}else{
				debug.exception("Queried but no callback (load.js - 5817)");
			}
		});
	});
};

load.village = function(query,callback){
	db.get('village').find(query,function(err,content){
		content = content[0];
		if(callback){
			callback(err,content);
		}else{
			debug.exception("Queried but no callback (load.js - 8921)");
		}
	});
};

load.villageDatas = function(town,callback){
	var iter = function(town,callback,villageList){
		var x = town.s1.pop();
		if(x){
			load.one('village',x,function(content){
				if(!content){
					debug.warn("read one village failed (load.js - 4961)");
					callback(void(0));
					return;
				}
				villageList.push(content);
				iter(town,callback,villageList);
			});
			return;
		}
		town.s1 = villageList;
		callback(town);
	};
	if(!town.s1 || town.s1.length == 0){
		town.s1 = [];
		callback(town);
	}
	iter(town,callback,[]);
};

module.exports = load;