webpackHotUpdate("static\\development\\pages\\location.js",{

/***/ "./pages/location.js":
/*!***************************!*\
  !*** ./pages/location.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.map */ "../node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_google_maps__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-google-maps */ "../node_modules/react-google-maps/lib/index.js");
/* harmony import */ var react_google_maps__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_google_maps__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_common_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/styles/common.scss */ "./styles/common.scss");
/* harmony import */ var _styles_common_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_common_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _molecules_jumbotron__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/molecules/jumbotron */ "./molecules/jumbotron.js");
/* harmony import */ var _atoms_Diagonal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/atoms/Diagonal */ "./atoms/Diagonal.js");
/* harmony import */ var _molecules_centered_mouse__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/molecules/centered-mouse */ "./molecules/centered-mouse.js");
/* harmony import */ var _location_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./location.scss */ "./pages/location.scss");
/* harmony import */ var _location_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_location_scss__WEBPACK_IMPORTED_MODULE_8__);

var _jsxFileName = "C:\\blueprvt\\desktop\\pgconference.github.io\\src\\pages\\location.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;








var PlaceMap = Object(react_google_maps__WEBPACK_IMPORTED_MODULE_3__["withScriptjs"])(Object(react_google_maps__WEBPACK_IMPORTED_MODULE_3__["withGoogleMap"])(function () {
  return __jsx(react_google_maps__WEBPACK_IMPORTED_MODULE_3__["GoogleMap"], {
    defaultZoom: 8,
    defaultCenter: {
      lat: -34.397,
      lng: 150.644
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx(react_google_maps__WEBPACK_IMPORTED_MODULE_3__["Marker"], {
    position: {
      lat: -34.397,
      lng: 150.644
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }));
}));
PlaceMap.defaultProps = {
  googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyAoG06rKP4D5jeuQC50WM3VaSGi8YLx9fE&callback=initMap",
  loadingElement: __jsx("div", {
    style: {
      height: "100%"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }),
  containerElement: __jsx("div", {
    className: _location_scss__WEBPACK_IMPORTED_MODULE_8___default.a.placeMapContainer,
    style: {
      height: "400px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }),
  mapElement: __jsx("div", {
    style: {
      height: "100%"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  })
};
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_molecules_jumbotron__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: "\uC624\uC2DC\uB294 \uAE38",
    subTitle: "LOCATION",
    bgClassName: _location_scss__WEBPACK_IMPORTED_MODULE_8___default.a.jumbotronBg,
    description: __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, "\uD589\uC0AC\uC5D0 \uC9C0\uC6D0\uD55C \uCC38\uC5EC\uC790\uB77C\uBA74 ", __jsx("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }), "\uB204\uAD6C\uB4E0 \uC790\uC720\uB85C\uC774 \uD589\uC0AC\uC7A5\uC744 \uBC29\uBB38\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }), __jsx(_molecules_centered_mouse__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }), __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_styles_common_scss__WEBPACK_IMPORTED_MODULE_4___default.a.section),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, __jsx(_atoms_Diagonal__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: _location_scss__WEBPACK_IMPORTED_MODULE_8___default.a.mainDiagonal,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, __jsx("div", {
    className: _location_scss__WEBPACK_IMPORTED_MODULE_8___default.a.mainBg,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  })), __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_styles_common_scss__WEBPACK_IMPORTED_MODULE_4___default.a.sectionBox),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, __jsx("table", {
    className: _styles_common_scss__WEBPACK_IMPORTED_MODULE_4___default.a.table,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, __jsx("tbody", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, __jsx("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, __jsx("th", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, "\uC77C\uC2DC"), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, "2019-02-15 \uC624\uD6C4 2:30")), __jsx("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, __jsx("th", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, "\uC7A5\uC18C"), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, "\uC11C\uC6B8\uD2B9\uBCC4\uC2DC \uAC15\uB0A8\uAD6C \uC5ED\uC0BC\uB3D9 662-14 \uC5D0\uC774\uBE44\uD2F0\uD0C0\uC6CC 2F", " ", __jsx("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, "\uCF54\uC2A4\uD1A0\uB9AC \uC2A4\uD398\uC774\uC2A4 \uC138\uBBF8\uB098\uC2E4"))), __jsx("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, __jsx("th", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, "\uBB38\uC758"), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, "pgconferencereserve@gmail.com")))), __jsx("div", {
    className: _location_scss__WEBPACK_IMPORTED_MODULE_8___default.a.map,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, __jsx(PlaceMap, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  })))));
});

/***/ })

})
//# sourceMappingURL=location.js.f506aa172e0a428fc435.hot-update.js.map