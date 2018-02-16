// Jamison Walrod
// EECS 448
// Lab 03
// Exercise_4
// 14 February 2018
//
// String to array: https://stackoverflow.com/questions/19418244/elegant-way-to-convert-string-of-array-of-arrays-into-a-javascript-array-of-arra
// Checking if parameter is an array: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray
// Check to see if string includes a character:	https://www.w3schools.com/jsref/jsref_includes.asp
//
//


function editStyle()
{
	//// Access the tag ////
	var borderTag = document.getElementById("a");

	var backgroundTag1 = document.getElementById("c");
	console.log(backgroundTag1);
	var backgroundTag2 = document.getElementById("d");
	console.log(backgroundTag2);

	//// Access input values ////
	let r1Val = document.getElementById("r1").value;
	console.log("r1: " + r1Val);
	let g1Val = document.getElementById("g1").value;
	console.log("g1: " + g1Val);
	let b1Val = document.getElementById("b1").value;
	console.log("b1: " + b1Val);

	let width = document.getElementById("width").value;
	console.log("width: " + width);

	let r2Val = document.getElementById("r2").value;
	console.log("r2: " + r2Val);
	let g2Val = document.getElementById("g2").value;
	console.log("g2: " + g2Val);
	let b2Val = document.getElementById("b2").value;
	console.log("b2: " + b2Val);

	//// Change the style attribute ////
	console.log("Border color: " + rgb(r1Val, g1Val, b1Val));
	borderTag.style.borderColor = rgb(r1Val, g1Val, b1Val);

	console.log("Border width: " + width);
	borderTag.style.borderWidth = width;

	console.log("Background: " + rgb(r2Val, g2Val, b2Val));
	backgroundTag1.style.backgroundColor = rgb(r2Val, g2Val, b2Val);
	backgroundTag2.style.backgroundColor = rgb(r2Val, g2Val, b2Val);
}

//// Converts ////
function rgb(r, g, b)
{
	return ("rgb(" + r + "," + g + "," + b + ")");
}
