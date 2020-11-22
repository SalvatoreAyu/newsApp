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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/detail.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/babel-runtime/core-js/json/stringify.js":
/*!**************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/json/stringify.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/json/stringify */ "./node_modules/core-js/library/fn/json/stringify.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/core-js/library/fn/json/stringify.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/library/fn/json/stringify.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js");
var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_core.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_core.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.11' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js!./src/components/Detail/index.scss":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js!./src/components/Detail/index.scss ***!
  \*******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".header {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 2;\n  width: 100%;\n  height: 0.44rem;\n  background-color: #cf5f55; }\n  .header .title {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    height: 100%;\n    color: #fff; }\n    .header .title h1 {\n      font-size: .18rem; }\n  .header .icon {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    position: absolute;\n    right: 0;\n    top: 0;\n    width: 0.44rem;\n    height: 0.44rem; }\n    .header .icon.left {\n      left: 0; }\n      .header .icon.left a {\n        font-size: 0; }\n      .header .icon.left .iconfont {\n        font-size: .18rem;\n        color: #fff;\n        vertical-align: .02rem; }\n    .header .icon.right {\n      right: 0; }\n      .header .icon.right a {\n        font-size: 0; }\n      .header .icon.right .iconfont {\n        font-size: .18rem;\n        color: #fff;\n        vertical-align: .02rem; }\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js!./src/components/Follow/index.scss":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js!./src/components/Follow/index.scss ***!
  \*******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".follow {\n  position: fixed;\n  top: .1rem;\n  right: .15rem;\n  z-index: 3;\n  font-size: .22rem; }\n  .follow.icon-star-o {\n    color: #fff; }\n  .follow.icon-star {\n    color: #FFD700; }\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js!./src/components/Iframe/index.scss":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js!./src/components/Iframe/index.scss ***!
  \*******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".iframe {\n  margin-top: .44rem; }\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./src/assets/styles/border.css":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src??ref--6-2!./src/assets/styles/border.css ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "@charset \"utf-8\";\n.border,\n.border-top,\n.border-right,\n.border-bottom,\n.border-left,\n.border-topbottom,\n.border-rightleft,\n.border-topleft,\n.border-rightbottom,\n.border-topright,\n.border-bottomleft {\n    position: relative;\n}\n.border::before,\n.border-top::before,\n.border-right::before,\n.border-bottom::before,\n.border-left::before,\n.border-topbottom::before,\n.border-topbottom::after,\n.border-rightleft::before,\n.border-rightleft::after,\n.border-topleft::before,\n.border-topleft::after,\n.border-rightbottom::before,\n.border-rightbottom::after,\n.border-topright::before,\n.border-topright::after,\n.border-bottomleft::before,\n.border-bottomleft::after {\n    content: \"\\0020\";\n    overflow: hidden;\n    position: absolute;\n}\n/* border\n * 因，边框是由伪元素区域遮盖在父级\n * 故，子级若有交互，需要对子级设置\n * 定位 及 z轴\n */\n.border::before {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    top: 0;\n    left: 0;\n    height: 100%;\n    width: 100%;\n    border: 1px solid #eaeaea;\n    -webkit-transform-origin: 0 0;\n        -ms-transform-origin: 0 0;\n            transform-origin: 0 0;\n}\n.border-top::before,\n.border-bottom::before,\n.border-topbottom::before,\n.border-topbottom::after,\n.border-topleft::before,\n.border-rightbottom::after,\n.border-topright::before,\n.border-bottomleft::before {\n    left: 0;\n    width: 100%;\n    height: 1px;\n}\n.border-right::before,\n.border-left::before,\n.border-rightleft::before,\n.border-rightleft::after,\n.border-topleft::after,\n.border-rightbottom::before,\n.border-topright::after,\n.border-bottomleft::after {\n    top: 0;\n    width: 1px;\n    height: 100%;\n}\n.border-top::before,\n.border-topbottom::before,\n.border-topleft::before,\n.border-topright::before {\n    border-top: 1px solid #eaeaea;\n    -webkit-transform-origin: 0 0;\n        -ms-transform-origin: 0 0;\n            transform-origin: 0 0;\n}\n.border-right::before,\n.border-rightbottom::before,\n.border-rightleft::before,\n.border-topright::after {\n    border-right: 1px solid #eaeaea;\n    -webkit-transform-origin: 100% 0;\n        -ms-transform-origin: 100% 0;\n            transform-origin: 100% 0;\n}\n.border-bottom::before,\n.border-topbottom::after,\n.border-rightbottom::after,\n.border-bottomleft::before {\n    border-bottom: 1px solid #eaeaea;\n    -webkit-transform-origin: 0 100%;\n        -ms-transform-origin: 0 100%;\n            transform-origin: 0 100%;\n}\n.border-left::before,\n.border-topleft::after,\n.border-rightleft::after,\n.border-bottomleft::after {\n    border-left: 1px solid #eaeaea;\n    -webkit-transform-origin: 0 0;\n        -ms-transform-origin: 0 0;\n            transform-origin: 0 0;\n}\n.border-top::before,\n.border-topbottom::before,\n.border-topleft::before,\n.border-topright::before {\n    top: 0;\n}\n.border-right::before,\n.border-rightleft::after,\n.border-rightbottom::before,\n.border-topright::after {\n    right: 0;\n}\n.border-bottom::before,\n.border-topbottom::after,\n.border-rightbottom::after,\n.border-bottomleft::after {\n    bottom: 0;\n}\n.border-left::before,\n.border-rightleft::before,\n.border-topleft::after,\n.border-bottomleft::before {\n    left: 0;\n}\n@media (-webkit-max-device-pixel-ratio: 1.49), (max-device-pixel-ratio: 1.49), (-webkit-max-device-pixel-ratio: 1.4895833333333333), (-o-max-device-pixel-ratio: 143/96), (max-resolution: 143dpi), (-o-max-device-pixel-ratio: 149/100), (max-resolution: 1.49dppx) {\n    /* 默认值，无需重置 */\n}\n@media (-webkit-min-device-pixel-ratio: 1.5) and (-webkit-max-device-pixel-ratio: 2.49), (min-device-pixel-ratio: 1.5) and (max-device-pixel-ratio: 2.49), (-webkit-min-device-pixel-ratio: 1.5) and (-webkit-max-device-pixel-ratio: 2.4895833333333335), (-o-min-device-pixel-ratio: 3/2) and (-o-max-device-pixel-ratio: 239/96), (min-resolution: 144dpi) and (max-resolution: 239dpi), (-o-min-device-pixel-ratio: 3/2) and (-o-max-device-pixel-ratio: 249/100), (min-resolution: 1.5dppx) and (max-resolution: 2.49dppx) {\n    .border::before {\n        width: 200%;\n        height: 200%;\n        -webkit-transform: scale(.5);\n            -ms-transform: scale(.5);\n                transform: scale(.5);\n    }\n    .border-top::before,\n    .border-bottom::before,\n    .border-topbottom::before,\n    .border-topbottom::after,\n    .border-topleft::before,\n    .border-rightbottom::after,\n    .border-topright::before,\n    .border-bottomleft::before {\n        -webkit-transform: scaleY(.5);\n            -ms-transform: scaleY(.5);\n                transform: scaleY(.5);\n    }\n    .border-right::before,\n    .border-left::before,\n    .border-rightleft::before,\n    .border-rightleft::after,\n    .border-topleft::after,\n    .border-rightbottom::before,\n    .border-topright::after,\n    .border-bottomleft::after {\n        -webkit-transform: scaleX(.5);\n            -ms-transform: scaleX(.5);\n                transform: scaleX(.5);\n    }\n}\n@media (-webkit-min-device-pixel-ratio: 2.5), (min-device-pixel-ratio: 2.5), (-o-min-device-pixel-ratio: 5/2), (min-resolution: 240dpi), (min-resolution: 2.5dppx) {\n    .border::before {\n        width: 300%;\n        height: 300%;\n        -webkit-transform: scale(.33333);\n            -ms-transform: scale(.33333);\n                transform: scale(.33333);\n    }\n    .border-top::before,\n    .border-bottom::before,\n    .border-topbottom::before,\n    .border-topbottom::after,\n    .border-topleft::before,\n    .border-rightbottom::after,\n    .border-topright::before,\n    .border-bottomleft::before {\n        -webkit-transform: scaleY(.33333);\n            -ms-transform: scaleY(.33333);\n                transform: scaleY(.33333);\n    }\n    .border-right::before,\n    .border-left::before,\n    .border-rightleft::before,\n    .border-rightleft::after,\n    .border-topleft::after,\n    .border-rightbottom::before,\n    .border-topright::after,\n    .border-bottomleft::after {\n        -webkit-transform: scaleX(.33333);\n            -ms-transform: scaleX(.33333);\n                transform: scaleX(.33333);\n    }\n}", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./src/assets/styles/iconfont.css":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src??ref--6-2!./src/assets/styles/iconfont.css ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
