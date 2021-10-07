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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_homepage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/homepage */ \"./src/modules/homepage.js\");\nconsole.log('hello webpack')\n;\n(0,_modules_homepage__WEBPACK_IMPORTED_MODULE_0__.testModule)()\n\n;(0,_modules_homepage__WEBPACK_IMPORTED_MODULE_0__.loadHome)()\n\n\n//# sourceURL=webpack://restaurantpage/./src/index.js?");

/***/ }),

/***/ "./src/modules/contact.js":
/*!********************************!*\
  !*** ./src/modules/contact.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction contactUs(){\n    //changes title to contact us\n    document.querySelector('.title').textContent = \"Contact Us\"\n    //changes infobox to contact information\n    document.querySelector('.infobox').textContent = \"Phone number: 555-555-5555\"\n    //changes image to telephone\n    document.querySelector('.image').src = \"../images/telephone.png\"\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contactUs);\n\n//# sourceURL=webpack://restaurantpage/./src/modules/contact.js?");

/***/ }),

/***/ "./src/modules/homepage.js":
/*!*********************************!*\
  !*** ./src/modules/homepage.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadHome\": () => (/* binding */ loadHome),\n/* harmony export */   \"testModule\": () => (/* binding */ testModule)\n/* harmony export */ });\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu */ \"./src/modules/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact */ \"./src/modules/contact.js\");\n\n\nfunction testModule(){\n    console.log('hello testmodule')\n}\n\nfunction loadHome(){\n    const mainTitle = document.createElement('h1')\n    mainTitle.textContent = \"My Restaurant!\"\n    document.querySelector('#content').appendChild(mainTitle)\n    mainTitle.classList.add('mainTitle')\n    const headContent = document.createElement('div')\n    const content = document.querySelector('#content')\n    content.appendChild(headContent)\n    //headContent.textContent = 'headcontent'\n    //console.log('loadhome is linked')\n    const title = document.createElement('h2')\n    title.classList.add('title')\n    title.textContent = \"Welcome to restauraunt\"\n    headContent.appendChild(title)\n    const button1 = document.createElement('button')\n    const button2 = document.createElement('button')\n    const button3 = document.createElement('button')\n    button1.textContent = 'Home'\n    button1.classList.add('button1')\n    button2.classList.add('button2')\n    button3.classList.add('button3')\n    button2.textContent = 'Menu'\n    button3.textContent = 'Contact'\n    const buttonContainer = document.createElement('div')\n    headContent.appendChild(buttonContainer)\n    buttonContainer.appendChild(button1)\n    buttonContainer.appendChild(button2)\n    buttonContainer.appendChild(button3)\n    const image = document.createElement('img')\n    image.classList.add('image')\n    headContent.appendChild(image)\n    button1.addEventListener('click', () => {\n        content.textContent = \"\"\n        loadHome()\n    })\n    button2.addEventListener('click', () => {\n        content.textContent = \"\"\n        loadHome()\n        ;(0,_menu__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\n    })\n    button3.addEventListener('click', () => {\n        content.textContent = \"\"\n        loadHome()\n        ;(0,_contact__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\n    })\n    image.src = \"../images/image1.png\"\n   \n    let infoBox = document.createElement('div')\n    infoBox.classList.add('infobox')\n    content.appendChild(infoBox)\n    infoBox.textContent = \"Our restaurant is famously known for having some of the best Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis posuere quam quam, a rutrum ante imperdiet venenatis. Duis faucibus lacinia justo et dapibus. Maecenas vitae dictum nunc. Praesent eu eros sed nulla pulvinar vulputate. Suspendisse non nisl faucibus, iaculis enim a, venenatis massa. Mauris porta vulputate nisi, eu volutpat velit aliquam sit amet. Nulla cursus, mi vitae ultrices lobortis, est nulla fringilla odio, vel feugiat velit orci vel erat. Maecenas feugiat ante sed ex tincidunt placerat. Morbi ut metus vel ex dignissim tempor quis sit amet mi. Aenean eget maximus orci, at porttitor odio.\"\n}\n\n\n\n\n//# sourceURL=webpack://restaurantpage/./src/modules/homepage.js?");

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _homepage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homepage */ \"./src/modules/homepage.js\");\n\n\nfunction helloMenu(){\n    document.querySelector('#content').textContent = \"\"\n    \n    //loads the home page\n    ;(0,_homepage__WEBPACK_IMPORTED_MODULE_0__.loadHome)()\n    //remove the homepage info box\n    document.querySelector('.infobox').textContent = \"\"\n    //remove the homepage image\n    document.querySelector('.image').src = \"\"\n    //change sub title\n    document.querySelector('.title').textContent = \"Hello menu\"\n    //factory function to create menu items\n    const menuContainer = document.createElement('div')\n    document.querySelector('#content').appendChild(menuContainer)\n    menuContainer.textContent = \"\"\n    menuContainer.classList.add('menucontainer')\n    function createMenuItems (title,image,description,price){\n        const container = document.createElement('div')\n        container.classList.add('flex')\n        const img = document.createElement('img')\n        img.setAttribute('src',image)\n        img.classList.add('foodimg')\n\n        const foodTitle = document.createElement('h3')\n        foodTitle.textContent = title\n        foodTitle.classList.add('foodtitle')\n\n        const foodDescription = document.createElement('p')\n        foodDescription.textContent = description\n        foodDescription.classList.add('fooddescription')\n\n        const foodPrice = document.createElement('p')\n        foodPrice.textContent = price\n        foodPrice.classList.add('foodprice')\n\n        //append container to menuContainer\n        menuContainer.appendChild(container)\n        //append title to container\n        container.appendChild(foodTitle)\n        //append image to title\n        foodTitle.appendChild(img)\n        //append description to title\n        foodTitle.appendChild(foodDescription)\n        //append price to description\n        foodDescription.appendChild(foodPrice)\n    }\n    createMenuItems(\"Telephone\",\"../images/telephone.png\",\"A yummy telephone\", \"$7.39\")\n    createMenuItems(\"Bacon\",\"../images/bacon.png\",\"Some good bacon bro\", \"$14.49\")\n    createMenuItems(\"Telephone\",\"../images/telephone.png\",\"A yummy telephone\", \"$7.39\")\n    createMenuItems(\"Bacon\",\"../images/bacon.png\",\"Some good bacon bro\", \"$14.49\")\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (helloMenu);\n\n//# sourceURL=webpack://restaurantpage/./src/modules/menu.js?");

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;