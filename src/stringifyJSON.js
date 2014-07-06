// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
	// your code goes here
	// if obj contains properties, stringify the first key:value pair, delete the pair, then run stringifyJSON again
	var results = "";
	if (typeof obj == "number") {
		return results += obj;
	}

	else if (obj === null) {
		return "null";
	}

	else if (obj === true) {
		return ('true');
	}

	else if (obj === false) {
		return ('false');
	}

	else if (typeof obj == "string") {
		return results + ('"' + obj + '"');
	}

	else if (Array.isArray(obj)) {
		console.log("this happened");
		var arrResults = [];
		var counter = 0;
		var arrayCounter = 0;
		var arrayRec = function(array) {
			for (var i = counter; i<array.length; i++) {
				if (typeof array[i] == "undefined") {
					arrResults.push('[]');
					counter ++
				}
				if (typeof array[i] == "number"){
					console.log("NUMBER!");
					arrResults.push(array[i]);
					console.log(arrResults);
					counter ++
				}
				else if (typeof array[i] == "string"){
					console.log("STRING!")
					arrResults.push('"' + array[i] + '"');
					console.log(arrResults);
					counter ++
				}
				else if (Array.isArray(array[i])) {
					arrResults.push('[' + array[i] + ']');
					console.log("[] was pushed");

				}
			
			}

		}
		arrayRec(obj);
		console.log("loop finished");
		return '[' + arrResults + ']';
		}
		
	}



