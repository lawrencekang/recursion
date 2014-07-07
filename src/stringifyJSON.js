// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
	// your code goes here
	var results = '';
	if (typeof obj === "number" || typeof obj === "boolean" || obj === null) {
		results += obj;
	}

	else if (typeof obj == "string") {
		results += ('"' + obj + '"');
	}

	else if (Array.isArray(obj)) {
	results += '[';
	for (var i = 0; i<obj.length; i++) {
		results += stringifyJSON(obj[i]); 
		if (i < obj.length-1) {
			results += ',';
		}
	}
	results += ']';
	}

	else if (!Array.isArray(obj)) {
	counter = 0;
	results += '{';
	for (x in obj) {
		if (typeof obj[x] !== "function" && typeof obj[x] !== "undefined") {	
			if (counter > 0) {results += ","};
			results += stringifyJSON(x) + ":" + stringifyJSON(obj[x]);
			counter++
		}
	}
	results += '}'
	}
return results
}
		




