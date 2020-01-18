webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-seo */ "../node_modules/next-seo/lib/index.js");
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _atoms_nav_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/atoms/nav-link */ "./atoms/nav-link.js");
/* harmony import */ var normalize_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! normalize.css */ "../node_modules/normalize.css/normalize.css");
/* harmony import */ var normalize_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(normalize_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ "../node_modules/framer-motion/dist/framer-motion.es.js");
/* harmony import */ var _atoms_diagonal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/atoms/diagonal */ "./atoms/diagonal.js");
/* harmony import */ var _app_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_app.scss */ "./pages/_app.scss");
/* harmony import */ var _app_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_app_scss__WEBPACK_IMPORTED_MODULE_7__);

var _jsxFileName = "C:\\blueprvt\\desktop\\pgconference.github.io\\src\\pages\\_app.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;








function App(_ref) {
  var Component = _ref.Component,
      pageProps = _ref.pageProps,
      router = _ref.router;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(next_seo__WEBPACK_IMPORTED_MODULE_2__["DefaultSeo"], {
    title: "PGC 2020",
    description: "\uB204\uAD6C\uB098 \uBC1C\uD45C\uD558\uACE0 \uCC38\uAD00\uD560 \uC218 \uC788\uB294 \uC790\uC720\uB85C\uC6B4 \uAC1C\uBC1C \uCEE8\uD37C\uB7F0\uC2A4 - PGC 2020",
    openGraph: {
      type: "website",
      title: "프로그래밍 갤러리 컨퍼런스 2020",
      description: "누구나 발표하고 참관할 수 있는 자유로운 개발 컨퍼런스 - PGC 2020",
      images: [{
        url: "https://pgconference.github.io" + __webpack_require__(/*! @/assets/images/og.jpg */ "./assets/images/og.jpg"),
        width: 800,
        height: 600
      }],
      site_name: "PGConference",
      twitter: {
        card: "summary_large_image"
      }
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }), __jsx("div", {
    className: _app_scss__WEBPACK_IMPORTED_MODULE_7___default.a.header,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx(_atoms_diagonal__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: _app_scss__WEBPACK_IMPORTED_MODULE_7___default.a.headerDiagonal,
    style: {
      originX: 0
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }), __jsx("div", {
    className: _app_scss__WEBPACK_IMPORTED_MODULE_7___default.a.headerLeft,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, __jsx(_atoms_nav_link__WEBPACK_IMPORTED_MODULE_3__["default"], {
    href: "/",
    asPath: "/",
    activeClassName: _app_scss__WEBPACK_IMPORTED_MODULE_7___default.a.active,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx("a", {
    className: _app_scss__WEBPACK_IMPORTED_MODULE_7___default.a.headerLogo,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx("img", {
    src: __webpack_require__(/*! @/assets/images/logo-white.svg */ "./assets/images/logo-white.svg"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  })))), __jsx("div", {
    className: _app_scss__WEBPACK_IMPORTED_MODULE_7___default.a.headerRight,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, __jsx(_atoms_nav_link__WEBPACK_IMPORTED_MODULE_3__["default"], {
    href: "/",
    asPath: "/",
    activeClassName: _app_scss__WEBPACK_IMPORTED_MODULE_7___default.a.active,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, __jsx("a", {
    className: _app_scss__WEBPACK_IMPORTED_MODULE_7___default.a.headerLink,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, "\uC18C\uAC1C")), " ", __jsx(_atoms_nav_link__WEBPACK_IMPORTED_MODULE_3__["default"], {
    href: "/program",
    activeClassName: _app_scss__WEBPACK_IMPORTED_MODULE_7___default.a.active,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, __jsx("a", {
    className: _app_scss__WEBPACK_IMPORTED_MODULE_7___default.a.headerLink,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, "\uD504\uB85C\uADF8\uB7A8")), " ", __jsx(_atoms_nav_link__WEBPACK_IMPORTED_MODULE_3__["default"], {
    href: "/location",
    activeClassName: _app_scss__WEBPACK_IMPORTED_MODULE_7___default.a.active,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, __jsx("a", {
    className: _app_scss__WEBPACK_IMPORTED_MODULE_7___default.a.headerLink,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, "\uC624\uC2DC\uB294 \uAE38")))), __jsx("div", {
    className: _app_scss__WEBPACK_IMPORTED_MODULE_7___default.a.main,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__["AnimatePresence"], {
    exitBeforeEnter: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, __jsx(Component, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
    key: router.route,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  })))), __jsx("div", {
    className: _app_scss__WEBPACK_IMPORTED_MODULE_7___default.a.footer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, __jsx(_atoms_diagonal__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: _app_scss__WEBPACK_IMPORTED_MODULE_7___default.a.footerDiagonal,
    direction: "bottom",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }), __jsx("div", {
    className: _app_scss__WEBPACK_IMPORTED_MODULE_7___default.a.footerBox,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, __jsx("div", {
    className: _app_scss__WEBPACK_IMPORTED_MODULE_7___default.a.footerLeft,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, "\u24D2 2020 PGC", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }), __jsx("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, "\uBB38\uC758"), " pgconferencereserve@gmail.com"), __jsx("div", {
    className: _app_scss__WEBPACK_IMPORTED_MODULE_7___default.a.footerRight,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, "\uBCF8 \uD589\uC0AC\uB294 ", __jsx("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, "\uB514\uC2DC\uC778\uC0AC\uC774\uB4DC"), " \uC758 \uACF5\uC2DD \uD6C4\uC6D0\uC744 \uBC1B\uACE0 \uC788\uC2B5\uB2C8\uB2E4."))));
}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ })

})
//# sourceMappingURL=_app.js.f2c441f2a11f16efe962.hot-update.js.map