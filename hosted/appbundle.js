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

eval("const handleError = message => {\n  document.getElementById('errorMessage').textContent = message;\n  document.getElementById('message').classList.remove('hidden');\n};\n\nconst sendPost = async (url, data, handler) => {\n  const response = await fetch(url, {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/json'\n    },\n    body: JSON.stringify(data)\n  });\n  const result = await response.json();\n  document.getElementById('message').classList.add('hidden');\n\n  if (result.error) {\n    handleError(result.error);\n  }\n\n  if (result.redirect) {\n    window.location = result.redirect;\n  }\n\n  if (handler) {\n    handler(result);\n  }\n};\n\nconst hideError = () => {\n  document.getElementById('message').classList.add('hidden');\n};\n\nconst bookDelete = async (url, data, handler) => {\n  const response = await fetch(url, {\n    method: 'DELETE',\n    headers: {\n      'Content-Type': 'application/json'\n    },\n    body: JSON.stringify(data)\n  });\n  const result = await response.json();\n\n  if (result.error) {\n    handleError(result.error);\n  }\n\n  if (result.redirect) {\n    window.location = result.redirect;\n  }\n\n  if (handler) {\n    handler(result);\n  }\n};\n\nmodule.exports = {\n  handleError,\n  sendPost,\n  hideError,\n  bookDelete\n};\n\n//# sourceURL=webpack://Logins/./client/helper.js?");

/***/ }),

