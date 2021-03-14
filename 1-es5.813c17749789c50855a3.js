(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1], {
    /***/
    "6g0+":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/ngx-ionic-image-viewer/__ivy_ngcc__/fesm2015/ngx-ionic-image-viewer.js ***!
      \*********************************************************************************************/

    /*! exports provided: NgxIonicImageViewerComponent, NgxIonicImageViewerDirective, NgxIonicImageViewerModule, NgxIonicImageViewerService, ViewerModalComponent */

    /***/
    function g0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgxIonicImageViewerComponent", function () {
        return NgxIonicImageViewerComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgxIonicImageViewerDirective", function () {
        return NgxIonicImageViewerDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgxIonicImageViewerModule", function () {
        return NgxIonicImageViewerModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgxIonicImageViewerService", function () {
        return NgxIonicImageViewerService;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ViewerModalComponent", function () {
        return ViewerModalComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      "O1h7");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /**
       * @fileoverview added by tsickle
       * Generated from: lib/ngx-ionic-image-viewer.service.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var _c0 = ["sliderRef"];

      var _c1 = function _c1(a0) {
        return {
          "no-title": a0
        };
      };

      var _c2 = function _c2(a0) {
        return {
          "no-text": a0
        };
      };

      var NgxIonicImageViewerService = /*@__PURE__*/function () {
        var NgxIonicImageViewerService = function NgxIonicImageViewerService() {
          _classCallCheck(this, NgxIonicImageViewerService);
        };

        NgxIonicImageViewerService.ɵfac = function NgxIonicImageViewerService_Factory(t) {
          return new (t || NgxIonicImageViewerService)();
        };

        NgxIonicImageViewerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
          token: NgxIonicImageViewerService,
          factory: NgxIonicImageViewerService.ɵfac,
          providedIn: 'root'
        });
        /** @nocollapse */

        NgxIonicImageViewerService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
          factory: function NgxIonicImageViewerService_Factory() {
            return new NgxIonicImageViewerService();
          },
          token: NgxIonicImageViewerService,
          providedIn: "root"
        });
        return NgxIonicImageViewerService;
      }();

      var ViewerModalComponent = /*@__PURE__*/function () {
        var ViewerModalComponent = /*#__PURE__*/function () {
          /**
           * @param {?} modalController
           */
          function ViewerModalComponent(modalController) {
            _classCallCheck(this, ViewerModalComponent);

            this.modalController = modalController; // tslint:disable: no-inferrable-types

            this.alt = '';
            this.scheme = 'auto';
            this.slideOptions = {};
            this.srcFallback = '';
            this.srcHighRes = '';
            this.swipeToClose = true;
            this.text = '';
            this.title = '';
            this.titleSize = ''; // tslint:enable: no-inferrable-types

            this.defaultSlideOptions = {
              centeredSlides: true,
              passiveListeners: false,
              zoom: {
                enabled: true
              }
            };
            this.options = {};
            this.swipeState = {
              phase: 'init',
              direction: 'none',
              swipeType: 'none',
              startX: 0,
              startY: 0,
              distance: 0,
              distanceX: 0,
              distanceY: 0,
              threshold: 150,
              // required min distance traveled to be considered swipe
              restraint: 100,
              // maximum distance allowed at the same time in perpendicular direction
              allowedTime: 500,
              // maximum time allowed to travel that distance
              elapsedTime: 0,
              startTime: 0
            };
          }
          /**
           * @return {?}
           */


          _createClass(ViewerModalComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var swiper;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        this.options = Object.assign({}, this.defaultSlideOptions, this.slideOptions);
                        this.src = this.srcHighRes || this.src;
                        this.setStyle();
                        this.setScheme(this.scheme);
                        this.initSwipeToClose(this.swipeToClose);
                        /**
                         * Current Workaround
                         * See reported bug: https://github.com/ionic-team/ionic/issues/19638#issuecomment-584828315
                         * Hint: Comment in '<ion-slide>' in component
                         * @type {?}
                         */

                        _context.next = 7;
                        return this.slides.getSwiper();

                      case 7:
                        swiper = _context.sent;
                        swiper.appendSlide("<ion-slide><img alt=\"".concat(this.alt, "\" src=\"").concat(this.src, "\" onerror=\"this.src='").concat(this.srcFallback, "'\"/></ion-slide>"));

                      case 9:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee, this);
              }));
            }
            /**
             * @return {?}
             */

          }, {
            key: "setStyle",
            value: function setStyle() {
              /** @type {?} */
              var el = document.querySelector('.ion-img-viewer');
              el.style.setProperty('--height', '100%');
              el.style.setProperty('--width', '100%');
              el.style.setProperty('--border-radius', '0');
            }
            /**
             * @param {?} scheme
             * @return {?}
             */

          }, {
            key: "setScheme",
            value: function setScheme(scheme) {
              if (scheme === 'auto') {
                return;
              }
              /** @type {?} */


              var el = document.querySelector('.ion-img-viewer');

              if (this.scheme === 'light') {
                el.style.setProperty('--ion-background-color', '#ffffff');
                el.style.setProperty('--ion-background-color-rgb', '255, 255, 255');
                el.style.setProperty('--ion-text-color', '#000');
                el.style.setProperty('--ion-text-color-rgb', '0,0,0');
              }

              if (this.scheme === 'dark') {
                if (el.classList.contains('ios')) {
                  el.style.setProperty('--ion-background-color', '#000000');
                  el.style.setProperty('--ion-background-color-rgb', '0, 0, 0');
                } else {
                  el.style.setProperty('--ion-background-color', '#121212');
                  el.style.setProperty('--ion-background-color-rgb', '18,18,18');
                }

                el.style.setProperty('--ion-text-color', '#ffffff');
                el.style.setProperty('--ion-text-color-rgb', '255,255,255');
              }
            }
            /**
             * @see http://www.javascriptkit.com/javatutors/touchevents3.shtml
             * @param {?=} isActive
             * @return {?}
             */

          }, {
            key: "initSwipeToClose",
            value: function initSwipeToClose() {
              var _this = this;

              var isActive = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

              if (!isActive) {
                return;
              }
              /** @type {?} */


              var el = document.querySelector('ion-modal');
              el.addEventListener('mousedown',
              /**
              * @param {?} event
              * @return {?}
              */
              function (event) {
                return _this.swipeStart(event);
              }, true);
              el.addEventListener('mousemove',
              /**
              * @param {?} event
              * @return {?}
              */
              function (event) {
                return _this.swipeMove(event);
              }, true);
              el.addEventListener('mouseup',
              /**
              * @param {?} event
              * @return {?}
              */
              function (event) {
                return _this.swipeEnd(event);
              }, true);
              el.addEventListener('touchstart',
              /**
              * @param {?} event
              * @return {?}
              */
              function (event) {
                return _this.swipeStart(event);
              }, true);
              el.addEventListener('touchmove',
              /**
              * @param {?} event
              * @return {?}
              */
              function (event) {
                return _this.swipeMove(event);
              }, true);
              el.addEventListener('touchend',
              /**
              * @param {?} event
              * @return {?}
              */
              function (event) {
                return _this.swipeEnd(event);
              }, true);
              this.modalController.getTop().then(
              /**
              * @param {?} modal
              * @return {?}
              */
              function (modal) {
                modal.onWillDismiss().then(
                /**
                * @return {?}
                */
                function () {
                  document.removeEventListener('mousedown', _this.swipeStart, true);
                  document.removeEventListener('mousemove', _this.swipeMove, true);
                  document.removeEventListener('mouseup', _this.swipeMove, true);
                  document.removeEventListener('touchstart', _this.swipeStart, true);
                  document.removeEventListener('touchmove', _this.swipeMove, true);
                  document.removeEventListener('touchend', _this.swipeMove, true);
                });
              });
            }
            /**
             * @param {?} event
             * @return {?}
             */

          }, {
            key: "swipeStart",
            value: function swipeStart(event) {
              var _ref = event.type === 'touchstart' ? event.changedTouches[0] : event,
                  pageX = _ref.pageX,
                  pageY = _ref.pageY;

              this.swipeState = Object.assign({}, this.swipeState, {
                phase: 'start',
                direction: 'none',
                distance: 0,
                startX: pageX,
                startY: pageY,
                startTime: new Date().getTime()
              });
            }
            /**
             * @param {?} event
             * @return {?}
             */

          }, {
            key: "swipeMove",
            value: function swipeMove(event) {
              if (this.swipeState.phase === 'none') {
                return;
              }

              var _ref2 = event.type === 'touchmove' ? event.changedTouches[0] : event,
                  pageX = _ref2.pageX,
                  pageY = _ref2.pageY; // get horizontal dist traveled by finger while in contact with surface

              /** @type {?} */


              var distanceX = pageX - this.swipeState.startX; // get vertical dist traveled by finger while in contact with surface

              /** @type {?} */

              var distanceY = pageY - this.swipeState.startY;
              /** @type {?} */

              var direction;
              /** @type {?} */

              var distance;

              if (Math.abs(distanceX) > Math.abs(distanceY)) {
                // if distance traveled horizontally is greater than vertically, consider this a horizontal swipe
                direction = distanceX < 0 ? 'left' : 'right';
                distance = distanceX;
              } else {
                // else consider this a vertical swipe
                direction = distanceY < 0 ? 'up' : 'down';
                distance = distanceY;
              }

              this.swipeState = Object.assign({}, this.swipeState, {
                phase: 'move',
                direction: direction,
                distance: distance,
                distanceX: distanceX,
                distanceY: distanceY
              });
              event.preventDefault();
            }
            /**
             * @param {?} event
             * @return {?}
             */

          }, {
            key: "swipeEnd",
            value: function swipeEnd(event) {
              if (this.swipeState.phase === 'none') {
                return;
              }

              var _this$swipeState = this.swipeState,
                  allowedTime = _this$swipeState.allowedTime,
                  direction = _this$swipeState.direction,
                  restraint = _this$swipeState.restraint,
                  startTime = _this$swipeState.startTime,
                  threshold = _this$swipeState.threshold,
                  distanceX = _this$swipeState.distanceX,
                  distanceY = _this$swipeState.distanceY;
              /** @type {?} */

              var swipeType;
              /** @type {?} */

              var elapsedTime = new Date().getTime() - startTime;

              if (elapsedTime <= allowedTime) {
                // first condition for a swipe met
                if (Math.abs(distanceX) >= threshold && Math.abs(distanceY) <= restraint) {
                  // 2nd condition for horizontal swipe met
                  swipeType = direction; // set swipeType to either "left" or "right"
                } else if (Math.abs(distanceY) >= threshold && Math.abs(distanceX) <= restraint) {
                  // 2nd condition for vertical swipe met
                  swipeType = direction; // set swipeType to either "top" or "down"
                }
              }

              this.swipeState = Object.assign({}, this.swipeState, {
                phase: 'end',
                swipeType: swipeType
              });

              if (swipeType === 'down') {
                return this.closeModal();
              }
            }
            /**
             * @return {?}
             */

          }, {
            key: "closeModal",
            value: function closeModal() {
              this.modalController.dismiss();
            }
          }]);

          return ViewerModalComponent;
        }();

        ViewerModalComponent.ɵfac = function ViewerModalComponent_Factory(t) {
          return new (t || ViewerModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]));
        };

        ViewerModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: ViewerModalComponent,
          selectors: [["ion-viewer-modal"]],
          viewQuery: function ViewerModalComponent_Query(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 3);
            }

            if (rf & 2) {
              var _t;

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.slides = _t.first);
            }
          },
          inputs: {
            alt: "alt",
            scheme: "scheme",
            slideOptions: "slideOptions",
            srcFallback: "srcFallback",
            srcHighRes: "srcHighRes",
            swipeToClose: "swipeToClose",
            text: "text",
            title: "title",
            titleSize: "titleSize",
            src: "src"
          },
          decls: 14,
          vars: 11,
          consts: [[3, "ngClass"], ["slot", "primary"], [3, "click"], ["slot", "icon-only", "name", "close"], [3, "size"], [3, "forceOverscroll"], [3, "options"], ["sliderRef", ""], [1, "ion-text-center"]],
          template: function ViewerModalComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-header", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-toolbar");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-buttons", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ion-button", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewerModalComponent_Template_ion_button_click_3_listener() {
                return ctx.closeModal();
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "ion-icon", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ion-title", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ion-content", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "ion-slides", 6, 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ion-footer", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ion-toolbar", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ion-text");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c1, ctx.title.length <= 0));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("size", ctx.titleSize);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("forceOverscroll", false);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.options);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c2, ctx.text.length <= 0));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.text);
            }
          },
          directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonHeader"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonFooter"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonText"]],
          styles: ["ion-slides[_ngcontent-%COMP%]{--height:100%;height:100%}ion-toolbar[_ngcontent-%COMP%]{--border-style:none;--background:rgba(var(--ion-background-color-rgb, (255, 255, 255)), 0.6);background:rgba(var(--ion-background-color-rgb,255,255,255),.6)}ion-header[_ngcontent-%COMP%]{opacity:1;position:absolute}ion-header.no-title[_ngcontent-%COMP%]:after{content:none}ion-header.no-title[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]{--background:rgba(0, 0, 0, 0);background:rgba(0,0,0,0)}ion-footer[_ngcontent-%COMP%]{position:absolute;bottom:0}ion-footer.no-text[_ngcontent-%COMP%]:before{content:none}ion-footer.no-text[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]{--background:rgba(0, 0, 0, 0);background:rgba(0,0,0,0)}"]
        });
        return ViewerModalComponent;
      }();

      if (false) {}

      var NgxIonicImageViewerComponent = /*@__PURE__*/function () {
        var NgxIonicImageViewerComponent = /*#__PURE__*/function () {
          /**
           * @param {?} modalController
           */
          function NgxIonicImageViewerComponent(modalController) {
            _classCallCheck(this, NgxIonicImageViewerComponent);

            this.modalController = modalController;
          }
          /**
           * @param {?} src
           * @param {?=} srcFallback
           * @param {?=} srcHighRes
           * @param {?=} title
           * @param {?=} titleSize
           * @param {?=} text
           * @param {?=} scheme
           * @param {?=} slideOptions
           * @param {?=} swipeToClose
           * @return {?}
           */


          _createClass(NgxIonicImageViewerComponent, [{
            key: "viewImage",
            value: function viewImage(src) {
              var srcFallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
              var srcHighRes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
              var title = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
              var titleSize = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '';
              var text = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : '';
              var scheme = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 'auto';
              var slideOptions = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : {};
              var swipeToClose = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : true;
              return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                var modal;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        _context2.next = 2;
                        return this.modalController.create({
                          component: ViewerModalComponent,
                          componentProps: {
                            src: src,
                            srcFallback: srcFallback,
                            srcHighRes: srcHighRes,
                            title: title,
                            titleSize: titleSize,
                            text: text,
                            scheme: scheme,
                            slideOptions: slideOptions,
                            swipeToClose: swipeToClose
                          },
                          cssClass: this.cssClass instanceof Array ? ['ion-img-viewer'].concat(_toConsumableArray(this.cssClass)) : ['ion-img-viewer', this.cssClass],
                          keyboardClose: true,
                          showBackdrop: true
                        });

                      case 2:
                        modal = _context2.sent;
                        _context2.next = 5;
                        return modal.present();

                      case 5:
                        return _context2.abrupt("return", _context2.sent);

                      case 6:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2, this);
              }));
            }
            /**
             * @return {?}
             */

          }, {
            key: "ngOnInit",
            value: function ngOnInit() {}
          }]);

          return NgxIonicImageViewerComponent;
        }();

        NgxIonicImageViewerComponent.ɵfac = function NgxIonicImageViewerComponent_Factory(t) {
          return new (t || NgxIonicImageViewerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]));
        };

        NgxIonicImageViewerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: NgxIonicImageViewerComponent,
          selectors: [["ion-img-viewer"]],
          inputs: {
            alt: "alt",
            cssClass: "cssClass",
            scheme: "scheme",
            slideOptions: "slideOptions",
            src: "src",
            srcFallback: "srcFallback",
            srcHighRes: "srcHighRes",
            swipeToClose: "swipeToClose",
            text: "text",
            title: "title",
            titleSize: "titleSize"
          },
          decls: 1,
          vars: 2,
          consts: [[3, "alt", "src", "click", "error"]],
          template: function NgxIonicImageViewerComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgxIonicImageViewerComponent_Template_img_click_0_listener() {
                return ctx.viewImage(ctx.src, ctx.srcFallback, ctx.srcHighRes, ctx.title, ctx.titleSize, ctx.text, ctx.scheme, ctx.slideOptions, ctx.swipeToClose);
              })("error", function NgxIonicImageViewerComponent_Template_img_error_0_listener() {
                return ctx.src = ctx.srcFallback;
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("alt", ctx.alt)("src", ctx.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
            }
          },
          styles: ["[_nghost-%COMP%] {\n        display: block;\n      }"]
        });
        return NgxIonicImageViewerComponent;
      }();

      if (false) {}

      var NgxIonicImageViewerDirective = /*@__PURE__*/function () {
        var NgxIonicImageViewerDirective = /*#__PURE__*/function () {
          /**
           * @param {?} el
           * @param {?} renderer
           * @param {?} modalController
           */
          function NgxIonicImageViewerDirective(el, renderer, modalController) {
            _classCallCheck(this, NgxIonicImageViewerDirective);

            this.el = el;
            this.renderer = renderer;
            this.modalController = modalController;
          }
          /**
           * @return {?}
           */


          _createClass(NgxIonicImageViewerDirective, [{
            key: "onClick",
            value: function onClick() {
              this.viewImage(this.src, this.srcFallback, this.srcHighRes, this.title, this.titleSize, this.text, this.scheme, this.slideOptions, this.swipeToClose);
            }
            /**
             * @param {?} error
             * @return {?}
             */

          }, {
            key: "onError",
            value: function onError(error) {
              if (this.src !== this.el.nativeElement.src) {
                this.src = this.el.nativeElement.src;
              }

              if (this.srcFallback) {
                this.renderer.setAttribute(this.el.nativeElement, 'src', this.srcFallback);
              }
            }
            /**
             * @return {?}
             */

          }, {
            key: "ngOnInit",
            value: function ngOnInit() {
              if (!this.el.nativeElement.hasAttribute('src')) {
                this.renderer.setAttribute(this.el.nativeElement, 'src', this.src);
              }
            }
            /**
             * @param {?} src
             * @param {?=} srcFallback
             * @param {?=} srcHighRes
             * @param {?=} title
             * @param {?=} titleSize
             * @param {?=} text
             * @param {?=} scheme
             * @param {?=} slideOptions
             * @param {?=} swipeToClose
             * @return {?}
             */

          }, {
            key: "viewImage",
            value: function viewImage(src) {
              var srcFallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
              var srcHighRes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
              var title = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
              var titleSize = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '';
              var text = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : '';
              var scheme = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 'auto';
              var slideOptions = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : {};
              var swipeToClose = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : true;
              return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                var modal;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        _context3.next = 2;
                        return this.modalController.create({
                          component: ViewerModalComponent,
                          componentProps: {
                            src: src,
                            srcFallback: srcFallback,
                            srcHighRes: srcHighRes,
                            title: title,
                            titleSize: titleSize,
                            text: text,
                            scheme: scheme,
                            slideOptions: slideOptions,
                            swipeToClose: swipeToClose
                          },
                          cssClass: this.cssClass instanceof Array ? ['ion-img-viewer'].concat(_toConsumableArray(this.cssClass)) : ['ion-img-viewer', this.cssClass],
                          keyboardClose: true,
                          showBackdrop: true
                        });

                      case 2:
                        modal = _context3.sent;
                        _context3.next = 5;
                        return modal.present();

                      case 5:
                        return _context3.abrupt("return", _context3.sent);

                      case 6:
                      case "end":
                        return _context3.stop();
                    }
                  }
                }, _callee3, this);
              }));
            }
          }]);

          return NgxIonicImageViewerDirective;
        }();

        NgxIonicImageViewerDirective.ɵfac = function NgxIonicImageViewerDirective_Factory(t) {
          return new (t || NgxIonicImageViewerDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]));
        };

        NgxIonicImageViewerDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
          type: NgxIonicImageViewerDirective,
          selectors: [["", "ionImgViewer", ""]],
          hostBindings: function NgxIonicImageViewerDirective_HostBindings(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgxIonicImageViewerDirective_click_HostBindingHandler() {
                return ctx.onClick();
              })("error", function NgxIonicImageViewerDirective_error_HostBindingHandler($event) {
                return ctx.onError($event);
              });
            }
          },
          inputs: {
            src: "src",
            cssClass: "cssClass",
            scheme: "scheme",
            slideOptions: "slideOptions",
            srcFallback: "srcFallback",
            srcHighRes: "srcHighRes",
            swipeToClose: "swipeToClose",
            text: "text",
            title: "title",
            titleSize: "titleSize"
          }
        });
        return NgxIonicImageViewerDirective;
      }();

      if (false) {}

      var NgxIonicImageViewerModule = /*@__PURE__*/function () {
        var NgxIonicImageViewerModule = function NgxIonicImageViewerModule() {
          _classCallCheck(this, NgxIonicImageViewerModule);
        };

        NgxIonicImageViewerModule.ɵfac = function NgxIonicImageViewerModule_Factory(t) {
          return new (t || NgxIonicImageViewerModule)();
        };

        NgxIonicImageViewerModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
          type: NgxIonicImageViewerModule
        });
        NgxIonicImageViewerModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
          imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"]]]
        });
        return NgxIonicImageViewerModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NgxIonicImageViewerModule, {
          declarations: function declarations() {
            return [NgxIonicImageViewerComponent, NgxIonicImageViewerDirective, ViewerModalComponent];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"]];
          },
          exports: function exports() {
            return [NgxIonicImageViewerComponent, NgxIonicImageViewerDirective, ViewerModalComponent];
          }
        });
      })();
      /**
       * @fileoverview added by tsickle
       * Generated from: public-api.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @fileoverview added by tsickle
       * Generated from: ngx-ionic-image-viewer.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /***/

    }
  }]);
})();
//# sourceMappingURL=1-es5.813c17749789c50855a3.js.map