var urlEscape = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/url-escape.js */ "./node_modules/css-loader/dist/runtime/url-escape.js");
var ___CSS_LOADER_URL___0___ = urlEscape(__webpack_require__(/*! ./iconfont.eot?t=1597979566927 */ "./src/assets/styles/iconfont.eot?t=1597979566927"));
var ___CSS_LOADER_URL___1___ = urlEscape(__webpack_require__(/*! ./iconfont.eot?t=1597979566927 */ "./src/assets/styles/iconfont.eot?t=1597979566927") + "#iefix");
var ___CSS_LOADER_URL___2___ = urlEscape(__webpack_require__(/*! ./iconfont.woff?t=1597979566927 */ "./src/assets/styles/iconfont.woff?t=1597979566927"));
var ___CSS_LOADER_URL___3___ = urlEscape(__webpack_require__(/*! ./iconfont.ttf?t=1597979566927 */ "./src/assets/styles/iconfont.ttf?t=1597979566927"));
var ___CSS_LOADER_URL___4___ = urlEscape(__webpack_require__(/*! ./iconfont.svg?t=1597979566927 */ "./src/assets/styles/iconfont.svg?t=1597979566927") + "#iconfont");

// Module
exports.push([module.i, "@font-face {font-family: \"iconfont\";\n  src: url(" + ___CSS_LOADER_URL___0___ + "); /* IE9 */\n  src: url(" + ___CSS_LOADER_URL___1___ + ") format('embedded-opentype'), \n  url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAfkAAsAAAAAD0AAAAeVAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDXgqREI0iATYCJAMcCxAABCAFhG0HXxt5DCMRtoOSApL9RUI2p6weZdIbd1ls26Eu4YdWj5hG0h+Ja/Kh76xeoRF3h6ckFYzgrOReuQ/E50L4PDizZ04A/Kl71UtZkouCAsIy987mIAxbUV6tlQJE44dlSb61DUsIXwdY+w1HVdzatGMbFWGYEtvlp/+RwA6XD7Sdbz9Xh2hyPTyxUKjxq938J0QPEYt45JE0JEK6DTGPNCrNGqFULGJXs9WDx+R9AJcDAWBFCNkgza3dQ6GCQ0gEPebOmjEJas4O3hJJoGpyzaG8j5iQoNKd9AqA/eHvk29QSFSAQmIQV0pMb5mK+qR8Zz4zBhTGMgPG+kwAPW8AA5ANgPfUbbWGAchkEs1gxXMMBeCECgoZf5i0JR1JTzJ4Z/7AAPJjxUICpxwMSJDBQI/xnwcig2Q7gkbWyEBSF4MEJG10neIABIPiAQSFEkQxEODOfPbukhV7iBNAKkAvA2wMhBoPZXIdcFYoKP41HL+7f+kilbz5/BKl554+oPk/vQquY8B3EjfvUUwp/M560qy3u8j7fnuAEoRwQjc4LHrzyIMFI8EoW9ptaY1TCNxyHqVIgYrJoS8tZV8Pt0R6qQiNvIA8SezdZpEqjrJ4RZ0rxsIC/CZQ3OclMGESLS6AquwZkkOTSsvtxFZg/0DPZte7nXXQTcoeJy54zc+boauulNesyi+HmVdW1DDdM7AqbO3YJ+GKshJpJGZ4tlKslYz9E75o3FTGOTl1uxSJG+4Ray+05cqw477qNqx6NzQethTbCRkBuRLDiMxeQEq71Oo3BrcpsFlHMIlqg5CzceK3JBC9BVBu9pK1OzDX/IG95ZnZxvfLx7W7Z2fq3wK9Jeq+nk+9ICu30PhTvHobzUr3CgPWQnvC1Itg5VZvRFbD33jH3+Jc2cC0qiHg5Rri6hbHhhlLrvy0K1tT4jbxpejy+gCBl657fP0pjt1T9lrutWobJ9W1k5r6aZV8xcb5K1ptwrlyiwR649ZwrWmP1d1y701TnxpOrWO8CfScwtTWZs0NtHJmUdR65bEZlbX30ApLoIdNsJucbAMjoMoB4IsikTOK+Q3eCcMQrswAywmyWsIq2v8i2iqDuQGGoIzSEwJn0xYhrJbX1cYGWWuWjcg8dZu7iVY2flfrNeEr3IL8K6jtBvHmIZjxWsPw5u9tmXOrnpSEJWIi95FQd/ILQilj3KtTRPTBNL86d1+obaomWH39Il3oI/aGq3M2CT1CiO7ljNGA261/+XFJtYURpseKtIL6hDRIu/dht7y+gCc0TiuK6ZRKlJVUd8HpbnfwIqLUy6moynX/vnGdHia0mMidhkpeL9X1cye96fkNKIwVr/5LvktxrBAN+d50ZDxIVq9omrIwf+GULUvuZvH4lAmTJhfFWd+oHxODB69dM93Tju/H/eiquYQucPWDIz+KH83lrh+iAj9AbMcTJIhCm9X8xQC9KQnrWM1Tko/oKZPPcQm3DT1FT5pSTHZtc5MHAvymCwMBQ6e7qD3KgZ/XBDo5PyXxk4Ccx6QnSNjL9ZNXedWnrGrc6pmm4Y31Yd+Aa8c4snYtHU/HWXGcTyCBjCPj245/tJfOmkVNfe+s2b1EmrNnE/ess2f1Dv4xIiKoFQ+NHGnDe1XvwT5yFHWussM+apS9lGwbNdJxhUSvR1Avjmgj7bA9hCs4qy922Ekc63FkzRkqzmo0jWpnBV2ehqUTB6msVM6OO1cS4REk3ZqpkwTXLnbic6L3Rs32/SabFnoi/GfojZDo+OT10DTPxv2LDJVN475pO0zibTc3mh4z9IzhjSimKscLpasT29o7rvDEd23/WIeWPTCTTR/OZma0T7ddn/a9r+DIlZGBDwPT/Vf9//quSsFo4VhEXJY8C7QJTU0T9ksNZ+7MCz/+yRNh+YPEX4kPAlW36XrDwofx9dvYq2pqv+E2+k2VTx8yJGFWPU1KGJ6zMx80VWkof8hwf3rEb3gMv081pBbuS8/jVoe/V+/jU/MNi88ntVKL6ZtAv389uw6K1oWVHY4dSjgsr3Q8qgadle3OHbIQ9Cri8mfu446o/YRuFpUUoXefdkO7V3ci2Jd/TH/PEXFc//G5SiHmRQiH3tZh6V+vl0J6AYCBx9n/bCjM7KefsLsyX+Vgo5oNOYMZ/zqbgd/+NTbBVf2bSj5YS96fNvYdYnky/joUsJn/mFFyOjAwIL/qc0JUZlNCU2yama2Q+6AjCsAq5wH/LGVufLQ+1cdm/sZUXwooFAQBg4q4Hw/KBhJsKAYyVNQBK7LQdrQNHiwGA+EWAJnY6gACDe8CCieOAwYNV/140IdAgh/fARkaYcCK4cRzShtSyQ716SxoFD3YP9SOB1IuPUU9H1hOnZEsF2Z8UEJdC1mcFlvuOKCsY48wl7kqAQn3cHOuhl3HMAo36DSuVMciSahuz9hxvzgtmgSN2oIe7N+6djzQ4noq/fwDy6kz0jLhxPqDEur1QxanDL+7PLAm3Jf+YS5zJZNADxfu4UYmdrKRYazfqEGncbUEGouEJiOuHG9f7W/nNQDWhTinsqSEEU4kIhOFqOBBjexMRMQnL8LfqEPSLSYVsiM+u76++4Ejb9QsFgAAAA==') format('woff2'),\n  url(" + ___CSS_LOADER_URL___2___ + ") format('woff'),\n  url(" + ___CSS_LOADER_URL___3___ + ") format('truetype'), \n  url(" + ___CSS_LOADER_URL___4___ + ") format('svg'); /* iOS 4.1- */\n}\n\n.iconfont {\n  font-family: \"iconfont\" !important;\n  font-size: 16px;\n  font-style: normal;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.icon-star:before {\n  content: \"\\e61d\";\n}\n\n.icon-star-o:before {\n  content: \"\\e613\";\n}\n\n.icon-arrow-left:before {\n  content: \"\\e60d\";\n}\n\n.icon-error:before {\n  content: \"\\e86e\";\n}\n\n.icon-follow:before {\n  content: \"\\e606\";\n}\n\n.icon-no-data:before {\n  content: \"\\e60b\";\n}\n\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./src/assets/styles/resets.css":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src??ref--6-2!./src/assets/styles/resets.css ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "@charset \"utf-8\";html{background-color:#f5f7f8;color:#000;font-size:12px}\nbody,ul,ol,dl,dd,h1,h2,h3,h4,h5,h6,figure,form,fieldset,legend,input,textarea,button,p,blockquote,th,td,pre,xmp{margin:0;padding:0}\nbody,input,textarea,button,select,pre,xmp,tt,code,kbd,samp{line-height:1.5;font-family:tahoma,arial,\"Hiragino Sans GB\",simsun,sans-serif}\nh1,h2,h3,h4,h5,h6,small,big,input,textarea,button,select{font-size:100%}\nh1,h2,h3,h4,h5,h6{font-family:tahoma,arial,\"Hiragino Sans GB\",\"微软雅黑\",simsun,sans-serif}\nh1,h2,h3,h4,h5,h6,b,strong{font-weight:normal}\naddress,cite,dfn,em,i,optgroup,var{font-style:normal}\ntable{border-collapse:collapse;border-spacing:0;text-align:left}\ncaption,th{text-align:inherit}\nul,ol,menu{list-style:none}\nfieldset,img{border:0}\nimg,object,input,textarea,button,select{vertical-align:middle}\narticle,aside,footer,header,section,nav,figure,figcaption,hgroup,details,menu{display:block}\naudio,canvas,video{display:inline-block;*display:inline;*zoom:1}\nblockquote:before,blockquote:after,q:before,q:after{content:\"\\0020\"}\ntextarea{overflow:auto;resize:vertical}\ninput,textarea,button,select,a{outline:0 none;border: none;-webkit-box-sizing: border-box;box-sizing: border-box;}\nbutton::-moz-focus-inner,input::-moz-focus-inner{padding:0;border:0}\nmark{background-color:transparent}\na,ins,s,u,del{text-decoration:none}\nsup,sub{vertical-align:baseline}\nhtml {overflow-x: hidden;height: 100%;font-size: 50px;-webkit-tap-highlight-color: transparent;}\nbody {font-family: Arial, \"Microsoft Yahei\", \"Helvetica Neue\", Helvetica, sans-serif;color: #333;font-size: .28em;line-height: 1;-webkit-text-size-adjust: none;}\nhr {height: .02rem;margin: .1rem 0;border: medium none;border-top: .02rem solid #cacaca;}\na {color: #333;text-decoration: none;}\nimg {width: 100%;}\nhtml,body,#app{height:100%;}", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/url-escape.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/url-escape.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function escape(url, needQuotes) {
  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || needQuotes) {
    return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"';
  }

  return url;
};

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/assets/js/common.js":
/*!*********************************!*\
  !*** ./src/assets/js/common.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _fastclick = __webpack_require__(/*! ./fastclick */ "./src/assets/js/fastclick.js");

