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

/***/ "./client/helper.js":
/*!**************************!*\
  !*** ./client/helper.js ***!
  \**************************/
/***/ ((module) => {

eval("const handleError = message => {\n  document.getElementById('errorMessage').textContent = message;\n  document.getElementById('message').classList.remove('hidden');\n};\n\nconst sendPost = async (url, data, handler) => {\n  const response = await fetch(url, {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/json'\n    },\n    body: JSON.stringify(data)\n  });\n  const result = await response.json();\n  document.getElementById('message').classList.add('hidden');\n\n  if (result.error) {\n    handleError(result.error);\n  }\n\n  if (result.redirect) {\n    window.location = result.redirect;\n  }\n\n  if (handler) {\n    handler(result);\n  }\n};\n\nconst hideError = () => {\n  document.getElementById('message').classList.add('hidden');\n};\n\nmodule.exports = {\n  handleError,\n  sendPost,\n  hideError\n};\n\n//# sourceURL=webpack://Logins/./client/helper.js?");

/***/ }),

/***/ "./client/info.jsx":
/*!*************************!*\
  !*** ./client/info.jsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const helper = __webpack_require__(/*! ./helper.js */ \"./client/helper.js\");\n\nconst Info = props => {\n  return /*#__PURE__*/React.createElement(\"div\", {\n    className: \"info\"\n  }, /*#__PURE__*/React.createElement(\"h1\", null, \"About Bookshelf\"), /*#__PURE__*/React.createElement(\"p\", null, \"Bookshelf is an API that helps you keep track of the books you want to read. All you have to do is fill in the corresponding information about your book and click \\\"Add Book.\\\" You can review books once they've been read, and access previously read books easily.\"), /*#__PURE__*/React.createElement(\"img\", {\n    src: \"/assets/img/step1.png\",\n    alt: \"step 1\",\n    className: \"steps\"\n  }), /*#__PURE__*/React.createElement(\"img\", {\n    src: \"/assets/img/step2.png\",\n    alt: \"step 2\",\n    className: \"steps\"\n  }), /*#__PURE__*/React.createElement(\"img\", {\n    src: \"/assets/img/step3.png\",\n    alt: \"step 3\",\n    className: \"steps\"\n  }), /*#__PURE__*/React.createElement(\"img\", {\n    src: \"/assets/img/step4.png\",\n    alt: \"step 4\",\n    className: \"steps\"\n  }), /*#__PURE__*/React.createElement(\"img\", {\n    id: \"advertisment\",\n    src: \"/assets/img/advertisment1.png\",\n    alt: \"advertisment\"\n  }));\n};\n\nconst init = async () => {\n  const response = await fetch('/getToken');\n  const data = await response.json();\n  ReactDOM.render( /*#__PURE__*/React.createElement(Info, {\n    csrf: data.csrfToken\n  }), document.getElementById('info'));\n};\n\nwindow.onload = init;\n\n//# sourceURL=webpack://Logins/./client/info.jsx?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./client/info.jsx");
/******/ 	
/******/ })()
;