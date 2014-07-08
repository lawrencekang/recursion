// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  // your code here
	var results = [];
	var body = document.body;
	var domWalk = function (element){
		if (element.nodeType === 1) { // check if the element is an element_node
			var classList = element.classList; 
			for (var i = 0; i < classList.length; i++) {
				if (classList[i] == className) {
				// check if any of the element's class names match the given class name
				results.push(element)
				};
			};
			if (element.hasChildNodes) { 
			// if element has childnodes, perform the class name check (domWalk) on each child node
  				var nodes = element.childNodes;
  				for (var j = 0; j < nodes.length; j++) {
  					domWalk(nodes[j]);
  				}
			}
		}

		
	}
  domWalk(body);
  return results;
};
