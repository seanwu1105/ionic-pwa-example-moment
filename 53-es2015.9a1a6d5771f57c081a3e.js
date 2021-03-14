(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[53],{

/***/ "oD4e":
/*!******************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/status-tap-dc6b4b49.js ***!
  \******************************************************************/
/*! exports provided: startStatusTap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startStatusTap", function() { return startStatusTap; });
/* harmony import */ var _index_3ccd7557_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-3ccd7557.js */ "2atR");
/* harmony import */ var _helpers_cf6e85ee_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers-cf6e85ee.js */ "Ke8Y");



const startStatusTap = () => {
  const win = window;
  win.addEventListener('statusTap', () => {
    Object(_index_3ccd7557_js__WEBPACK_IMPORTED_MODULE_0__["f"])(() => {
      const width = win.innerWidth;
      const height = win.innerHeight;
      const el = document.elementFromPoint(width / 2, height / 2);
      if (!el) {
        return;
      }
      const contentEl = el.closest('ion-content');
      if (contentEl) {
        new Promise(resolve => Object(_helpers_cf6e85ee_js__WEBPACK_IMPORTED_MODULE_1__["c"])(contentEl, resolve)).then(() => {
          Object(_index_3ccd7557_js__WEBPACK_IMPORTED_MODULE_0__["c"])(() => contentEl.scrollToTop(300));
        });
      }
    });
  });
};




/***/ })

}]);
//# sourceMappingURL=53-es2015.9a1a6d5771f57c081a3e.js.map