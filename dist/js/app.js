/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./kitchenSink.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./kitchenSink.ts":
/*!************************!*\
  !*** ./kitchenSink.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// import $ from 'jquery';
var firstName = 'Tremain';
var States = 50; //represents the # of states in the US
var num1 = 5;
var num2 = 4;
var sum = add(num1, num2); //function that will calculate the sum of the mentioned #'s
var sayHello = 'Hello World!'; // you have to define the name of the function too, if you want the resulting call of the function (the console.log) to show up correctly
// const checkAge = checkAge;
var script = 'Hello, World!';
//var getLength = getLength;
var nest = [
    { name: "Charles", age: 21 },
    { name: "Abby", age: 27 },
    { name: "James", age: 18 },
    { name: "John", age: 17 },
];
var house = [
    { name: 'Johan', age: 13 },
    { name: 'Freeda', age: 16 },
    { name: 'Birch', age: 10 },
    { name: 'Felicity', age: 25 },
    { name: 'Winter', age: 24 },
];
console.log(sayHello);
console.log(sum);
console.log(script.length);
var veggietales = ['Carrots', 'Broccoli', 'Celery', 'Cucumber', 'Potatoes'];
var count = 0;
while (count < veggietales.length) {
    console.log(veggietales[count]);
    count++;
}
var count2 = 0;
while (count2 < 4) {
    checkAge(nest[count2].name, nest[count2].age);
    count2++;
} //this loop is what the checkage function uses to cycle through the nest array which consists of all of the names and ages.
//t is just a variable to represent where the code should start
//used the parameter (t<4) because I technically only have 3 objects, since list items start at 0.
function add(num1, num2) {
    return num1 + num2;
}
;
sayHello2();
function sayHello2() {
    return alert('Hello World!');
}
;
function checkAge(name, age) {
    if (age < 21) {
        console.log('Sorry, ' + name + ' you shall not pass!');
    } //this is the function for the "you aren't old enough to view this page prompt."
}
; // I don't have to console.log outside of this because its already being called upon by the 'while' function above.
var t = 0;
while (t < 5) {
    checkAge(house[t].name, house[t].age);
    t++;
} //this loop is what the checkage function uses to cycle through the nest array which consists of all of the names and ages.
//t is just a variable to represent where the code should start
//used the parameter (t<5) because I technically only have 4 objects, since list items start at 0.
function getLength(script) {
    if (script.length % 2 == 0) {
        return ('The world is nice and even!');
    }
    else {
        return ('The world is an odd place!');
    }
}
console.log(getLength(script));
// interface IPerson {
//     name: string;
//     age: number;
// }


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4va2l0Y2hlblNpbmsudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGYTtBQUNiO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQiw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLDJCQUEyQjtBQUNoQyxLQUFLLHdCQUF3QjtBQUM3QixLQUFLLHlCQUF5QjtBQUM5QixLQUFLLHdCQUF3QjtBQUM3QjtBQUNBO0FBQ0EsS0FBSyx5QkFBeUI7QUFDOUIsS0FBSywwQkFBMEI7QUFDL0IsS0FBSyx5QkFBeUI7QUFDOUIsS0FBSyw0QkFBNEI7QUFDakMsS0FBSywwQkFBMEI7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2tpdGNoZW5TaW5rLnRzXCIpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG4vLyBpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xudmFyIGZpcnN0TmFtZSA9ICdUcmVtYWluJztcbnZhciBTdGF0ZXMgPSA1MDsgLy9yZXByZXNlbnRzIHRoZSAjIG9mIHN0YXRlcyBpbiB0aGUgVVNcbnZhciBudW0xID0gNTtcbnZhciBudW0yID0gNDtcbnZhciBzdW0gPSBhZGQobnVtMSwgbnVtMik7IC8vZnVuY3Rpb24gdGhhdCB3aWxsIGNhbGN1bGF0ZSB0aGUgc3VtIG9mIHRoZSBtZW50aW9uZWQgIydzXG52YXIgc2F5SGVsbG8gPSAnSGVsbG8gV29ybGQhJzsgLy8geW91IGhhdmUgdG8gZGVmaW5lIHRoZSBuYW1lIG9mIHRoZSBmdW5jdGlvbiB0b28sIGlmIHlvdSB3YW50IHRoZSByZXN1bHRpbmcgY2FsbCBvZiB0aGUgZnVuY3Rpb24gKHRoZSBjb25zb2xlLmxvZykgdG8gc2hvdyB1cCBjb3JyZWN0bHlcbi8vIGNvbnN0IGNoZWNrQWdlID0gY2hlY2tBZ2U7XG52YXIgc2NyaXB0ID0gJ0hlbGxvLCBXb3JsZCEnO1xuLy92YXIgZ2V0TGVuZ3RoID0gZ2V0TGVuZ3RoO1xudmFyIG5lc3QgPSBbXG4gICAgeyBuYW1lOiBcIkNoYXJsZXNcIiwgYWdlOiAyMSB9LFxuICAgIHsgbmFtZTogXCJBYmJ5XCIsIGFnZTogMjcgfSxcbiAgICB7IG5hbWU6IFwiSmFtZXNcIiwgYWdlOiAxOCB9LFxuICAgIHsgbmFtZTogXCJKb2huXCIsIGFnZTogMTcgfSxcbl07XG52YXIgaG91c2UgPSBbXG4gICAgeyBuYW1lOiAnSm9oYW4nLCBhZ2U6IDEzIH0sXG4gICAgeyBuYW1lOiAnRnJlZWRhJywgYWdlOiAxNiB9LFxuICAgIHsgbmFtZTogJ0JpcmNoJywgYWdlOiAxMCB9LFxuICAgIHsgbmFtZTogJ0ZlbGljaXR5JywgYWdlOiAyNSB9LFxuICAgIHsgbmFtZTogJ1dpbnRlcicsIGFnZTogMjQgfSxcbl07XG5jb25zb2xlLmxvZyhzYXlIZWxsbyk7XG5jb25zb2xlLmxvZyhzdW0pO1xuY29uc29sZS5sb2coc2NyaXB0Lmxlbmd0aCk7XG52YXIgdmVnZ2lldGFsZXMgPSBbJ0NhcnJvdHMnLCAnQnJvY2NvbGknLCAnQ2VsZXJ5JywgJ0N1Y3VtYmVyJywgJ1BvdGF0b2VzJ107XG52YXIgY291bnQgPSAwO1xud2hpbGUgKGNvdW50IDwgdmVnZ2lldGFsZXMubGVuZ3RoKSB7XG4gICAgY29uc29sZS5sb2codmVnZ2lldGFsZXNbY291bnRdKTtcbiAgICBjb3VudCsrO1xufVxudmFyIGNvdW50MiA9IDA7XG53aGlsZSAoY291bnQyIDwgNCkge1xuICAgIGNoZWNrQWdlKG5lc3RbY291bnQyXS5uYW1lLCBuZXN0W2NvdW50Ml0uYWdlKTtcbiAgICBjb3VudDIrKztcbn0gLy90aGlzIGxvb3AgaXMgd2hhdCB0aGUgY2hlY2thZ2UgZnVuY3Rpb24gdXNlcyB0byBjeWNsZSB0aHJvdWdoIHRoZSBuZXN0IGFycmF5IHdoaWNoIGNvbnNpc3RzIG9mIGFsbCBvZiB0aGUgbmFtZXMgYW5kIGFnZXMuXG4vL3QgaXMganVzdCBhIHZhcmlhYmxlIHRvIHJlcHJlc2VudCB3aGVyZSB0aGUgY29kZSBzaG91bGQgc3RhcnRcbi8vdXNlZCB0aGUgcGFyYW1ldGVyICh0PDQpIGJlY2F1c2UgSSB0ZWNobmljYWxseSBvbmx5IGhhdmUgMyBvYmplY3RzLCBzaW5jZSBsaXN0IGl0ZW1zIHN0YXJ0IGF0IDAuXG5mdW5jdGlvbiBhZGQobnVtMSwgbnVtMikge1xuICAgIHJldHVybiBudW0xICsgbnVtMjtcbn1cbjtcbnNheUhlbGxvMigpO1xuZnVuY3Rpb24gc2F5SGVsbG8yKCkge1xuICAgIHJldHVybiBhbGVydCgnSGVsbG8gV29ybGQhJyk7XG59XG47XG5mdW5jdGlvbiBjaGVja0FnZShuYW1lLCBhZ2UpIHtcbiAgICBpZiAoYWdlIDwgMjEpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ1NvcnJ5LCAnICsgbmFtZSArICcgeW91IHNoYWxsIG5vdCBwYXNzIScpO1xuICAgIH0gLy90aGlzIGlzIHRoZSBmdW5jdGlvbiBmb3IgdGhlIFwieW91IGFyZW4ndCBvbGQgZW5vdWdoIHRvIHZpZXcgdGhpcyBwYWdlIHByb21wdC5cIlxufVxuOyAvLyBJIGRvbid0IGhhdmUgdG8gY29uc29sZS5sb2cgb3V0c2lkZSBvZiB0aGlzIGJlY2F1c2UgaXRzIGFscmVhZHkgYmVpbmcgY2FsbGVkIHVwb24gYnkgdGhlICd3aGlsZScgZnVuY3Rpb24gYWJvdmUuXG52YXIgdCA9IDA7XG53aGlsZSAodCA8IDUpIHtcbiAgICBjaGVja0FnZShob3VzZVt0XS5uYW1lLCBob3VzZVt0XS5hZ2UpO1xuICAgIHQrKztcbn0gLy90aGlzIGxvb3AgaXMgd2hhdCB0aGUgY2hlY2thZ2UgZnVuY3Rpb24gdXNlcyB0byBjeWNsZSB0aHJvdWdoIHRoZSBuZXN0IGFycmF5IHdoaWNoIGNvbnNpc3RzIG9mIGFsbCBvZiB0aGUgbmFtZXMgYW5kIGFnZXMuXG4vL3QgaXMganVzdCBhIHZhcmlhYmxlIHRvIHJlcHJlc2VudCB3aGVyZSB0aGUgY29kZSBzaG91bGQgc3RhcnRcbi8vdXNlZCB0aGUgcGFyYW1ldGVyICh0PDUpIGJlY2F1c2UgSSB0ZWNobmljYWxseSBvbmx5IGhhdmUgNCBvYmplY3RzLCBzaW5jZSBsaXN0IGl0ZW1zIHN0YXJ0IGF0IDAuXG5mdW5jdGlvbiBnZXRMZW5ndGgoc2NyaXB0KSB7XG4gICAgaWYgKHNjcmlwdC5sZW5ndGggJSAyID09IDApIHtcbiAgICAgICAgcmV0dXJuICgnVGhlIHdvcmxkIGlzIG5pY2UgYW5kIGV2ZW4hJyk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gKCdUaGUgd29ybGQgaXMgYW4gb2RkIHBsYWNlIScpO1xuICAgIH1cbn1cbmNvbnNvbGUubG9nKGdldExlbmd0aChzY3JpcHQpKTtcbi8vIGludGVyZmFjZSBJUGVyc29uIHtcbi8vICAgICBuYW1lOiBzdHJpbmc7XG4vLyAgICAgYWdlOiBudW1iZXI7XG4vLyB9XG4iXSwic291cmNlUm9vdCI6IiJ9