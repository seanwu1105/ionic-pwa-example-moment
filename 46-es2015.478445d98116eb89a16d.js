(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[46],{

/***/ "ISmu":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ion-text.entry.js ***!
  \*************************************************************/
/*! exports provided: ion_text */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_text", function() { return Text; });
/* harmony import */ var _index_3ccd7557_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-3ccd7557.js */ "2atR");
/* harmony import */ var _ionic_global_ddef3a45_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ionic-global-ddef3a45.js */ "GTku");
/* harmony import */ var _theme_ff3fc52f_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./theme-ff3fc52f.js */ "74mu");




const textCss = ":host(.ion-color){color:var(--ion-color-base)}";

const Text = class {
  constructor(hostRef) {
    Object(_index_3ccd7557_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
  }
  render() {
    const mode = Object(_ionic_global_ddef3a45_js__WEBPACK_IMPORTED_MODULE_1__["b"])(this);
    return (Object(_index_3ccd7557_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_3ccd7557_js__WEBPACK_IMPORTED_MODULE_0__["H"], { class: Object(_theme_ff3fc52f_js__WEBPACK_IMPORTED_MODULE_2__["c"])(this.color, {
        [mode]: true,
      }) }, Object(_index_3ccd7557_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null)));
  }
};
Text.style = textCss;




/***/ })

}]);
//# sourceMappingURL=46-es2015.478445d98116eb89a16d.js.map