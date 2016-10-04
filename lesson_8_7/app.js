var Person = (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    return Person;
}());
var p = new Person('Janusz Andrzyj Nowak', 45);
console.log(p);
