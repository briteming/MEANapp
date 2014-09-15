module.exports = {
	townSchoolAreaPerStudent: function(data){
		return data.r6 / (data.r4 + data.r5);
	}
}