var _fastclick2 = _interopRequireDefault(_fastclick);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.addEventListener('load', function () {
  _fastclick2.default.attach(document.body);
});
document.documentElement.addEventListener('touchmove', function (e) {
  if (e.touches.length > 1) {
    e.preventDefault();
  }
});
document.documentElement.style.fontSize = document.documentElement.clientWidth / 3.75 + 'px';

/***/ }),

/***/ "./src/assets/js/fastclick.js":
/*!************************************!*\
  !*** ./src/assets/js/fastclick.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function FastClick(layer, options) {
  var oldOnClick;
  options = options || {};
  this.trackingClick = false;
  this.trackingClickStart = 0;
  this.targetElement = null;
  this.touchStartX = 0;
  this.touchStartY = 0;
  this.lastTouchIdentifier = 0;
  this.touchBoundary = options.touchBoundary || 10;
  this.layer = layer;
  this.tapDelay = options.tapDelay || 200;
  this.tapTimeout = options.tapTimeout || 700;
  if (FastClick.notNeeded(layer)) {
    return;
  }
  function bind(method, context) {
    return function () {
      return method.apply(context, arguments);
    };
  }
  var methods = ['onMouse', 'onClick', 'onTouchStart', 'onTouchMove', 'onTouchEnd', 'onTouchCancel'];
  var context = this;
  for (var i = 0, l = methods.length; i < l; i++) {
    context[methods[i]] = bind(context[methods[i]], context);
  }
  if (deviceIsAndroid) {
    layer.addEventListener('mouseover', this.onMouse, true);
    layer.addEventListener('mousedown', this.onMouse, true);
    layer.addEventListener('mouseup', this.onMouse, true);
  }
  layer.addEventListener('click', this.onClick, true);
  layer.addEventListener('touchstart', this.onTouchStart, false);
  layer.addEventListener('touchmove', this.onTouchMove, false);
  layer.addEventListener('touchend', this.onTouchEnd, false);
  layer.addEventListener('touchcancel', this.onTouchCancel, false);
  if (!Event.prototype.stopImmediatePropagation) {
    layer.removeEventListener = function (type, callback, capture) {
      var rmv = Node.prototype.removeEventListener;
      if (type === 'click') {
        rmv.call(layer, type, callback.hijacked || callback, capture);
      } else {
        rmv.call(layer, type, callback, capture);
      }
    };
    layer.addEventListener = function (type, callback, capture) {
      var adv = Node.prototype.addEventListener;
      if (type === 'click') {
        adv.call(layer, type, callback.hijacked || (callback.hijacked = function (event) {
          if (!event.propagationStopped) {
            callback(event);
          }
        }), capture);
      } else {
        adv.call(layer, type, callback, capture);
      }
    };
  }
  if (typeof layer.onclick === 'function') {
    oldOnClick = layer.onclick;
    layer.addEventListener('click', function (event) {
      oldOnClick(event);
    }, false);
    layer.onclick = null;
  }
}
var deviceIsWindowsPhone = navigator.userAgent.indexOf('Windows Phone') >= 0;
var deviceIsAndroid = navigator.userAgent.indexOf('Android') > 0 && !deviceIsWindowsPhone;
var deviceIsIOS = /iP(ad|hone|od)/.test(navigator.userAgent) && !deviceIsWindowsPhone;
var deviceIsIOS4 = deviceIsIOS && /OS 4_\d(_\d)?/.test(navigator.userAgent);
var deviceIsIOSWithBadTarget = deviceIsIOS && /OS [6-7]_\d/.test(navigator.userAgent);
var deviceIsBlackBerry10 = navigator.userAgent.indexOf('BB10') > 0;
FastClick.prototype.needsClick = function (target) {
  switch (target.nodeName.toLowerCase()) {
    case 'button':
    case 'select':
    case 'textarea':
      if (target.disabled) {
        return true;
      }
      break;
    case 'input':
      if (deviceIsIOS && target.type === 'file' || target.disabled) {
        return true;
      }
      break;
    case 'label':
    case 'iframe':
    case 'video':
      return true;
    default:
      break;
  }
  return (/\bneedsclick\b/.test(target.className)
  );
};
FastClick.prototype.needsFocus = function (target) {
  switch (target.nodeName.toLowerCase()) {
    case 'textarea':
      return true;
    case 'select':
      return !deviceIsAndroid;
    case 'input':
      switch (target.type) {
        case 'button':
        case 'checkbox':
        case 'file':
        case 'image':
        case 'radio':
        case 'submit':
          return false;
        default:
          break;
      }
      return !target.disabled && !target.readOnly;
    default:
      return (/\bneedsfocus\b/.test(target.className)
      );
  }
};
FastClick.prototype.sendClick = function (targetElement, event) {
  var clickEvent, touch;
  if (document.activeElement && document.activeElement !== targetElement) {
    document.activeElement.blur();
  }
  touch = event.changedTouches[0];
  clickEvent = document.createEvent('MouseEvents');
  clickEvent.initMouseEvent(this.determineEventType(targetElement), true, true, window, 1, touch.screenX, touch.screenY, touch.clientX, touch.clientY, false, false, false, false, 0, null);
  clickEvent.forwardedTouchEvent = true;
  targetElement.dispatchEvent(clickEvent);
};
FastClick.prototype.determineEventType = function (targetElement) {
  if (deviceIsAndroid && targetElement.tagName.toLowerCase() === 'select') {
    return 'mousedown';
  }
  return 'click';
};
FastClick.prototype.focus = function (targetElement) {
  var length;
  if (deviceIsIOS && targetElement.setSelectionRange && targetElement.type.indexOf('date') !== 0 && targetElement.type !== 'time' && targetElement.type !== 'month' && targetElement.type !== 'email') {
    length = targetElement.value.length;
    targetElement.setSelectionRange(length, length);
  } else {
    targetElement.focus();
  }
};
FastClick.prototype.updateScrollParent = function (targetElement) {
  var scrollParent, parentElement;
  scrollParent = targetElement.fastClickScrollParent;
  if (!scrollParent || !scrollParent.contains(targetElement)) {
    parentElement = targetElement;
    do {
      if (parentElement.scrollHeight > parentElement.offsetHeight) {
        scrollParent = parentElement;
        targetElement.fastClickScrollParent = parentElement;
        break;
      }
      parentElement = parentElement.parentElement;
    } while (parentElement);
  }
  if (scrollParent) {
    scrollParent.fastClickLastScrollTop = scrollParent.scrollTop;
  }
};
FastClick.prototype.getTargetElementFromEventTarget = function (eventTarget) {
  if (eventTarget.nodeType === Node.TEXT_NODE) {
    return eventTarget.parentNode;
  }
  return eventTarget;
};
FastClick.prototype.onTouchStart = function (event) {
  var targetElement, touch, selection;
  if (event.targetTouches.length > 1) {
    return true;
  }
  targetElement = this.getTargetElementFromEventTarget(event.target);
  touch = event.targetTouches[0];
  if (deviceIsIOS) {
    selection = window.getSelection();
    if (selection.rangeCount && !selection.isCollapsed) {
      return true;
    }
    if (!deviceIsIOS4) {
      if (touch.identifier && touch.identifier === this.lastTouchIdentifier) {
        event.preventDefault();
        return false;
      }
      this.lastTouchIdentifier = touch.identifier;
      this.updateScrollParent(targetElement);
    }
  }
  this.trackingClick = true;
  this.trackingClickStart = event.timeStamp;
  this.targetElement = targetElement;
  this.touchStartX = touch.pageX;
  this.touchStartY = touch.pageY;
  if (event.timeStamp - this.lastClickTime < this.tapDelay) {
    event.preventDefault();
  }
  return true;
};
FastClick.prototype.touchHasMoved = function (event) {
  var touch = event.changedTouches[0],
      boundary = this.touchBoundary;
  if (Math.abs(touch.pageX - this.touchStartX) > boundary || Math.abs(touch.pageY - this.touchStartY) > boundary) {
    return true;
  }
  return false;
};
FastClick.prototype.onTouchMove = function (event) {
  if (!this.trackingClick) {
    return true;
  }
  if (this.targetElement !== this.getTargetElementFromEventTarget(event.target) || this.touchHasMoved(event)) {
    this.trackingClick = false;
    this.targetElement = null;
  }
  return true;
};
FastClick.prototype.findControl = function (labelElement) {
  if (labelElement.control !== undefined) {
    return labelElement.control;
  }
  if (labelElement.htmlFor) {
    return document.getElementById(labelElement.htmlFor);
  }
  return labelElement.querySelector('button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea');
};
FastClick.prototype.onTouchEnd = function (event) {
  var forElement,
      trackingClickStart,
      targetTagName,
      scrollParent,
      touch,
      targetElement = this.targetElement;
  if (!this.trackingClick) {
    return true;
  }
  if (event.timeStamp - this.lastClickTime < this.tapDelay) {
    this.cancelNextClick = true;
    return true;
  }
  if (event.timeStamp - this.trackingClickStart > this.tapTimeout) {
    return true;
  }
  this.cancelNextClick = false;
  this.lastClickTime = event.timeStamp;
  trackingClickStart = this.trackingClickStart;
  this.trackingClick = false;
  this.trackingClickStart = 0;
  if (deviceIsIOSWithBadTarget) {
    touch = event.changedTouches[0];
    targetElement = document.elementFromPoint(touch.pageX - window.pageXOffset, touch.pageY - window.pageYOffset) || targetElement;
    targetElement.fastClickScrollParent = this.targetElement.fastClickScrollParent;
  }
  targetTagName = targetElement.tagName.toLowerCase();
  if (targetTagName === 'label') {
    forElement = this.findControl(targetElement);
    if (forElement) {
      this.focus(targetElement);
      if (deviceIsAndroid) {
        return false;
      }
      targetElement = forElement;
    }
  } else if (this.needsFocus(targetElement)) {
    if (event.timeStamp - trackingClickStart > 100 || deviceIsIOS && window.top !== window && targetTagName === 'input') {
      this.targetElement = null;
      return false;
    }
    this.focus(targetElement);
    this.sendClick(targetElement, event);
    if (!deviceIsIOS || targetTagName !== 'select') {
      this.targetElement = null;
      event.preventDefault();
    }
    return false;
  }
  if (deviceIsIOS && !deviceIsIOS4) {
    scrollParent = targetElement.fastClickScrollParent;
    if (scrollParent && scrollParent.fastClickLastScrollTop !== scrollParent.scrollTop) {
      return true;
    }
  }
  if (!this.needsClick(targetElement)) {
    event.preventDefault();
    this.sendClick(targetElement, event);
  }
  return false;
};
FastClick.prototype.onTouchCancel = function () {
  this.trackingClick = false;
  this.targetElement = null;
};
FastClick.prototype.onMouse = function (event) {
  if (!this.targetElement) {
    return true;
  }
  if (event.forwardedTouchEvent) {
    return true;
  }
  if (!event.cancelable) {
    return true;
  }
  if (!this.needsClick(this.targetElement) || this.cancelNextClick) {
    if (event.stopImmediatePropagation) {
      event.stopImmediatePropagation();
    } else {
      event.propagationStopped = true;
    }
    event.stopPropagation();
    event.preventDefault();
    return false;
  }
  return true;
};
FastClick.prototype.onClick = function (event) {
  var permitted;
  if (this.trackingClick) {
    this.targetElement = null;
    this.trackingClick = false;
    return true;
  }
  if (event.target.type === 'submit' && event.detail === 0) {
    return true;
  }
  permitted = this.onMouse(event);
  if (!permitted) {
    this.targetElement = null;
  }
  return permitted;
};
FastClick.prototype.destroy = function () {
  var layer = this.layer;
  if (deviceIsAndroid) {
    layer.removeEventListener('mouseover', this.onMouse, true);
    layer.removeEventListener('mousedown', this.onMouse, true);
    layer.removeEventListener('mouseup', this.onMouse, true);
  }
  layer.removeEventListener('click', this.onClick, true);
  layer.removeEventListener('touchstart', this.onTouchStart, false);
  layer.removeEventListener('touchmove', this.onTouchMove, false);
  layer.removeEventListener('touchend', this.onTouchEnd, false);
  layer.removeEventListener('touchcancel', this.onTouchCancel, false);
};
FastClick.notNeeded = function (layer) {
  var metaViewport;
  var chromeVersion;
  var blackberryVersion;
  var firefoxVersion;
  if (typeof window.ontouchstart === 'undefined') {
    return true;
  }
  chromeVersion = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [undefined, 0])[1];
  if (chromeVersion) {
    if (deviceIsAndroid) {
      metaViewport = document.querySelector('meta[name=viewport]');
      if (metaViewport) {
        if (metaViewport.content.indexOf('user-scalable=no') !== -1) {
          return true;
        }
        if (chromeVersion > 31 && document.documentElement.scrollWidth <= window.outerWidth) {
          return true;
        }
      }
    } else {
      return true;
    }
  }
  if (deviceIsBlackBerry10) {
    blackberryVersion = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/);
    if (blackberryVersion[1] >= 10 && blackberryVersion[2] >= 3) {
      metaViewport = document.querySelector('meta[name=viewport]');
      if (metaViewport) {
        if (metaViewport.content.indexOf('user-scalable=no') !== -1) {
          return true;
        }
        if (document.documentElement.scrollWidth <= window.outerWidth) {
          return true;
        }
      }
    }
  }
  if (layer.style.msTouchAction === 'none' || layer.style.touchAction === 'manipulation') {
    return true;
  }
  firefoxVersion = +(/Firefox\/([0-9]+)/.exec(navigator.userAgent) || [undefined, 0])[1];
  if (firefoxVersion >= 27) {
    metaViewport = document.querySelector('meta[name=viewport]');
    if (metaViewport && (metaViewport.content.indexOf('user-scalable=no') !== -1 || document.documentElement.scrollWidth <= window.outerWidth)) {
      return true;
    }
  }
  if (layer.style.touchAction === 'none' || layer.style.touchAction === 'manipulation') {
    return true;
  }
  return false;
};
FastClick.attach = function (layer, options) {
  return new FastClick(layer, options);
};
// if (typeof define === 'function' && typeof define.amd === 'object' && define.amd) {
// 	define(function () {
// 		return FastClick;
// 	});
// } else if (typeof module !== 'undefined' && module.exports) {
// 	module.exports = FastClick.attach;
// 	module.exports.FastClick = FastClick;
// } else {
// 	window.FastClick = FastClick;
// }
exports.default = FastClick;

/***/ }),

