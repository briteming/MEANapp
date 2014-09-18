var sumOfVillages = function(data,term){
	return data.s1.reduce(function(a,b){
		var x = {};
		x[term] = Number(a[term]) + Number(b[term]);
		return x;
	})[term];
};
var square = function(x){return x * x;};
var mean = function(datalist){
	return datalist.reduce(function(a,b){return a + b}) / datalist.length;
};
var variance = function(datalist){
	return mean(datalist.map(square)) - square(mean(datalist));
}
module.exports = {
	townSchoolAreaPerStudent: function(data){
		return Number(data.r6) / (Number(data.r4) + Number(data.r5));
	},
	villageSchoolAreaPerStudent: function(data){
		return sumOfVillages(data,'r5') / (
			   sumOfVillages(data,'r3') + 
			   sumOfVillages(data,'r4')
			   );
	},
	equitabilityOfVillageSchoolAreaPerStudent: function(data){
		return variance(data.s1.map(function(x){return Number(x.r5) / (Number(x.r4) + Number(x.r3));}));
	},
	proportionOfTechnicalSchoolArea: function(data){
		return Number(data.r9) / (Number(data.r9) + Number(data.r6));
	},
	evaluationOfTownEducation: function(data){
		return data.r7;
	},
	evaluationOfVillageEducation: function(data){
		return mean(data.s1.map(function(x){return x.r6}));
	},
	proportionOfTownGreenCommutionStudent: function(data){
		return Number(data.r8) / (Number(data.r4) + Number(data.r5));
	},
	proportionOfVillageGreenCommutionStudent: function(data){
		return sumOfVillages(data,'r7') / (sumOfVillages(data,'r3') + sumOfVillages(data,'r4'));
	},
	sickbedPerThousand: function(data){
		return 1000 * Number(data.r11) / Number(data.r3);
	},
	townHealthFacilitiesAreaPerCapita: function(data){
		return Number(data.r12) / Number(data.r3);
	},
	villageHealthFacilitiesAreaPerCapita: function(data){
		return sumOfVillages(data,'r8') / sumOfVillages(data,'r2');
	},
	evaluationOfTownHealthService: function(data){
		return data.r13;
	},
	evaluationOfVillageHealthService: function(data){
		return mean(data.s1.map(function(x){return x.r9;}));
	},
	fifteenAidCoverage: function(data){
		return Number(data.r10) / Number(data.r3);
	}

}