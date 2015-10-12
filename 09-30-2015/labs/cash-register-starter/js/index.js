// WRITE CODE HERE
// To create a cash register

// number starts at 0
// input number
// press enter
// add value of number to old value
// display all values
// display total

var total = 0;

$('form').on('submit', updateTotal);

function updateTotal(){
	event.preventDefault();

	var newEntry = parseFloat($('input').val());
	total = parseFloat(total) + parseFloat(newEntry);
	fancyTotal = currencyFormat(total);

	console.log(newEntry);
	console.log(parseFloat(total) + newEntry);

	$('#total').html(currencyFormat(total));
	//creates new divs so they line up together on top of each other
	$('#entries').append('<div>' + currencyFormat(total) + '</div>');
	$('#newEntry').val(' ');

}


// A SUPER handy function that makes
// our normal values look pretty
// when we place them on the page
function currencyFormat(number) {
    var currency = parseFloat(number);
    currency = currency.toFixed(2);
    currency = '$' + currency;
    return currency;
}
