$('form').validate();

$('input[name="end-date"], input[name="start-date"]').datepicker();

$('form').on('submit', function(event) {
	event.preventDefault();

	console.log($('form').serialize())
});

var availableTags = [
      "Alabama",
      "Alaska",
      "Arkansas",
      "Bollywood",
      "C",
      "C++",
      "Clojure",
      "COBOL",
      "ColdFusion",
      "Erlang",
      "Fortran",
      "Groovy",
      "Haskell",
      "Java",
      "JavaScript",
      "Lisp",
      "Perl",
      "PHP",
      "Python",
      "Ruby",
      "Scala",
      "Scheme"
];

$('input[name="state"]').autocomplete({
	source: availableTags
});