/***/ "./src/assets/styles/border.css":
/*!**************************************!*\
  !*** ./src/assets/styles/border.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/src??ref--6-2!./border.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./src/assets/styles/border.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/assets/styles/iconfont.css":
/*!****************************************!*\
  !*** ./src/assets/styles/iconfont.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/src??ref--6-2!./iconfont.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./src/assets/styles/iconfont.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/assets/styles/iconfont.eot?t=1597979566927":
/*!********************************************************!*\
  !*** ./src/assets/styles/iconfont.eot?t=1597979566927 ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/iconfont-8ee1a30d93b4989f.eot";

/***/ }),

/***/ "./src/assets/styles/iconfont.svg?t=1597979566927":
/*!********************************************************!*\
  !*** ./src/assets/styles/iconfont.svg?t=1597979566927 ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/iconfont-e05ed7e35eb2b3ba.svg";

/***/ }),

/***/ "./src/assets/styles/iconfont.ttf?t=1597979566927":
/*!********************************************************!*\
  !*** ./src/assets/styles/iconfont.ttf?t=1597979566927 ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/iconfont-c7e42e6f52f45676.ttf";

/***/ }),

/***/ "./src/assets/styles/iconfont.woff?t=1597979566927":
/*!*********************************************************!*\
  !*** ./src/assets/styles/iconfont.woff?t=1597979566927 ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/iconfont-abfea1293e08a3cf.woff";

/***/ }),

