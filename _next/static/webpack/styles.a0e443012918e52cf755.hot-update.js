webpackHotUpdate("styles",{

/***/ "./pages/_app.scss":
/*!*************************!*\
  !*** ./pages/_app.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"header":"_1xZRNrufiDqQ39mYl0ugmp","headerDiagonal":"_3S7qJk9d5ymzXFIib8rLfs","headerLeft":"GjkVm7QfwJ-lqWPEexI7S","headerRight":"_19cdPtByd_7mz0ILlSBZIU","headerLogo":"_2BTce7FSLxzZqXnF1QRXwa","headerLink":"kprPp1KAaWM0VIot5bucz","active":"_2PQI5-gaVGyrUK74kI4V5g","main":"_32RgNoV5e9gdnW-BFhY-4Z","footer":"_2zQxwy_Snpfw3Qz_XqAwwP","footerDiagonal":"_1vZzda0gnGRoICZeVoYqaF","footerBox":"_2EOoYGQi0z2jpmd9vLfC_k","footerLeft":"_36q_L3036xtMm-TvX2xzgl","footerRight":"_3JyAqldF2Wr6F7F6cw-OlF"};;
    if (true) {
      var injectCss = function injectCss(prev, href) {
        var link = prev.cloneNode();
        link.href = href;
        link.onload = function() {
          prev.parentNode.removeChild(prev);
        };
        prev.stale = true;
        prev.parentNode.insertBefore(link, prev);
      };
      module.hot.dispose(function() {
        window.__webpack_reload_css__ = true;
      });
      if (window.__webpack_reload_css__) {
        module.hot.__webpack_reload_css__ = false;
        console.log("[HMR] Reloading stylesheets...");
        var prefix = document.location.protocol + '//' + document.location.host;
        document
          .querySelectorAll("link[href][rel=stylesheet]")
          .forEach(function(link) {
            if (!link.href.match(prefix) || link.stale) return;
            injectCss(link, link.href.split("?")[0] + "?unix=1579246631574");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.a0e443012918e52cf755.hot-update.js.map