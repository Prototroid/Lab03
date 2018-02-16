// Jamison Walrod
// EECS 448
// Lab 03
// 12 February 2018
//
// String to array: https://stackoverflow.com/questions/19418244/elegant-way-to-convert-string-of-array-of-arrays-into-a-javascript-array-of-arra
// Try and catch: https://www.w3schools.com/js/js_errors.asp
// Checking if parameter is an array: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray
// Check to see if string includes a character:	https://www.w3schools.com/jsref/jsref_includes.asp
//
// Comparing two strings: https://stackoverflow.com/questions/7837456/how-to-compare-arrays-in-javascript
// https://stackoverflow.com/questions/21627276/replacing-nodes-error-the-node-to-be-replaced-is-not-a-child-of-this-node
//
//


//// Array initialized ////
picArray = [5];

//// Puts names of the picture files into the array ////
for(let i=1; i < 6; i++)
{
	picArray[i-1] = ("pic" + i + ".jpg").toString();
	console.log(picArray[i-1]);
}

//// First picture displayed automatically ////
let x = 0;
let currentPic = getPic(0, "pic1", 1);


//// Displays picture and returns id ////
function getPic(i, currentPic, num)
{	
	
	let pic = document.createElement("img");
	
	
	pic.src = picArray[i].toString();
	console.log(pic.src);
	pic.width = 600;
	pic.height = 400;
	console.log()
	pic.id = ('pic' + (i+1)).toString();
	

	let oldPic = document.getElementById(currentPic);
	document.getElementById(currentPic).replaceWith(pic);
	
	return pic.id;
}


//// Goes to the next image ////
function nextPic()
{
	console.log(x);
	if(currentPic.toString() == "pic5")
	{
		x = 0;
		currentPic = getPic(x, currentPic, 1);
		console.log(currentPic);
	}
	else
	{
		x++;
		currentPic = getPic(x, currentPic, 1);
		console.log(currentPic);
	}
}

//// Goes to the previous image ////
function previousPic()
{
	console.log(x);
	if(currentPic.toString() == "pic1")
	{
	 	x = 4;
	 	currentPic = getPic(x, currentPic, x);
	 	console.log(currentPic);
	}
	else
	{
		x--;
		currentPic = getPic(x, currentPic, x);
		console.log(currentPic);
	}
}
