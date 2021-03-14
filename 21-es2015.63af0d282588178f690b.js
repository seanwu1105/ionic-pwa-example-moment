(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[21],{

/***/ "wHD8":
/*!************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ion-img.entry.js ***!
  \************************************************************/
/*! exports provided: ion_img */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_img", function() { return Img; });
/* harmony import */ var _index_3ccd7557_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-3ccd7557.js */ "2atR");
/* harmony import */ var _ionic_global_ddef3a45_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ionic-global-ddef3a45.js */ "GTku");



const imgCss = ":host{display:block;-o-object-fit:contain;object-fit:contain}img{display:block;width:100%;height:100%;-o-object-fit:inherit;object-fit:inherit;-o-object-position:inherit;object-position:inherit}";

const Img = class {
  constructor(hostRef) {
    Object(_index_3ccd7557_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    this.ionImgWillLoad = Object(_index_3ccd7557_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this, "ionImgWillLoad", 7);
    this.ionImgDidLoad = Object(_index_3ccd7557_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this, "ionImgDidLoad", 7);
    this.ionError = Object(_index_3ccd7557_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this, "ionError", 7);
    this.onLoad = () => {
      this.ionImgDidLoad.emit();
    };
    this.onError = () => {
      this.ionError.emit();
    };
  }
  srcChanged() {
    this.addIO();
  }
  componentDidLoad() {
    this.addIO();
  }
  addIO() {
    if (this.src === undefined) {
      return;
    }
    if (typeof window !== 'undefined' &&
      'IntersectionObserver' in window &&
      'IntersectionObserverEntry' in window &&
      'isIntersecting' in window.IntersectionObserverEntry.prototype) {
      this.removeIO();
      this.io = new IntersectionObserver(data => {
        // because there will only ever be one instance
        // of the element we are observing
        // we can just use data[0]
        if (data[0].isIntersecting) {
          this.load();
          this.removeIO();
        }
      });
      this.io.observe(this.el);
    }
    else {
      // fall back to setTimeout for Safari and IE
      setTimeout(() => this.load(), 200);
    }
  }
  load() {
    this.loadError = this.onError;
    this.loadSrc = this.src;
    this.ionImgWillLoad.emit();
  }
  removeIO() {
    if (this.io) {
      this.io.disconnect();
      this.io = undefined;
    }
  }
  render() {
    return (Object(_index_3ccd7557_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_3ccd7557_js__WEBPACK_IMPORTED_MODULE_0__["H"], { class: Object(_ionic_global_ddef3a45_js__WEBPACK_IMPORTED_MODULE_1__["b"])(this) }, Object(_index_3ccd7557_js__WEBPACK_IMPORTED_MODULE_0__["h"])("img", { decoding: "async", src: this.loadSrc, alt: this.alt, onLoad: this.onLoad, onError: this.loadError, part: "image" })));
  }
  get el() { return Object(_index_3ccd7557_js__WEBPACK_IMPORTED_MODULE_0__["i"])(this); }
  static get watchers() { return {
    "src": ["srcChanged"]
  }; }
};
Img.style = imgCss;




/***/ })

}]);
//# sourceMappingURL=21-es2015.63af0d282588178f690b.js.map