/***/ "./src/assets/styles/resets.css":
/*!**************************************!*\
  !*** ./src/assets/styles/resets.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/src??ref--6-2!./resets.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./src/assets/styles/resets.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/components/Detail/index.js":
/*!****************************************!*\
  !*** ./src/components/Detail/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

__webpack_require__(/*! ./index.scss */ "./src/components/Detail/index.scss");

var _util = __webpack_require__(/*! ../../libs/util */ "./src/libs/util.js");

var _index = __webpack_require__(/*! ./index.tpl */ "./src/components/Detail/index.tpl");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'detail',
  getTql: function getTql(options) {
    var url = options.url,
        title = options.title,
        showLeftIcon = options.showLeftIcon,
        showRightIcon = options.showRightIcon;

    return (0, _util.tplReplace)(_index2.default, {
      url: url,
      title: title,
      showLeftIcon: showLeftIcon ? 'block' : 'none',
      showRightIcon: showRightIcon ? 'block' : 'none'
    });
  }
};

/***/ }),

/***/ "./src/components/Detail/index.scss":
/*!******************************************!*\
  !*** ./src/components/Detail/index.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/dist/cjs.js!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js!./src/components/Detail/index.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/components/Detail/index.tpl":
/*!*****************************************!*\
  !*** ./src/components/Detail/index.tpl ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<header class="header">\r\n  <div class="icon left">\r\n    <a href="{{ url }}" style="display: {{ showLeftIcon }}">\r\n      <span class="iconfont icon-arrow-left"></span>\r\n    </a>\r\n  </div>\r\n  <div class="title">\r\n    <h1>{{ title }}</h1>\r\n  </div>\r\n  <div class="icon right">\r\n    <a href="{{ url }}" style="display: {{ showRightIcon }}">\r\n      <span class="iconfont icon-follow"></span>\r\n    </a>\r\n  </div>\r\n</header>\r\n';

}
return __p
}

/***/ }),

