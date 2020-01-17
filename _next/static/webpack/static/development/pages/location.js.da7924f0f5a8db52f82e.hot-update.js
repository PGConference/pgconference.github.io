webpackHotUpdate("static\\development\\pages\\location.js",{

/***/ "./molecules/jumbotron.js":
/*!********************************!*\
  !*** ./molecules/jumbotron.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "../node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "../node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ "../node_modules/framer-motion/dist/framer-motion.es.js");
/* harmony import */ var _atoms_spacer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/atoms/spacer */ "./atoms/spacer.js");
/* harmony import */ var _atoms_diagonal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/atoms/diagonal */ "./atoms/diagonal.js");
/* harmony import */ var _jumbotron_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./jumbotron.scss */ "./molecules/jumbotron.scss");
/* harmony import */ var _jumbotron_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_jumbotron_scss__WEBPACK_IMPORTED_MODULE_6__);


var _jsxFileName = "C:\\blueprvt\\desktop\\pgconference.github.io\\src\\molecules\\jumbotron.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;





var paragraphVars = {
  initial: {
    x: -10,
    opacity: 0,
    transition: {
      ease: "circIn"
    }
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      ease: "circOut"
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var title = _ref.title,
      subTitle = _ref.subTitle,
      description = _ref.description;
  return __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__["motion"].div, {
    variants: {
      initial: {
        opacity: 0
      },
      animate: {
        opacity: 1
      }
    },
    transition: {
      staggerChildren: 0.1,
      ease: "backOut"
    },
    initial: "initial",
    animate: "animate",
    exit: "initial",
    className: _jumbotron_scss__WEBPACK_IMPORTED_MODULE_6___default.a.wrap,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx(_atoms_diagonal__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: _jumbotron_scss__WEBPACK_IMPORTED_MODULE_6___default.a.diagonal,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }), __jsx("div", {
    className: _jumbotron_scss__WEBPACK_IMPORTED_MODULE_6___default.a.box,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__["motion"].h1, {
    variants: paragraphVars,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, title), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__["motion"].h2, {
    variants: paragraphVars,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, subTitle), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__["motion"].p, {
    variants: paragraphVars,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, description)));
});

/***/ })

})
//# sourceMappingURL=location.js.da7924f0f5a8db52f82e.hot-update.js.map