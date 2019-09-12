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

eval("// import $ from \"jquery\";\n$(document).ready(function () {\n  // Функция проверяет, есть ли элемент на странице\n  function isInPage(node) {\n    return node === document.body ? false : document.body.contains(node);\n  }\n  /* Проверяем есть элементы карусели на странице, если есть запускаем */\n\n\n  (function isInPageOwnCarousel() {\n    var main = document.getElementById('slider-main');\n    var projects = document.getElementById('slider-projects');\n\n    if (isInPage(main) && isInPage(projects)) {\n      /* Инициализация OwlCarousel */\n      $('#slider-main').owlCarousel({\n        items: 1,\n        autoplay: true,\n        autoplayTimeout: 8000,\n        nav: true,\n        dots: false,\n        loop: true,\n        mouseDrag: false,\n        smartSpeed: 1000,\n        animateOut: 'fadeOut',\n        navText: ['<i class=\"fas fa-chevron-circle-left\"></i>', '<i class=\"fas fa-chevron-circle-right\"></i>'],\n        navContainerClass: 'slider-main__nav',\n        navClass: ['slider-main__arrow-left', 'slider-main__arrow-right']\n      });\n      /* Настройки OwlCarousel */\n\n      $('#slider-projects').owlCarousel({\n        items: 1,\n        autoplay: false\n      });\n    }\n  })();\n  /* Setting FancyBox */\n\n\n  $('[data-fancybox]').fancybox({\n    toolbar: false\n  }); // Плавная прокрутка\n\n  $('a[href^=\"#\"]').on('click', function () {\n    $('html, body').animate({\n      scrollTop: $($.attr(this, 'href')).offset().top\n    }, 1600);\n    return false;\n  });\n  /* --------- Lazy Load YandexMap --------- */\n\n  var yaMapsShow = false;\n  var divYaMaps = document.getElementById('YaMaps');\n\n  if (isInPage(divYaMaps)) {\n    $('a[href=\"#contacts\"]').click(function () {\n      if (!yaMapsShow) {\n        showYaMaps();\n        yaMapsShow = true;\n      }\n    });\n    $(window).scroll(function () {\n      if (!yaMapsShow) {\n        if ($(window).scrollTop() + $(window).height() > $(document).height() - 1000) {\n          showYaMaps();\n          yaMapsShow = true;\n        }\n      }\n    });\n  } // Создает элемент с Яндекс картой\n\n\n  function showYaMaps() {\n    var script = document.createElement('script');\n    script.type = 'text/javascript';\n    script.src = 'https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A3e320335013fd0d266686d9f78e94b52d990fdcb8b12710571539f8fdd72b581&amp;width=100%25&amp;height=500&amp;lang=ru_RU&amp;scroll=false';\n    document.getElementById('YaMaps').appendChild(script);\n  }\n  /* --------- end lazy load --------- */\n\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2pzL2luZGV4LmpzPzIxMjciXSwibmFtZXMiOlsiJCIsImRvY3VtZW50IiwicmVhZHkiLCJpc0luUGFnZSIsIm5vZGUiLCJib2R5IiwiY29udGFpbnMiLCJpc0luUGFnZU93bkNhcm91c2VsIiwibWFpbiIsImdldEVsZW1lbnRCeUlkIiwicHJvamVjdHMiLCJvd2xDYXJvdXNlbCIsIml0ZW1zIiwiYXV0b3BsYXkiLCJhdXRvcGxheVRpbWVvdXQiLCJuYXYiLCJkb3RzIiwibG9vcCIsIm1vdXNlRHJhZyIsInNtYXJ0U3BlZWQiLCJhbmltYXRlT3V0IiwibmF2VGV4dCIsIm5hdkNvbnRhaW5lckNsYXNzIiwibmF2Q2xhc3MiLCJmYW5jeWJveCIsInRvb2xiYXIiLCJvbiIsImFuaW1hdGUiLCJzY3JvbGxUb3AiLCJhdHRyIiwib2Zmc2V0IiwidG9wIiwieWFNYXBzU2hvdyIsImRpdllhTWFwcyIsImNsaWNrIiwic2hvd1lhTWFwcyIsIndpbmRvdyIsInNjcm9sbCIsImhlaWdodCIsInNjcmlwdCIsImNyZWF0ZUVsZW1lbnQiLCJ0eXBlIiwic3JjIiwiYXBwZW5kQ2hpbGQiXSwibWFwcGluZ3MiOiJBQUFBO0FBRUFBLENBQUMsQ0FBQ0MsUUFBRCxDQUFELENBQVlDLEtBQVosQ0FBa0IsWUFBTTtBQUN2QjtBQUNBLFdBQVNDLFFBQVQsQ0FBa0JDLElBQWxCLEVBQXdCO0FBQ3ZCLFdBQVFBLElBQUksS0FBS0gsUUFBUSxDQUFDSSxJQUFuQixHQUEyQixLQUEzQixHQUFtQ0osUUFBUSxDQUFDSSxJQUFULENBQWNDLFFBQWQsQ0FBdUJGLElBQXZCLENBQTFDO0FBQ0E7QUFFRDs7O0FBQ0MsWUFBU0csbUJBQVQsR0FBK0I7QUFDL0IsUUFBTUMsSUFBSSxHQUFHUCxRQUFRLENBQUNRLGNBQVQsQ0FBd0IsYUFBeEIsQ0FBYjtBQUNBLFFBQU1DLFFBQVEsR0FBR1QsUUFBUSxDQUFDUSxjQUFULENBQXdCLGlCQUF4QixDQUFqQjs7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b3J0ICQgZnJvbSBcImpxdWVyeVwiO1xyXG5cclxuJChkb2N1bWVudCkucmVhZHkoKCkgPT4ge1xyXG5cdC8vINCk0YPQvdC60YbQuNGPINC/0YDQvtCy0LXRgNGP0LXRgiwg0LXRgdGC0Ywg0LvQuCDRjdC70LXQvNC10L3RgiDQvdCwINGB0YLRgNCw0L3QuNGG0LVcclxuXHRmdW5jdGlvbiBpc0luUGFnZShub2RlKSB7XHJcblx0XHRyZXR1cm4gKG5vZGUgPT09IGRvY3VtZW50LmJvZHkpID8gZmFsc2UgOiBkb2N1bWVudC5ib2R5LmNvbnRhaW5zKG5vZGUpO1xyXG5cdH1cclxuXHJcblx0Lyog0J/RgNC+0LLQtdGA0Y/QtdC8INC10YHRgtGMINGN0LvQtdC80LXQvdGC0Ysg0LrQsNGA0YPRgdC10LvQuCDQvdCwINGB0YLRgNCw0L3QuNGG0LUsINC10YHQu9C4INC10YHRgtGMINC30LDQv9GD0YHQutCw0LXQvCAqL1xyXG5cdChmdW5jdGlvbiBpc0luUGFnZU93bkNhcm91c2VsKCkge1xyXG5cdFx0Y29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzbGlkZXItbWFpbicpO1xyXG5cdFx0Y29uc3QgcHJvamVjdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2xpZGVyLXByb2plY3RzJyk7XHJcblx0XHRpZiAoaXNJblBhZ2UobWFpbikgJiYgaXNJblBhZ2UocHJvamVjdHMpKSB7XHJcblx0XHRcdC8qINCY0L3QuNGG0LjQsNC70LjQt9Cw0YbQuNGPIE93bENhcm91c2VsICovXHJcblx0XHRcdCQoJyNzbGlkZXItbWFpbicpLm93bENhcm91c2VsKHtcclxuXHRcdFx0XHRpdGVtczogMSxcclxuXHRcdFx0XHRhdXRvcGxheTogdHJ1ZSxcclxuXHRcdFx0XHRhdXRvcGxheVRpbWVvdXQ6IDgwMDAsXHJcblx0XHRcdFx0bmF2OiB0cnVlLFxyXG5cdFx0XHRcdGRvdHM6IGZhbHNlLFxyXG5cdFx0XHRcdGxvb3A6IHRydWUsXHJcblx0XHRcdFx0bW91c2VEcmFnOiBmYWxzZSxcclxuXHRcdFx0XHRzbWFydFNwZWVkOiAxMDAwLFxyXG5cdFx0XHRcdGFuaW1hdGVPdXQ6ICdmYWRlT3V0JyxcclxuXHJcblx0XHRcdFx0bmF2VGV4dDogWyc8aSBjbGFzcz1cImZhcyBmYS1jaGV2cm9uLWNpcmNsZS1sZWZ0XCI+PC9pPicsICc8aSBjbGFzcz1cImZhcyBmYS1jaGV2cm9uLWNpcmNsZS1yaWdodFwiPjwvaT4nXSxcclxuXHRcdFx0XHRuYXZDb250YWluZXJDbGFzczogJ3NsaWRlci1tYWluX19uYXYnLFxyXG5cdFx0XHRcdG5hdkNsYXNzOiBbJ3NsaWRlci1tYWluX19hcnJvdy1sZWZ0JywgJ3NsaWRlci1tYWluX19hcnJvdy1yaWdodCddLFxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdC8qINCd0LDRgdGC0YDQvtC50LrQuCBPd2xDYXJvdXNlbCAqL1xyXG5cdFx0XHQkKCcjc2xpZGVyLXByb2plY3RzJykub3dsQ2Fyb3VzZWwoe1xyXG5cdFx0XHRcdGl0ZW1zOiAxLFxyXG5cdFx0XHRcdGF1dG9wbGF5OiBmYWxzZSxcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fSgpKTtcclxuXHJcblx0LyogU2V0dGluZyBGYW5jeUJveCAqL1xyXG5cdCQoJ1tkYXRhLWZhbmN5Ym94XScpLmZhbmN5Ym94KHtcclxuXHRcdHRvb2xiYXI6IGZhbHNlLFxyXG5cdH0pO1xyXG5cclxuXHQvLyDQn9C70LDQstC90LDRjyDQv9GA0L7QutGA0YPRgtC60LBcclxuXHQkKCdhW2hyZWZePVwiI1wiXScpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuXHRcdCQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcclxuXHRcdFx0c2Nyb2xsVG9wOiAkKCQuYXR0cih0aGlzLCAnaHJlZicpKS5vZmZzZXQoKS50b3AsXHJcblx0XHR9LCAxNjAwKTtcclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9KTtcclxuXHJcblx0LyogLS0tLS0tLS0tIExhenkgTG9hZCBZYW5kZXhNYXAgLS0tLS0tLS0tICovXHJcblx0bGV0IHlhTWFwc1Nob3cgPSBmYWxzZTtcclxuXHRjb25zdCBkaXZZYU1hcHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnWWFNYXBzJyk7XHJcblxyXG5cdGlmIChpc0luUGFnZShkaXZZYU1hcHMpKSB7XHJcblx0XHQkKCdhW2hyZWY9XCIjY29udGFjdHNcIl0nKS5jbGljaygoKSA9PiB7XHJcblx0XHRcdGlmICgheWFNYXBzU2hvdykge1xyXG5cdFx0XHRcdHNob3dZYU1hcHMoKTtcclxuXHRcdFx0XHR5YU1hcHNTaG93ID0gdHJ1ZTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblxyXG5cdFx0JCh3aW5kb3cpLnNjcm9sbCgoKSA9PiB7XHJcblx0XHRcdGlmICgheWFNYXBzU2hvdykge1xyXG5cdFx0XHRcdGlmICgkKHdpbmRvdykuc2Nyb2xsVG9wKCkgKyAkKHdpbmRvdykuaGVpZ2h0KCkgPiAkKGRvY3VtZW50KS5oZWlnaHQoKSAtIDEwMDApIHtcclxuXHRcdFx0XHRcdHNob3dZYU1hcHMoKTtcclxuXHRcdFx0XHRcdHlhTWFwc1Nob3cgPSB0cnVlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHQvLyDQodC+0LfQtNCw0LXRgiDRjdC70LXQvNC10L3RgiDRgSDQr9C90LTQtdC60YEg0LrQsNGA0YLQvtC5XHJcblx0ZnVuY3Rpb24gc2hvd1lhTWFwcygpIHtcclxuXHRcdGNvbnN0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xyXG5cdFx0c2NyaXB0LnR5cGUgPSAndGV4dC9qYXZhc2NyaXB0JztcclxuXHRcdHNjcmlwdC5zcmMgPSAnaHR0cHM6Ly9hcGktbWFwcy55YW5kZXgucnUvc2VydmljZXMvY29uc3RydWN0b3IvMS4wL2pzLz91bT1jb25zdHJ1Y3RvciUzQTNlMzIwMzM1MDEzZmQwZDI2NjY4NmQ5Zjc4ZTk0YjUyZDk5MGZkY2I4YjEyNzEwNTcxNTM5ZjhmZGQ3MmI1ODEmYW1wO3dpZHRoPTEwMCUyNSZhbXA7aGVpZ2h0PTUwMCZhbXA7bGFuZz1ydV9SVSZhbXA7c2Nyb2xsPWZhbHNlJztcclxuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdZYU1hcHMnKS5hcHBlbmRDaGlsZChzY3JpcHQpO1xyXG5cdH1cclxuXHQvKiAtLS0tLS0tLS0gZW5kIGxhenkgbG9hZCAtLS0tLS0tLS0gKi9cclxufSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/static/js/index.js\n");

/***/ })

/******/ });