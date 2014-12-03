$(document).ready(function() {

var fizzBuzz = function(num) {

var num = $("#numArea").val();

if (isNaN(num)) {
	alert("Not a Number, idiot..."); /*not working*/
} else if (num < 0 || num >  100) {
	alert("Between 1 and 100 please!") /*this alert works*/
} else if (num % 1 !== 0) {
	alert("Only whole numbers, buddy..") /*this alert works*/
} else {
	for (var i = 1; i <= num; i++) {
		if ( i % 3 ===  0 && i % 5 === 0 ) {
			$("#result").append("<li>FizzBuzz</li>");
		} else if ( i % 3 === 0 ) {
			$("#result").append("<li>fizz</li>");
		} else if ( i % 5 === 0 ) {
			$("#result").append("<li>buzz</li>");
		} else {
			$("#result").append("<li>" + i + "</li>");
		}
	}
	$("#numArea").val("");
}

}

$("#submit").on("click", function() {
	fizzBuzz();
	event.preventDefault();
});

$("#numArea").focusin( function () {
	$("li").remove();
});

$(document).keydown( function () {
	if (event.keyCode === 13) {
		fizzBuzz();
		event.preventDefault();
	}
});

});