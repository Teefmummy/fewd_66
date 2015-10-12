$('h1').on('click', function(){
	console.log('hello')
});

//recieve input data
// write function that turns input data using formula
//T(F) = T(F) * 1.8 + 32
//place into div
//change background color

$('form').on('submit', convert);

var finalText = ('#finalAnswer');

function convert(event) {
	event.preventDefault();
	//turns input value into number
	var celcTemp = parseFloat($('#enter').val());
	
	console.log(celcTemp);
	// $('#finalAnswer').html(' ');
	//attaches the answer
	$('#finalAnswer').html(celcTemp*1.8+32);

	//clears the input box
	$('#enter').val('');
	if (celcTemp  >= 30) {
	$('body').css('background-color', '#9C2B22');
	}
	else if (celcTemp >= 10) {
		$('body').css('background-color', '#1D832A');
	}
	else {
		$('body').css('background-color', '#20C1F2');	
	}
}