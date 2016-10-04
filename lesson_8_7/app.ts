class Person {
	name: string;
	age: number;
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
}

var p = new Person('Janusz Andrzyj Nowak', 45);
console.log(p);