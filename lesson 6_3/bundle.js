(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = function(a, b) {
	return a + b;
}
},{}],2:[function(require,module,exports){
module.exports = function(a, b) {
	return a / b;
}
},{}],3:[function(require,module,exports){
module.exports = function(a, b) {
	return a * b;
}
},{}],4:[function(require,module,exports){
var add = require('./functions/add.js');
var divide = require('./functions/divide.js');
var multiply = require('./functions/multiply.js');

console.log(add(2,3));
console.log(divide(2,3));
console.log(multiply(2,3));
},{"./functions/add.js":1,"./functions/divide.js":2,"./functions/multiply.js":3}]},{},[4]);
