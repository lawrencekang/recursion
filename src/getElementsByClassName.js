// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  // your code here
	var results = [];
	var body = document.body;
  	// get a classList for each childNode
		// if the className is in the classList, push that element to the results array
	var domWalk = function (element){
		if (element.nodeType === 1) {
			var classList = element.classList;
			for (var i = 0; i < classList.length; i++) {
				console.log(classList[i], className);
				if (classList[i] == className) {
				console.log("match")
				results.push(element)
				console.log(results);
				};
			};
			if (element.hasChildNodes) {
  				var nodes = element.childNodes;
  				console.log(nodes, 'these are the children')
  				for (var j = 0; j < nodes.length; j++) {
  					domWalk(nodes[j]);
  				}
			}
		}

		
	}
  domWalk(body);
  console.log(results);
  return results;
};