/***/ "./src/components/Follow/index.js":
/*!****************************************!*\
  !*** ./src/components/Follow/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ./index.tpl */ "./src/components/Follow/index.tpl");

var _index2 = _interopRequireDefault(_index);

__webpack_require__(/*! ./index.scss */ "./src/components/Follow/index.scss");

var _util = __webpack_require__(/*! ../../libs/util */ "./src/libs/util.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'follow',
  follow: function follow() {
    return (0, _util.tplReplace)(_index2.default, {
      star: 'star'
    });
  },
  oFollow: function oFollow() {
    return (0, _util.tplReplace)(_index2.default, {
      star: 'star-o'
    });
  },
  bindEvent: function bindEvent(doFollow) {
    var oFollow = document.querySelector('.follow');
    oFollow.addEventListener('click', this._setFollow.bind(this, oFollow, doFollow));
  },
  _setFollow: function _setFollow(oFollow, doFollow) {
    var className = oFollow.className;
    console.log(className + 'xx');
    oFollow.className = 'follow iconfont icon-';
    switch (className) {
      case 'follow iconfont icon-star':
        oFollow.className += 'star-o';
        doFollow(false);
        break;
      case 'follow iconfont icon-star-o':
        oFollow.className += 'star';
        doFollow(true);
      default:
        break;
    }
  }
};

