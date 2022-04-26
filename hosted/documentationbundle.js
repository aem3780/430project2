/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./client/doc.jsx":
/*!************************!*\
  !*** ./client/doc.jsx ***!
  \************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const helper = __webpack_require__(/*! ./helper.js */ \"./client/helper.js\");\n\nconst Documentation = props => {\n  return /*#__PURE__*/React.createElement(\"div\", {\n    className: \"docInfo\"\n  }, /*#__PURE__*/React.createElement(\"h1\", null, \"Project Documentation\"), /*#__PURE__*/React.createElement(\"ul\", null, /*#__PURE__*/React.createElement(\"li\", null, \"What is the intended purpose of your application?\"), /*#__PURE__*/React.createElement(\"li\", null, \"What work has been completed for this milestone?\"), /*#__PURE__*/React.createElement(\"li\", null, \"What work is left, and how do you plan to complete it?\"), /*#__PURE__*/React.createElement(\"li\", null, \"What does your timeline/roadmap look like to finish on time?\"), /*#__PURE__*/React.createElement(\"li\", null, \"How are you using React?\"), /*#__PURE__*/React.createElement(\"li\", null, \"What components have you made?\"), /*#__PURE__*/React.createElement(\"li\", null, \"What components do you still plan to add?\"), /*#__PURE__*/React.createElement(\"li\", null, \"What data are you storing in MongoDB?\"), /*#__PURE__*/React.createElement(\"li\", null, \"What data do you still need to store?\"), /*#__PURE__*/React.createElement(\"li\", null, \"What is your profit model?\"), /*#__PURE__*/React.createElement(\"li\", null, \"Have you implemented it yet?\"), /*#__PURE__*/React.createElement(\"li\", null, \"If so, how?\"), /*#__PURE__*/React.createElement(\"li\", null, \"If not, what is your plan to implement it?\"), /*#__PURE__*/React.createElement(\"li\", null, \"Do you have a plan for going above and beyond? If so, what is it?\"), /*#__PURE__*/React.createElement(\"li\", null, \"If you used any borrowed code or code fragments, where did you get them from?\"), /*#__PURE__*/React.createElement(\"li\", null, \"What do the code fragments do? Where are they in your code?\")));\n};\n\nconst init = async () => {\n  const response = await fetch('/getToken');\n  const data = await response.json();\n  ReactDOM.render( /*#__PURE__*/React.createElement(Documentation, {\n    csrf: data.csrfToken\n  }), document.getElementById('documentation'));\n};\n\nwindow.onload = init;\n\n//# sourceURL=webpack://Logins/./client/doc.jsx?");

/***/ }),

/***/ "./client/helper.js":
/*!**************************!*\
  !*** ./client/helper.js ***!
  \**************************/
/***/ ((module) => {

eval("const handleError = message => {\n  document.getElementById('errorMessage').textContent = message;\n  document.getElementById('message').classList.remove('hidden');\n};\n\nconst sendPost = async (url, data, handler) => {\n  const response = await fetch(url, {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/json'\n    },\n    body: JSON.stringify(data)\n  });\n  const result = await response.json();\n  document.getElementById('message').classList.add('hidden');\n\n  if (result.error) {\n    handleError(result.error);\n  }\n\n  if (result.redirect) {\n    window.location = result.redirect;\n  }\n\n  if (handler) {\n    handler(result);\n  }\n};\n\nconst hideError = () => {\n  document.getElementById('message').classList.add('hidden');\n};\n\nconst bookDelete = async (url, data, handler) => {\n  const response = await fetch(url, {\n    method: 'DELETE',\n    headers: {\n      'Content-Type': 'application/json'\n    },\n    body: JSON.stringify(data)\n  });\n  const result = await response.json();\n\n  if (result.error) {\n    handleError(result.error);\n  }\n\n  if (result.redirect) {\n    window.location = result.redirect;\n  }\n\n  if (handler) {\n    handler(result);\n  }\n};\n\nmodule.exports = {\n  handleError,\n  sendPost,\n  hideError,\n  bookDelete\n};\n\n//# sourceURL=webpack://Logins/./client/helper.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./client/doc.jsx");
/******/ 	
/******/ })()
;