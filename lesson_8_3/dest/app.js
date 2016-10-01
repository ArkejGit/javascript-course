"use strict";

function myFunction() {
	for (var _len = arguments.length, params = Array(_len), _key = 0; _key < _len; _key++) {
		params[_key] = arguments[_key];
	}

	var string = params.join(', ');
	console.log(string);
}

myFunction("to", "jest", "lista", "parametrów");