/***/ }),

/***/ "./src/components/Follow/index.scss":
/*!******************************************!*\
  !*** ./src/components/Follow/index.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/dist/cjs.js!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js!./src/components/Follow/index.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/components/Follow/index.tpl":
/*!*****************************************!*\
  !*** ./src/components/Follow/index.tpl ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<span class="follow iconfont icon-{{ star }}"></span>\r\n';

}
return __p
}

/***/ }),

/***/ "./src/components/Iframe/index.js":
/*!****************************************!*\
  !*** ./src/components/Iframe/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ./index.tpl */ "./src/components/Iframe/index.tpl");

var _index2 = _interopRequireDefault(_index);

__webpack_require__(/*! ./index.scss */ "./src/components/Iframe/index.scss");

var _util = __webpack_require__(/*! ../../libs/util */ "./src/libs/util.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'NewsFrame',
  tpl: function tpl(url) {
    return (0, _util.tplReplace)(_index2.default, { url: url });
  }
};

/***/ }),

/***/ "./src/components/Iframe/index.scss":
/*!******************************************!*\
  !*** ./src/components/Iframe/index.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/dist/cjs.js!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js!./src/components/Iframe/index.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/components/Iframe/index.tpl":
/*!*****************************************!*\
  !*** ./src/components/Iframe/index.tpl ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<iframe src="{{ url }}" frameborder="0" width="100%" height="100%" class="iframe"></iframe>\r\n';

}
return __p
}

/***/ }),

/***/ "./src/js/detail.js":
/*!**************************!*\
  !*** ./src/js/detail.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _stringify = __webpack_require__(/*! babel-runtime/core-js/json/stringify */ "./node_modules/babel-runtime/core-js/json/stringify.js");

