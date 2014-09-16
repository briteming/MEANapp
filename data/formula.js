module.exports = {
	townSchoolAreaPerStudent: function(data){
		return Number(data.r6) / (Number(data.r4) + Number(data.r5));
	}
}