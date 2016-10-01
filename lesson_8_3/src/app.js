function myFunction(...params) {
	var string = params.join(', ');
	console.log(string);
}

myFunction("to", "jest", "lista", "parametrów");