var _stringify2 = _interopRequireDefault(_stringify);

__webpack_require__(/*! ./import.js */ "./src/js/import.js");

var _index = __webpack_require__(/*! ../components/Detail/index */ "./src/components/Detail/index.js");

var _index2 = _interopRequireDefault(_index);

var _util = __webpack_require__(/*! ../libs/util.js */ "./src/libs/util.js");

var _Iframe = __webpack_require__(/*! ../components/Iframe */ "./src/components/Iframe/index.js");

var _Iframe2 = _interopRequireDefault(_Iframe);

var _Follow = __webpack_require__(/*! ../components/Follow */ "./src/components/Follow/index.js");

var _Follow2 = _interopRequireDefault(_Follow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function (doc) {
  var oApp = doc.getElementById('app');
  var currentNews = JSON.parse(localStorage.getItem('currentNews'));
  var followList = JSON.parse(localStorage.getItem('followList') || '[]');
  var init = function init() {
    render();
    bindEvent();
  };
  function render() {
    var detailTql = _index2.default.getTql({
      url: (0, _util.getUrlValue)('path'),
      title: '详情页',
      showLeftIcon: true,
      showRightIcon: false
    });
    // console.log('ssss' + getUrlValue('path'));
    // console.log(currentNews.url);
    var newsFrameTpl = _Iframe2.default.tpl(currentNews.url);
    var followTpl = createFollowTpl();
    oApp.innerHTML += detailTql + newsFrameTpl + followTpl;
  }
  function bindEvent() {
    _Follow2.default.bindEvent(doFollow);
  }
  function createFollowTpl() {
    // console.log(followList);
    var isExist = followList.find(function (item) {
      // console.log(item.uniquekey + ' xxxx ' + currentNews.uniquekey);
      return item.uniquekey === currentNews.uniquekey;
    });
    return isExist ? _Follow2.default.follow() : _Follow2.default.oFollow();
  }
  function doFollow(status) {
    var followList = JSON.parse(localStorage.getItem('followList') || '[]');
    if (status) {
      followList.push(currentNews);
    } else {
      followList = followList.filter(function (item) {
        return item.uniquekey !== currentNews.uniquekey;
      });
    }
    localStorage.setItem('followList', (0, _stringify2.default)(followList));
  }
  init();
})(document);

/***/ }),

/***/ "./src/js/import.js":
/*!**************************!*\
  !*** ./src/js/import.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ../assets/js/common.js */ "./src/assets/js/common.js");

__webpack_require__(/*! ../assets/styles/resets.css */ "./src/assets/styles/resets.css");

__webpack_require__(/*! ../assets/styles/border.css */ "./src/assets/styles/border.css");

__webpack_require__(/*! ../assets/styles/iconfont.css */ "./src/assets/styles/iconfont.css");

/***/ }),

/***/ "./src/libs/util.js":
/*!**************************!*\
  !*** ./src/libs/util.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// function tplReplace(template, templateObject) {
//   return template().replace(/\{\{(.*?)\}\}/g, (...args) => {
//     return templateObject[args[1].trim()];
//   });
// }
// export { tplReplace };
function tplReplace(template, templateObj) {
  return template().replace(/\{\{(.*?)\}\}/g, function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return templateObj[args[1].trim()];
  });
}
function scrollToTop() {
  setTimeout(function () {
    window.scrollTo(0, 0);
  }, 0);
}
function setPageData(data, count) {
  var len = data.length;
  var pageData = [];
  var index = 0;
  while (index < len) {
    pageData.push(data.slice(index, index += count));
  }
  return pageData;
}
function checkToBottom(callback) {
  // console.log(_getScrollTop());
  // console.log(_getClientHeight());
  // console.log(_getScrollHeight());
  if (_getScrollTop() + _getClientHeight() >= _getScrollHeight()) {
    // console.log('bottom');
    callback();
  }
  // return;
}
function getParentNode(target) {
  while (target = target.parentNode) {
    if (target.className.split(' ')[0] == 'news-item') {
      return target;
    }
  }
}

function getUrlValue(key) {
  var reg = new RegExp('(^|&)' + key + '=([^&]*)(&|$)', 'i');
  // console.log(window.location.search);
  var res = window.location.search.substr(1).match(reg);
  return res !== null ? decodeURIComponent(res[2]) : null;
}
//ScrollTop 滚动条滚动的距离
function _getScrollTop() {
  var scrollTop = 0,
      bodyScrollTop = 0,
      documentScrollTop = 0;
  if (document.body) {
    bodyScrollTop = document.body.scrollTop;
  }
  if (document.documentElement) {
    documentScrollTop = document.documentElement.scrollTop;
  }
  scrollTop = bodyScrollTop - documentScrollTop > 0 ? bodyScrollTop : documentScrollTop;
  return scrollTop;
}

//文档实际内容真正的高度  包括只有移动滚动条才可以看到的内容
function _getScrollHeight() {
  var scrollHeight = 0,
      bodyScrollHeight = 0,
      documentScrollHeight = 0;
  if (document.body) {
    bodyScrollHeight = document.body.scrollHeight;
  }
  if (document.documentElement) {
    documentScrollHeight = document.documentElement.scrollHeight;
  }
  scrollHeight = bodyScrollHeight - documentScrollHeight > 0 ? bodyScrollHeight : documentScrollHeight;
  return scrollHeight;
}

//窗口可视化范围的高度
function _getClientHeight() {
  var windowHeight = 0;
  if (document.compatMode == 'CSS1Compat') {
    windowHeight = document.documentElement.clientHeight;
  } else {
    windowHeight = document.body.clientHeight;
  }
  return windowHeight;
}
exports.getUrlValue = getUrlValue;
exports.getParentNode = getParentNode;
exports.tplReplace = tplReplace;
exports.scrollToTop = scrollToTop;
exports.setPageData = setPageData;
exports.checkToBottom = checkToBottom;

/***/ })

/******/ });
//# sourceMappingURL=detail.js.map