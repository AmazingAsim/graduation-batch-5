/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./math */ \"./math.js\");\n// let a:number  =10;\r\n// let name:string = \"hello\";\r\n// let Alive:boolean = true;\r\n// let money:null = null;\r\n// let x:undefined = undefined;\r\n// let s:any = 1\r\n\r\n// // non primitive data types\r\n\r\n// let fruits:string[] = [\"apple\",\"banana\",\"mango\"];\r\n// let evenNumbers:number[] = [2,4,6,8];\r\n// let mix:(number | string)[] = [1,\"hello\",2,\"world\"];\r\n\r\n// let person:[string,number] = [\"John\",10];\r\n// console.log(person);\r\n\r\n// let student:{name:String,email:String,remote:boolean} = {\r\n//     name:\"John\",\r\n//     email:\"g5m5o@example.com\",\r\n//     remote:true\r\n// }\r\n\r\n// let students:{name:String,email:String,remote:boolean}[] = [\r\n//     {\r\n//         name:\"John\",\r\n//         email:\"g5m5o@example.com\",\r\n//         remote:true\r\n//     }\r\n// ]\r\n\r\n// enum Cards{\r\n//     Spade='Spade',\r\n//     Heart = 'Heart',\r\n//     Club = 'Club',\r\n//     Diamond= 'Diamond'\r\n// }\r\n\r\n// let ace1:Cards = Cards.Spade;\r\n// let ace2:Cards = Cards.Heart;\r\n\r\n// console.log(ace1);\r\n\r\n// let friends = {};\r\n// (friends as {name:string}).name = \"John\";\r\n\r\n// type Car = {\r\n//     name:string,\r\n//     model:string,\r\n//     year:number,\r\n//     brand:String,\r\n//     powerWindow:boolean\r\n// }\r\n\r\n\r\n\r\n// let vetara:Car = {\r\n//     name:\"Vetara\",\r\n//     model:\"Vetara\",\r\n//     year:2022,\r\n//     brand:\"Suzuki\",\r\n//     powerWindow:true\r\n// }\r\n\r\n// type studentId = Number | string;\r\n\r\n\r\n// interface hero{\r\n//     name:string ,\r\n//     strength:number,\r\n//     speed:number\r\n// }\r\n\r\n// interface hero{\r\n//     wealth:number\r\n// }\r\n\r\n// interface Superhero extends hero{\r\n//     superPower:string\r\n// }\r\n\r\n// let peter:hero = {\r\n//     name:\"Peter\",\r\n//     strength:10,\r\n//     speed:20,\r\n//     wealth:100\r\n// }\r\n\r\n// let spiderMan:Superhero={\r\n//     superPower:\"spider sense\",\r\n//     name:\"Spider Man\",\r\n//     strength:10,\r\n//     speed:20,\r\n//     wealth:100\r\n// }\r\n\r\n// function add(a:number,b:number):String{\r\n//   return `${a} + ${b} = ${a+b}`\r\n// }\r\n\r\n// function jump():void{\r\n//     return  void 5\r\n// }\r\n\r\n// function playGame():never{\r\n//     while(true){\r\n//         console.log(\"playing\");\r\n//     }\r\n// }\r\n\r\n\r\n// console.log(jump());\r\n\r\n// class Car{\r\n//     model:String;\r\n//     readonly color:String; // readonly,public,private,protected\r\n//     year:number;\r\n//    constructor(model:String,color:String,year:number){\r\n//      this.color = color;\r\n//      this.model = model;\r\n//      this.year = year\r\n//    }\r\n\r\n//    intro(){\r\n//      console.log(`This is a ${this.year} ${this.color} ${this.model}`);\r\n//    }\r\n// }\r\n\r\n// let newcar = new Car(\"Vetara\",\"Red\",2022);\r\n\r\n// class SUV extends Car{\r\n//     powerWindow:boolean;\r\n//     constructor(model:String,color:String,year:number,powerWindow:boolean){\r\n//         super(model,color,year);\r\n//         this.powerWindow = powerWindow\r\n//     }\r\n//     displayColor(){jlksddvsdjlkvsdjlkdldklkj   \r\n//         console.log(this.color)\r\n//     }\r\n// }\r\n\r\n// let newSUV = new SUV(\"Scorpio\",\"white\",2020,true);\r\n\r\n// console.log(newSUV.color);\r\n// newSUV.color = \"black\";\r\n\r\n\r\n\r\n// function countLenth(a:string[]):number{\r\n//     return a.length;\r\n// }\r\n\r\n// countLenth([\"a\",\"b\",\"c\"]);\r\n\r\n\r\n// function countLenth2(a:number[]):number{\r\n//     return a.length;\r\n// }\r\n\r\n// countLenth2([1,2,3]);\r\n\r\n\r\n// function getLength<T>(a:T[]):number{\r\n//     return a.length;\r\n// }\r\n\r\n// getLength<string>([\"a\",\"b\",\"c\"]);\r\n\r\n// interface HasLength{\r\n//     length:number\r\n// }\r\n\r\n// function logLength<T extends HasLength>(a:T){\r\n//     console.log(a.length);\r\n// }\r\n\r\n// logLength(\"hello\");\r\n// // logLength([1,2,3]); \r\n// // logLength(['a','b','c']);\r\n// // logLength({length:10})\r\n// // logLength(5);\r\n\r\n// interface Box<T>{\r\n//     value:T\r\n// }\r\n\r\n// const box:Box<number> = {\r\n//     value:10\r\n// };\r\n\r\n// console.log(box);\r\n\r\n\r\n\r\n// function merge<A,B>(obj:A,obj2:B):A&B{\r\n//     return {...obj,...obj2};\r\n// }\r\n\r\n// merge({a:\"hello\"},{b:2});\r\n// const apple = 'apple';\r\n// console.log(apple);\r\n\r\n\r\nconsole.log('hello ts');\n\n//# sourceURL=webpack://ts/./index.ts?");

/***/ }),

/***/ "./math.js":
/*!*****************!*\
  !*** ./math.js ***!
  \*****************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.default = add;\nfunction add(a, b) {\n    return a + b;\n}\n\n\n//# sourceURL=webpack://ts/./math.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.ts");
/******/ 	
/******/ })()
;