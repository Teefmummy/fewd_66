var imageNames = ['fall.jpg', 'summer.jpg', 'spring.jpg', 'winter.jpg'];

$('.image-wrapper img').attr('src', 'climate/' + imageNames[0]);

$('#changeimg').on('click', imageSwitch);

var imageIndex = 0;

function imageSwitch() {
	console.log(imageIndex);
	$('.image-wrapper img').attr('src', 'climate/' + imageNames[imageIndex]);
	imageIndex ++;
	if(imageIndex ==4) {
		imageIndex = 0;
	}
};