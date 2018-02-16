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
//
//

main = function() {

	chalk.newline();
}


//
// Takes in two passwords and validates them
function passwordValidate()
{
	try
	{
		//// Heading ////
		chalk.newline();
		//chalk.newline();

		//// Enter password ////
		chalk.print("Password: ");
		let p1 = chalk.entrybox();
		p1.then(function(val)
		{
			console.log("Password: ", val);
		});

		//// Confirm password ////
		chalk.print("Confirm password: ");
		let p2 = chalk.entrybox();
		p2.then(function(val)
		{
			console.log("Confirm password: ", val);
		});

		//// Promise.all will validate the two passwords ////
		Promise.all([p1,p2]).then(function(p)
		{
			console.log("Inside Promise.all");

			let a = p[0];
			let b = p[1];

			//// Checks if password or confirm password has a space ////
			if(a.includes(" ") || b.includes(" "))
			{
				console.log(p);
				console.log("ERROR: Invalid password!");
				//chalk.println("");
				chalk.println("Invalid password! Cannot contain spaces!");;
				throw e;

			}
			//// Checks if the two passwords are not the same ////
			else if(!(a.length >= 8) || !(b.length >= 8))
			{
				console.log(p);
				console.log("ERROR: The passwords are not at least 8 characters long!");
				chalk.println("");
				chalk.println("The passwords are not at least 8 characters long! Please try again.");
				passwordValidate();
			}
			//// Checks if the two passwords are not the same ////
			else if(comparePasswords(a, b) != true)
			{
				console.log(p);
				console.log("ERROR: The passwords entered don't match!");
				chalk.println("");
				chalk.println("The passwords entered don't match! Please try again.");
				passwordValidate();
			}
			//// Tells the user that the password validation was successful ////
			else
			{
				console.log("Success!");
				chalk.println("");
				chalk.println("Validation successful!");
				//window.location.href = "Exercise_1.html";
			}

		}).catch(function(e)
		{
			console.log(p1 + " : " + p2);
			console.log("ERROR: Invalid password!");
			//chalk.println("");
			chalk.println("Invalid password! Please try again.");
			passwordValidate();
		});
	}
	catch(err)
	{
		console.log("ERROR: Invalid input or other error has occured!");
		chalk.println(" ");
		chalk.println("ERROR");
	}

}

//
// Compares first password to second password to see if they are the same
function comparePasswords(a, b)
{
	if(a == b)
	{
		return true;
	}
	else
	{
		return false;
	}
}

