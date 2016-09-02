var u = require('underscore');
var array = [1, 2, 3, 4, 5];
var x = u._.map(array, function(v) {return v + 10});
console.log(x);