/***/ "./client/maker.jsx":
/*!**************************!*\
  !*** ./client/maker.jsx ***!
  \**************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const helper = __webpack_require__(/*! ./helper.js */ \"./client/helper.js\");\n\nconst handleBook = e => {\n  e.preventDefault();\n  helper.hideError();\n  const title = e.target.querySelector('#bookTitle').value;\n  const author = e.target.querySelector('#bookAuthor').value;\n  const pages = e.target.querySelector('#bookPages').value;\n  const genre = e.target.querySelector('#bookGenre').value;\n  const _csrf = e.target.querySelector('#_csrf').value;\n\n  if (!title || !author || !pages) {\n    helper.handleError('All fields are required!');\n    return false;\n  }\n\n  helper.sendPost(e.target.action, {\n    title,\n    author,\n    pages,\n    genre,\n    _csrf\n  }, loadBooksFromServer);\n  return false;\n};\n\nconst BookForm = props => {\n  return /*#__PURE__*/React.createElement(\"form\", {\n    id: \"bookForm\",\n    onSubmit: handleBook,\n    name: \"bookForm\",\n    action: \"/maker\",\n    method: \"POST\",\n    className: \"bookForm\"\n  }, /*#__PURE__*/React.createElement(\"div\", null, /*#__PURE__*/React.createElement(\"label\", {\n    htmlFor: \"title\"\n  }, \"Title: \"), /*#__PURE__*/React.createElement(\"input\", {\n    id: \"bookTitle\",\n    type: \"text\",\n    name: \"title\",\n    placeholder: \"Book Title\"\n  })), /*#__PURE__*/React.createElement(\"div\", null, /*#__PURE__*/React.createElement(\"label\", {\n    htmlFor: \"author\"\n  }, \"Author: \"), /*#__PURE__*/React.createElement(\"input\", {\n    id: \"bookAuthor\",\n    type: \"text\",\n    name: \"author\",\n    placeholder: \"Author\"\n  })), /*#__PURE__*/React.createElement(\"div\", null, /*#__PURE__*/React.createElement(\"label\", {\n    htmlFor: \"pages\"\n  }, \"Pages: \"), /*#__PURE__*/React.createElement(\"input\", {\n    id: \"bookPages\",\n    type: \"number\",\n    min: \"0\",\n    name: \"pages\"\n  })), /*#__PURE__*/React.createElement(\"div\", null, /*#__PURE__*/React.createElement(\"label\", {\n    htmlFor: \"genre\"\n  }, \"Genre: \"), /*#__PURE__*/React.createElement(\"select\", {\n    id: \"bookGenre\",\n    name: \"genre\"\n  }, /*#__PURE__*/React.createElement(\"option\", null, \"Action/Adventure\"), /*#__PURE__*/React.createElement(\"option\", null, \"Art/Architecture\"), /*#__PURE__*/React.createElement(\"option\", null, \"Autobiography\"), /*#__PURE__*/React.createElement(\"option\", null, \"Biography\"), /*#__PURE__*/React.createElement(\"option\", null, \"Business\"), /*#__PURE__*/React.createElement(\"option\", null, \"Children's Book\"), /*#__PURE__*/React.createElement(\"option\", null, \"Classic\"), /*#__PURE__*/React.createElement(\"option\", null, \"Comic\"), /*#__PURE__*/React.createElement(\"option\", null, \"Cookbook\"), /*#__PURE__*/React.createElement(\"option\", null, \"Crime\"), /*#__PURE__*/React.createElement(\"option\", null, \"Drama\"), /*#__PURE__*/React.createElement(\"option\", null, \"Fantasy\"), /*#__PURE__*/React.createElement(\"option\", null, \"Guide\"), /*#__PURE__*/React.createElement(\"option\", null, \"Health/Fitness\"), /*#__PURE__*/React.createElement(\"option\", null, \"Historical Fiction\"), /*#__PURE__*/React.createElement(\"option\", null, \"History\"), /*#__PURE__*/React.createElement(\"option\", null, \"Horror\"), /*#__PURE__*/React.createElement(\"option\", null, \"Humor\"), /*#__PURE__*/React.createElement(\"option\", null, \"Memoir\"), /*#__PURE__*/React.createElement(\"option\", null, \"Mystery\"), /*#__PURE__*/React.createElement(\"option\", null, \"Paranormal\"), /*#__PURE__*/React.createElement(\"option\", null, \"Philosophy\"), /*#__PURE__*/React.createElement(\"option\", null, \"Poetry\"), /*#__PURE__*/React.createElement(\"option\", null, \"Political\"), /*#__PURE__*/React.createElement(\"option\", null, \"Religion\"), /*#__PURE__*/React.createElement(\"option\", null, \"Romance\"), /*#__PURE__*/React.createElement(\"option\", null, \"Science\"), /*#__PURE__*/React.createElement(\"option\", null, \"Science Fiction\"), /*#__PURE__*/React.createElement(\"option\", null, \"Self Help\"), /*#__PURE__*/React.createElement(\"option\", null, \"Short Story\"), /*#__PURE__*/React.createElement(\"option\", null, \"Sports\"), /*#__PURE__*/React.createElement(\"option\", null, \"Thriller\"), /*#__PURE__*/React.createElement(\"option\", null, \"Travel\"), /*#__PURE__*/React.createElement(\"option\", null, \"True Crime\"), /*#__PURE__*/React.createElement(\"option\", null, \"Young Adult\"))), /*#__PURE__*/React.createElement(\"input\", {\n    id: \"_csrf\",\n    type: \"hidden\",\n    name: \"_csrf\",\n    value: props.csrf\n  }), /*#__PURE__*/React.createElement(\"input\", {\n    className: \"makeBookSubmit\",\n    type: \"submit\",\n    value: \"Add Book\"\n  }));\n};\n\nconst BookList = props => {\n  if (props.books.length === 0) {\n    return /*#__PURE__*/React.createElement(\"div\", {\n      className: \"bookList\"\n    }, /*#__PURE__*/React.createElement(\"h3\", {\n      className: \"emptyBook\"\n    }, \"No Books Yet!\"));\n  }\n\n  const bookNodes = props.books.map(book => {\n    return /*#__PURE__*/React.createElement(\"div\", {\n      key: book._id,\n      className: \"book\"\n    }, /*#__PURE__*/React.createElement(\"div\", {\n      className: \"bookFlex\"\n    }, /*#__PURE__*/React.createElement(\"img\", {\n      src: \"/assets/img/bookicon.png\",\n      alt: \"book icon\",\n      className: \"bookIcon\"\n    }), /*#__PURE__*/React.createElement(\"h3\", {\n      className: \"bookTitle\"\n    }, \" Title: \", book.title, \" \"), /*#__PURE__*/React.createElement(\"h3\", {\n      className: \"bookAuthor\"\n    }, \" Author: \", book.author, \" \"), /*#__PURE__*/React.createElement(\"h3\", {\n      className: \"bookPages\"\n    }, \" Pages: \", book.pages, \" \"), /*#__PURE__*/React.createElement(\"h3\", {\n      className: \"bookGenre\"\n    }, \" Genre: \", book.genre, \" \"), /*#__PURE__*/React.createElement(\"input\", {\n      className: \"finishedBook\",\n      type: \"submit\",\n      value: \"Finished Book\"\n    })));\n  });\n  return /*#__PURE__*/React.createElement(\"div\", {\n    className: \"bookList\"\n  }, bookNodes);\n};\n\nconst loadBooksFromServer = async () => {\n  const response = await fetch('/getBooks');\n  const data = await response.json();\n  ReactDOM.render( /*#__PURE__*/React.createElement(BookList, {\n    books: data.books\n  }), document.getElementById('books'));\n};\n\nconst init = async () => {\n  const response = await fetch('/getToken');\n  const data = await response.json();\n  ReactDOM.render( /*#__PURE__*/React.createElement(BookForm, {\n    csrf: data.csrfToken\n  }), document.getElementById('makeBook'));\n  ReactDOM.render( /*#__PURE__*/React.createElement(BookList, {\n    books: []\n  }), document.getElementById('books'));\n  loadBooksFromServer();\n};\n\nwindow.onload = init;\n\n//# sourceURL=webpack://Logins/./client/maker.jsx?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./client/maker.jsx");
/******/ 	
/******/ })()
;