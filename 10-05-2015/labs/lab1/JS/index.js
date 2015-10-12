$('.hero-slider').slick({
	infinite: true,
	slidesToShow: 3,
	slidesToScroll: 2,
	arrows: false,
	dots: true
});

$('.hero-slider .slick-slide').on('click', function() {
	alert('hello slick-slide');
}
);

var windowHeight = $(window).height();
$('.hero-slider').css('height', windowHeight);
$('.hero-slider .slick-slide').css('height', windowHeight);