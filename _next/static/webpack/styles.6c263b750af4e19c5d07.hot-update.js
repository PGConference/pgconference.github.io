webpackHotUpdate("styles",{

/***/ "./pages/program.scss":
/*!****************************!*\
  !*** ./pages/program.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"jumbotronBg":"_1MoenZXAZxFJoHKhxsSAyB","itemsBox":"_33S9xjyUY8pPTFnNEAfRpd","itemNumber":"_344IfUwB6rW4xEE9JB5Pz9","item":"fwuiHXtoRR7rZq-ylb9Tf","itemDiagonal":"st0nLwIaVJ79BR57VeKP6","itemContent":"_2Xt3pIV_dRFiVt4u0bzAeb","linkButton":"_1uIKfrVbD73QCOXklbBBct","githubButton":"_1e_ZZHpcfKMVgzly_2EAc","homeButton":"xp8zozraG4UdeFkENc2Wa"};;
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
            injectCss(link, link.href.split("?")[0] + "?unix=1579617197887");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.6c263b750af4e19c5d07.hot-update.js.map