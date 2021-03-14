(function () {
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4], {
    /***/
    "/rh9":
    /*!*****************************************************!*\
      !*** ./src/app/features/home/camera/camera.page.ts ***!
      \*****************************************************/

    /*! exports provided: CameraPage */

    /***/
    function rh9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CameraPage", function () {
        return CameraPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ngneat/until-destroy */
      "VfN6");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _utils_rx_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../utils/rx-operators */
      "KJy6");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _shared_moment_moment_repository_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../shared/moment/moment-repository.service */
      "BJdS");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ngrx_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ngrx/component */
      "9A8T");
      /* harmony import */


      var _shared_image_image_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../../shared/image/image.component */
      "/T4s");
      /* harmony import */


      var ngx_ionic_image_viewer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ngx-ionic-image-viewer */
      "6g0+");

      var _c0 = ["video"];

      function CameraPage_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "app-image", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var capturedImageUrl_r2 = ctx.ngrxLet;

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", capturedImageUrl_r2);
        }
      }

      var CameraPage = /*@__PURE__*/function () {
        var CameraPage = /*#__PURE__*/function () {
          function CameraPage(alertController, momentRepository) {
            var _this = this;

            _classCallCheck(this, CameraPage);

            this.alertController = alertController;
            this.momentRepository = momentRepository;
            this._videoElement$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](undefined);
            this.videoElement$ = this._videoElement$.pipe(Object(_utils_rx_operators__WEBPACK_IMPORTED_MODULE_4__["isNonNullable"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])());
            this.mediaStream$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["defer"])(function () {
              return navigator.mediaDevices.getUserMedia({
                video: {
                  facingMode: 'environment'
                }
              });
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _context.next = 2;
                        return this.presentErrorDialog(err);

                      case 2:
                        return _context.abrupt("return", undefined);

                      case 3:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee, this);
              }));
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["shareReplay"])({
              bufferSize: 1,
              refCount: true
            }));
            this.imageCapture$ = this.mediaStream$.pipe(Object(_utils_rx_operators__WEBPACK_IMPORTED_MODULE_4__["isNonNullable"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (mediaStream) {
              return mediaStream.getVideoTracks()[0];
            }), Object(_utils_rx_operators__WEBPACK_IMPORTED_MODULE_4__["isNonNullable"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (track) {
              return new ImageCapture(track);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["shareReplay"])({
              bufferSize: 1,
              refCount: true
            }));
            this._capturedImageUrl$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](undefined);
            this.revokePreviousImageUrl$ = this._capturedImageUrl$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["pairwise"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_ref) {
              var _ref2 = _slicedToArray(_ref, 1),
                  previous = _ref2[0];

              if (previous) URL.revokeObjectURL(previous);
            }));
            this.capturedImageUrl$ = this._capturedImageUrl$.pipe(Object(_utils_rx_operators__WEBPACK_IMPORTED_MODULE_4__["isNonNullable"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])());
            this.cameraPreview$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])([this.videoElement$, this.mediaStream$.pipe(Object(_utils_rx_operators__WEBPACK_IMPORTED_MODULE_4__["isNonNullable"])())]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_ref3) {
              var _ref4 = _slicedToArray(_ref3, 2),
                  videoElement = _ref4[0],
                  mediaStream = _ref4[1];

              videoElement.srcObject = mediaStream;
            }));
            this.revokePreviousImageUrl$.pipe(Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_1__["untilDestroyed"])(this)).subscribe();
            this.cameraPreview$.pipe(Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_1__["untilDestroyed"])(this)).subscribe();
          }

          _createClass(CameraPage, [{
            key: "videoElement",
            set: function set(value) {
              this._videoElement$.next(value.nativeElement);
            }
          }, {
            key: "capture",
            value: function capture() {
              var _this2 = this;

              this.imageCapture$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (imageCapture) {
                return imageCapture.takePhoto();
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (imageBlob) {
                _this2._capturedImageUrl$.next(URL.createObjectURL(imageBlob));
              }), Object(_utils_rx_operators__WEBPACK_IMPORTED_MODULE_4__["concatTap"])(function (imageBlob) {
                return _this2.momentRepository.add$(imageBlob);
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                  return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                      switch (_context2.prev = _context2.next) {
                        case 0:
                          if (!(err instanceof DOMException && (err.name === 'InvalidStateError' || err.name === 'UnknownError' || err.name === 'OperationError'))) {
                            _context2.next = 2;
                            break;
                          }

                          return _context2.abrupt("return", undefined);

                        case 2:
                          return _context2.abrupt("return", this.presentErrorDialog(err));

                        case 3:
                        case "end":
                          return _context2.stop();
                      }
                    }
                  }, _callee2, this);
                }));
              }), Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_1__["untilDestroyed"])(this)).subscribe();
            }
          }, {
            key: "presentErrorDialog",
            value: function presentErrorDialog(err) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                var alert;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        // eslint-disable-next-line no-console
                        console.error(err);
                        _context3.next = 3;
                        return this.alertController.create({
                          header: err instanceof Error ? err.name : 'Unknown Error',
                          message: err instanceof Error ? err.message : JSON.stringify(err),
                          buttons: [{
                            text: 'ok'
                          }]
                        });

                      case 3:
                        alert = _context3.sent;
                        _context3.next = 6;
                        return alert.present();

                      case 6:
                      case "end":
                        return _context3.stop();
                    }
                  }
                }, _callee3, this);
              }));
            }
          }, {
            key: "ngOnDestroy",
            value: function ngOnDestroy() {
              this.mediaStream$.pipe(Object(_utils_rx_operators__WEBPACK_IMPORTED_MODULE_4__["isNonNullable"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (mediaStream) {
                return mediaStream.getTracks().forEach(function (track) {
                  return track.stop();
                });
              })).subscribe();
            }
          }]);

          return CameraPage;
        }();

        CameraPage.ɵfac = function CameraPage_Factory(t) {
          return new (t || CameraPage)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_moment_moment_repository_service__WEBPACK_IMPORTED_MODULE_7__["MomentRepository"]));
        };

        CameraPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
          type: CameraPage,
          selectors: [["app-camera"]],
          viewQuery: function CameraPage_Query(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 1);
            }

            if (rf & 2) {
              var _t;

              _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.videoElement = _t.first);
            }
          },
          decls: 7,
          vars: 1,
          consts: [["routerLink", "..", "routerDirection", "back", "fill", "clear", 1, "dismiss"], ["slot", "icon-only", "name", "close-outline", "color", "light"], ["fill", "clear", 1, "capture", 3, "click"], ["slot", "icon-only", "name", "radio-button-on-outline", "color", "light"], ["class", "captured ion-margin", 4, "ngrxLet"], ["playsinline", "", "autoplay", ""], ["video", ""], [1, "captured", "ion-margin"], ["ionImgViewer", "", 3, "src"]],
          template: function CameraPage_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-button", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "ion-icon", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "ion-button", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CameraPage_Template_ion_button_click_2_listener() {
                return ctx.capture();
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "ion-icon", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, CameraPage_div_4_Template, 2, 1, "div", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "video", 5, 6);
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);

              _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngrxLet", ctx.capturedImageUrl$);
            }
          },
          directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["RouterLinkDelegate"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLink"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonIcon"], _ngrx_component__WEBPACK_IMPORTED_MODULE_9__["LetDirective"], _shared_image_image_component__WEBPACK_IMPORTED_MODULE_10__["ImageComponent"], ngx_ionic_image_viewer__WEBPACK_IMPORTED_MODULE_11__["NgxIonicImageViewerDirective"]],
          styles: ["[_nghost-%COMP%] {\n  display: contents;\n  position: relative;\n}\n\nvideo[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  -o-object-position: center;\n     object-position: center;\n}\n\nion-button.dismiss[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  z-index: 1;\n  width: 48px;\n  height: 48px;\n  --background: #0002;\n  --border-radius: 50%;\n  --padding-end: 0;\n  --padding-start: 0;\n}\n\nion-button.capture[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  left: 50%;\n  transform: translate(-50%);\n  z-index: 1;\n  height: 72px;\n  width: 72px;\n  margin: 0 0 var(--ion-margin, 16px);\n  --border-radius: 50%;\n  --padding-end: 0;\n  --padding-start: 0;\n  --background: #0006;\n}\n\nion-button.capture[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 64px;\n}\n\n.captured[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 16px;\n  right: 16px;\n  overflow: hidden;\n  border-radius: 4px;\n  border: 1px solid var(--ion-color-light-shade);\n}\n\n.captured[_ngcontent-%COMP%]   app-image[_ngcontent-%COMP%] {\n  z-index: 10;\n  width: 60px;\n  height: 60px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2NhbWVyYS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSwwQkFBQTtLQUFBLHVCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFFQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUFGOztBQUdBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLDBCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUNBQUE7RUFFQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQURGOztBQUdFO0VBQ0UsZUFBQTtBQURKOztBQUtBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSw4Q0FBQTtBQUZGOztBQUlFO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBRkoiLCJmaWxlIjoiY2FtZXJhLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogY29udGVudHM7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxudmlkZW8ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXI7XG59XG5cbmlvbi1idXR0b24uZGlzbWlzcyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHotaW5kZXg6IDE7XG4gIHdpZHRoOiA0OHB4O1xuICBoZWlnaHQ6IDQ4cHg7XG5cbiAgLS1iYWNrZ3JvdW5kOiAjMDAwMjtcbiAgLS1ib3JkZXItcmFkaXVzOiA1MCU7XG4gIC0tcGFkZGluZy1lbmQ6IDA7XG4gIC0tcGFkZGluZy1zdGFydDogMDtcbn1cblxuaW9uLWJ1dHRvbi5jYXB0dXJlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSk7XG4gIHotaW5kZXg6IDE7XG4gIGhlaWdodDogNzJweDtcbiAgd2lkdGg6IDcycHg7XG4gIG1hcmdpbjogMCAwIHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO1xuXG4gIC0tYm9yZGVyLXJhZGl1czogNTAlO1xuICAtLXBhZGRpbmctZW5kOiAwO1xuICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gIC0tYmFja2dyb3VuZDogIzAwMDY7XG5cbiAgaW9uLWljb24ge1xuICAgIGZvbnQtc2l6ZTogNjRweDtcbiAgfVxufVxuXG4uY2FwdHVyZWQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMTZweDtcbiAgcmlnaHQ6IDE2cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcblxuICBhcHAtaW1hZ2Uge1xuICAgIHotaW5kZXg6IDEwO1xuICAgIHdpZHRoOiA2MHB4O1xuICAgIGhlaWdodDogNjBweDtcbiAgfVxufVxuIl19 */"]
        });
        CameraPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_1__["UntilDestroy"])()], CameraPage);
        return CameraPage;
      }();
      /***/

    },

    /***/
    "QDOj":
    /*!*******************************************************!*\
      !*** ./src/app/features/home/camera/camera.module.ts ***!
      \*******************************************************/

    /*! exports provided: CameraPageModule */

    /***/
    function QDOj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CameraPageModule", function () {
        return CameraPageModule;
      });
      /* harmony import */


      var ngx_ionic_image_viewer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ngx-ionic-image-viewer */
      "6g0+");
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../shared/shared.module */
      "PCNd");
      /* harmony import */


      var _camera_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./camera-routing.module */
      "nnWX");
      /* harmony import */


      var _camera_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./camera.page */
      "/rh9");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var CameraPageModule = /*@__PURE__*/function () {
        var CameraPageModule = function CameraPageModule() {
          _classCallCheck(this, CameraPageModule);
        };

        CameraPageModule.ɵfac = function CameraPageModule_Factory(t) {
          return new (t || CameraPageModule)();
        };

        CameraPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
          type: CameraPageModule
        });
        CameraPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
          imports: [[_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], _camera_routing_module__WEBPACK_IMPORTED_MODULE_2__["CameraPageRoutingModule"], ngx_ionic_image_viewer__WEBPACK_IMPORTED_MODULE_0__["NgxIonicImageViewerModule"]]]
        });
        return CameraPageModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](CameraPageModule, {
          declarations: [_camera_page__WEBPACK_IMPORTED_MODULE_3__["CameraPage"]],
          imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], _camera_routing_module__WEBPACK_IMPORTED_MODULE_2__["CameraPageRoutingModule"], ngx_ionic_image_viewer__WEBPACK_IMPORTED_MODULE_0__["NgxIonicImageViewerModule"]]
        });
      })();
      /***/

    },

    /***/
    "nnWX":
    /*!***************************************************************!*\
      !*** ./src/app/features/home/camera/camera-routing.module.ts ***!
      \***************************************************************/

    /*! exports provided: CameraPageRoutingModule */

    /***/
    function nnWX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CameraPageRoutingModule", function () {
        return CameraPageRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _camera_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./camera.page */
      "/rh9");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: '',
        component: _camera_page__WEBPACK_IMPORTED_MODULE_1__["CameraPage"]
      }];

      var CameraPageRoutingModule = /*@__PURE__*/function () {
        var CameraPageRoutingModule = function CameraPageRoutingModule() {
          _classCallCheck(this, CameraPageRoutingModule);
        };

        CameraPageRoutingModule.ɵfac = function CameraPageRoutingModule_Factory(t) {
          return new (t || CameraPageRoutingModule)();
        };

        CameraPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
          type: CameraPageRoutingModule
        });
        CameraPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
          imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
        return CameraPageRoutingModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](CameraPageRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=4-es5.05e9cafc2dca3d95a2eb.js.map