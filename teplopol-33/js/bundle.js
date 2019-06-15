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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/static/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/static/js/index.js":
/*!********************************!*\
  !*** ./src/static/js/index.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// import $ from \"jquery\";\n\n/* Init OwlCarousel */\n$(document).ready(function () {\n  $('#slider-main').owlCarousel({\n    items: 1,\n    autoplay: true,\n    autoplayTimeout: 8000,\n    nav: true,\n    dots: false,\n    loop: true,\n    smartSpeed: 1000,\n    animateOut: 'fadeOut',\n    navText: ['<i class=\"fas fa-chevron-circle-left\"></i>', '<i class=\"fas fa-chevron-circle-right\"></i>'],\n    navContainerClass: 'slider-main__nav',\n    navClass: ['slider-main__arrow-left', 'slider-main__arrow-right']\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2pzL2luZGV4LmpzPzIxMjciXSwibmFtZXMiOlsiJCIsImRvY3VtZW50IiwicmVhZHkiLCJvd2xDYXJvdXNlbCIsIml0ZW1zIiwiYXV0b3BsYXkiLCJhdXRvcGxheVRpbWVvdXQiLCJuYXYiLCJkb3RzIiwibG9vcCIsInNtYXJ0U3BlZWQiLCJhbmltYXRlT3V0IiwibmF2VGV4dCIsIm5hdkNvbnRhaW5lckNsYXNzIiwibmF2Q2xhc3MiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBO0FBQ0FBLENBQUMsQ0FBQ0MsUUFBRCxDQUFELENBQVlDLEtBQVosQ0FBa0IsWUFBTTtBQUN2QkYsR0FBQyxDQUFDLGNBQUQsQ0FBRCxDQUFrQkcsV0FBbEIsQ0FBOEI7QUFDN0JDLFNBQUssRUFBRSxDQURzQjtBQUU3QkMsWUFBUSxFQUFFLElBRm1CO0FBRzdCQyxtQkFBZSxFQUFFLElBSFk7QUFJN0JDLE9BQUcsRUFBRSxJQUp3QjtBQUs3QkMsUUFBSSxFQUFFLEtBTHVCO0FBTTdCQyxRQUFJLEVBQUUsSUFOdUI7QUFPN0JDLGNBQVUsRUFBRSxJQVBpQjtBQVE3QkMsY0FBVSxFQUFFLFNBUmlCO0FBVTdCQyxXQUFPLEVBQUUsQ0FBQyw0Q0FBRCxFQUErQyw2Q0FBL0MsQ0FWb0I7QUFXN0JDLHFCQUFpQixFQUFFLGtCQVhVO0FBWTdCQyxZQUFRLEVBQUUsQ0FBQyx5QkFBRCxFQUE0QiwwQkFBNUI7QUFabUIsR0FBOUI7QUFjQSxDQWZEIiwiZmlsZSI6Ii4vc3JjL3N0YXRpYy9qcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCAkIGZyb20gXCJqcXVlcnlcIjtcclxuXHJcbi8qIEluaXQgT3dsQ2Fyb3VzZWwgKi9cclxuJChkb2N1bWVudCkucmVhZHkoKCkgPT4ge1xyXG5cdCQoJyNzbGlkZXItbWFpbicpLm93bENhcm91c2VsKHtcclxuXHRcdGl0ZW1zOiAxLFxyXG5cdFx0YXV0b3BsYXk6IHRydWUsXHJcblx0XHRhdXRvcGxheVRpbWVvdXQ6IDgwMDAsXHJcblx0XHRuYXY6IHRydWUsXHJcblx0XHRkb3RzOiBmYWxzZSxcclxuXHRcdGxvb3A6IHRydWUsXHJcblx0XHRzbWFydFNwZWVkOiAxMDAwLFxyXG5cdFx0YW5pbWF0ZU91dDogJ2ZhZGVPdXQnLFxyXG5cclxuXHRcdG5hdlRleHQ6IFsnPGkgY2xhc3M9XCJmYXMgZmEtY2hldnJvbi1jaXJjbGUtbGVmdFwiPjwvaT4nLCAnPGkgY2xhc3M9XCJmYXMgZmEtY2hldnJvbi1jaXJjbGUtcmlnaHRcIj48L2k+J10sXHJcblx0XHRuYXZDb250YWluZXJDbGFzczogJ3NsaWRlci1tYWluX19uYXYnLFxyXG5cdFx0bmF2Q2xhc3M6IFsnc2xpZGVyLW1haW5fX2Fycm93LWxlZnQnLCAnc2xpZGVyLW1haW5fX2Fycm93LXJpZ2h0J10sXHJcblx0fSk7XHJcbn0pO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/static/js/index.js\n");

/***/ })

/******/ });