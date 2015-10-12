var lightSwitch = 'on';

$('#lightswitch').on('click', lights);

function lights(){
if(lightSwitch == 'on') {
	//turn the page dark
	$('body').css('background-color', '#263248');
	$('.window1').css('background-color', '#FF9800');
	$('.window2').css('background-color', '#FF9800');
	$('.window3').css('background-color', '#FF9800');
	$('.window4').css('background-color', '#FF9800');
	console.log('hi there');
	lightSwitch = 'off';
}
else {
	//turn the page light
	$('body').css('background-color', 'yellow');
	$('.window1').css('background-color', '#263248');
	$('.window2').css('background-color', '#263248');
	$('.window3').css('background-color', '#263248');
	$('.window4').css('background-color', '#263248');
	lightSwitch = 'on';

}
}
