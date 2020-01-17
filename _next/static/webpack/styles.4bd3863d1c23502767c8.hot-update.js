webpackHotUpdate("styles",{

/***/ "./pages/index.scss":
/*!**************************!*\
  !*** ./pages/index.scss ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"heroClipper":"_35mVLhgBdKtnqaGSHCpBGs","hero":"_291OVuwV5zssRXIeeZHTRJ","heroDiagonal":"_2E_h_mNtp_32eOoEdiuKDv","heroBox":"_1-I43W6gZmeCFb5vziwQfu","introduce":"mgNJ35SZQRKkt6-aGHSb_","introduceDiagonal":"_3C9fO8cFVIlh9I8WCdYqZX","introduceBox":"_1VI9wyRdGYGfxp-SctKUPX"};;
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
            injectCss(link, link.href.split("?")[0] + "?unix=1579252458936");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.4bd3863d1c23502767c8.hot-update.js.map