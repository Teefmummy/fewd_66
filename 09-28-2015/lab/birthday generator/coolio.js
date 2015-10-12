$('#button').on('click', birthdayGet);

function birthdayGet(){
	console.log('yoyoyo')
}
var days = []
var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
console.log(months[11], 20, 1987);

// var birthMonth
// var totalMonths
// birthmonth *totalmonths/2

var birthMonth = 11;

var totalMonths = 12;

if (birthMonth < 7) {
	halfMonth = birthMonth + 6;
}
else {
	halfMonth = birthMonth - 6;
}

console.log(months[halfMonth])

var pizzaRecipe = {
	timeToCook: 30,
	toppings: []
}