webpackHotUpdate("styles",{

/***/ "./pages/index.scss":
/*!**************************!*\
  !*** ./pages/index.scss ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"hero":"_291OVuwV5zssRXIeeZHTRJ","heroDiagonal":"_2E_h_mNtp_32eOoEdiuKDv","heroBox":"_1-I43W6gZmeCFb5vziwQfu","heroBg":"_3PciXOHEhjTxdTQIE9ujI","introduce":"mgNJ35SZQRKkt6-aGHSb_","introduceDiagonal":"_3C9fO8cFVIlh9I8WCdYqZX","introduceSponsorTitle":"OtJaJlz4O_DF0ImvZ04rV","goals":"_3fQJCGDT7RU7Bw-x_qVhaM","goalsDiagonal":"_2zulf3JPUjXF59CGps7GSs","about":"_2IxCGHAbV0tAHsFRmUjkQ3","aboutDiagonal":"_1RRUBgzuOKCY9-b6tMbEuS","registerButton":"_3M7EDX8uwJKoQBSyAtp2vG"};;
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
            injectCss(link, link.href.split("?")[0] + "?unix=1579617701708");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.2d74b62fd25cadcd5e61.hot-update.js.map