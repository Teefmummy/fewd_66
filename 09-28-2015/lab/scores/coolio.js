var score = 0;

$('#add5').on('click', addFive);
$('#reset').on('click', reset);
$('#add10').on('click', addTen);
$('#min1').on('click', minOne);

function addFive() {
	updateResult(score);
	console.log(score);
	score = score + 5;
}
function addTen() {
	updateResult(score);
	console.log(score);
	score = score + 10;
}
function minOne() {
	updateResult(score);
	console.log(score);
	score = score - 1;
}
function reset() {
	updateResult(score);
	console.log(score);
	score = 0;
}
//var porkchops = value passed into function //
function updateResult(porkchops){
	$('#result').html(porkchops);
}
