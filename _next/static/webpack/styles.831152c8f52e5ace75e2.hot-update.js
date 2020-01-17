webpackHotUpdate("styles",{

/***/ "./molecules/jumbotron.scss":
/*!**********************************!*\
  !*** ./molecules/jumbotron.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"wrap":"_1HEsx07gxjP_9hwX20ybHC","box":"_2PplfHnfbD3SC21_iOfHnI","diagonal":"_1jgAZx_EFEPyzvbVgTIaqi"};;
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
            injectCss(link, link.href.split("?")[0] + "?unix=1579252854643");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.831152c8f52e5ace75e2.hot-update.js.map