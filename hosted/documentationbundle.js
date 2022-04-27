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

eval("const helper = __webpack_require__(/*! ./helper.js */ \"./client/helper.js\");\n\nconst Documentation = props => {\n  return /*#__PURE__*/React.createElement(\"div\", {\n    className: \"docInfo\"\n  }, /*#__PURE__*/React.createElement(\"h1\", null, \"Project Documentation\"), /*#__PURE__*/React.createElement(\"ul\", null, /*#__PURE__*/React.createElement(\"li\", null, \"What is the intended purpose of your application? What does it do?\"), /*#__PURE__*/React.createElement(\"p\", null, \"The intended purpose of my application is to allow the user to create a reading list and then once the book has been finished, the reader can rate the book and have it added to a \\u201Creviewed books\\u201D list. The user can create a list of books, view their list, review their read books, and access their reviews list.\"), /*#__PURE__*/React.createElement(\"li\", null, \"How are you using React? What components have you made?\"), /*#__PURE__*/React.createElement(\"p\", null, \"I am implementing React through the login, and signup features, the reading list component, the reading form component, the documentation page, the information page, the reviews list component, and the review form component.\"), /*#__PURE__*/React.createElement(\"li\", null, \"What data are you storing in MongoDB?\"), /*#__PURE__*/React.createElement(\"p\", null, \"User log-in information, user book lists, and user review lists.\"), /*#__PURE__*/React.createElement(\"li\", null, \"What is your profit model?\"), /*#__PURE__*/React.createElement(\"p\", null, \"My profit model is to use advertisements for monetization. Similar to the app Good Reads.\"), /*#__PURE__*/React.createElement(\"li\", null, \"What went right in the development of this project?\"), /*#__PURE__*/React.createElement(\"p\", null, \"I was surprised by how much of this project went right. I really like how it turned out.\"), /*#__PURE__*/React.createElement(\"li\", null, \"What went wrong in the development of this project?\"), /*#__PURE__*/React.createElement(\"p\", null, \"I was unable to implement a password-changing procedure and a delete button for this project.\"), /*#__PURE__*/React.createElement(\"li\", null, \"What did you learn while developing this project?\"), /*#__PURE__*/React.createElement(\"p\", null, \"I learned that although I really enjoy doing the designing aspects of frontend dev, I could see myself spending more time learning back-end aspects as well. I was originally intimidated by this project, but learning from class examples and assignments helped immensely.\"), /*#__PURE__*/React.createElement(\"li\", null, \"If you were to continue, what would you do to improve your application?\"), /*#__PURE__*/React.createElement(\"p\", null, \"If I were to continue I would like to add a delete button and have a component that would allow the user to make multiple lists and sort them.\"), /*#__PURE__*/React.createElement(\"li\", null, \"If you went above and beyond, how did you do so?\"), /*#__PURE__*/React.createElement(\"p\", null, \"I used photoshop and illustrator to edit and create my backgrounds and icons. (I\\u2019m not sure if this counts.)\"), /*#__PURE__*/React.createElement(\"li\", null, \"If you used any borrowed code or code fragments, where did you get them from?\"), /*#__PURE__*/React.createElement(\"p\", null, \"I didn\\u2019t, only past code examples from class and assignments. \"), /*#__PURE__*/React.createElement(\"li\", null, \"What do the code fragments do? Where are they in your code?\"), /*#__PURE__*/React.createElement(\"p\", null, \"n/a\")), /*#__PURE__*/React.createElement(\"img\", {\n    id: \"advertisment\",\n    src: \"/assets/img/advertisment2.png\",\n    alt: \"advertisment\"\n  }));\n};\n\nconst init = async () => {\n  const response = await fetch('/getToken');\n  const data = await response.json();\n  ReactDOM.render( /*#__PURE__*/React.createElement(Documentation, {\n    csrf: data.csrfToken\n  }), document.getElementById('documentation'));\n};\n\nwindow.onload = init;\n\n//# sourceURL=webpack://Logins/./client/doc.jsx?");

/***/ }),

/***/ "./client/helper.js":
/*!**************************!*\
  !*** ./client/helper.js ***!
  \**************************/
/***/ ((module) => {

eval("const handleError = message => {\n  document.getElementById('errorMessage').textContent = message;\n  document.getElementById('message').classList.remove('hidden');\n};\n\nconst sendPost = async (url, data, handler) => {\n  const response = await fetch(url, {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/json'\n    },\n    body: JSON.stringify(data)\n  });\n  const result = await response.json();\n  document.getElementById('message').classList.add('hidden');\n\n  if (result.error) {\n    handleError(result.error);\n  }\n\n  if (result.redirect) {\n    window.location = result.redirect;\n  }\n\n  if (handler) {\n    handler(result);\n  }\n};\n\nconst hideError = () => {\n  document.getElementById('message').classList.add('hidden');\n};\n\nmodule.exports = {\n  handleError,\n  sendPost,\n  hideError\n};\n\n//# sourceURL=webpack://Logins/./client/helper.js?");

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