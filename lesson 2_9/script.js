var person = {
	name: "John Black",
	age: 35,
	email: "johnblack@example.com",
	sayHello: function() {
		alert("Hello " + this.name);
	}
}

person.sayHello();