
//wrote a function named hello,
// that returned a nice message with our name
function hello(name) {
	var hi = 'top of the morning ' + name;

	//return is necessary for passing off internal variables
	return hi;
}

//saved awesome message into a variable
var goodMorning = hello('Andrew');

//placed that variable into the DOM (with method append)
$('body').append(goodMorning);

console.log(goodMorning);





//create a variable with your favoriteNumber
//write a function which takes that number
//multiply by 2
// and saves it to a new variable favNumTwo


//global scope
var favoriteNumber = 69;

function multiply(num) {

	//local scope
	favNumTwo = num * 2;
}


for (var i = 0; i < 10; i++) {
	console.log('hello');
}

multiply(favoriteNumber);

console.log(favoriteNumber);
console.log(favNumTwo);




//global variable
var favPizza = 'hawaiian'

//function that does stuff
function doSomething() {

	//local variable
	console.log('doSomething');
	var otherPizza = 'pepperoni';
	console.log('inside function' + ' ' + otherPizza);

}

//call our function
doSomething();
//consoling values
console.log(favPizza);
console.log(otherPizza);