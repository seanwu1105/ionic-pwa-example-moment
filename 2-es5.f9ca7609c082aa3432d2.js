(function () {
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2], {
    /***/
    "GPYM":
    /*!*************************************************************!*\
      !*** ./src/app/features/home/photo/photo-routing.module.ts ***!
      \*************************************************************/

    /*! exports provided: PhotoPageRoutingModule */

    /***/
    function GPYM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PhotoPageRoutingModule", function () {
        return PhotoPageRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _photo_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./photo.page */
      "MXsB");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: '',
        component: _photo_page__WEBPACK_IMPORTED_MODULE_1__["PhotoPage"]
      }];

      var PhotoPageRoutingModule = /*@__PURE__*/function () {
        var PhotoPageRoutingModule = function PhotoPageRoutingModule() {
          _classCallCheck(this, PhotoPageRoutingModule);
        };

        PhotoPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
          type: PhotoPageRoutingModule
        });
        PhotoPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
          factory: function PhotoPageRoutingModule_Factory(t) {
            return new (t || PhotoPageRoutingModule)();
          },
          imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
        return PhotoPageRoutingModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](PhotoPageRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "MTLF":
    /*!*****************************************************!*\
      !*** ./src/app/features/home/photo/photo.module.ts ***!
      \*****************************************************/

    /*! exports provided: PhotoPageModule */

    /***/
    function MTLF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PhotoPageModule", function () {
        return PhotoPageModule;
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


      var _photo_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./photo-routing.module */
      "GPYM");
      /* harmony import */


      var _photo_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./photo.page */
      "MXsB");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var PhotoPageModule = /*@__PURE__*/function () {
        var PhotoPageModule = function PhotoPageModule() {
          _classCallCheck(this, PhotoPageModule);
        };

        PhotoPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
          type: PhotoPageModule
        });
        PhotoPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
          factory: function PhotoPageModule_Factory(t) {
            return new (t || PhotoPageModule)();
          },
          imports: [[_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], _photo_routing_module__WEBPACK_IMPORTED_MODULE_2__["PhotoPageRoutingModule"], ngx_ionic_image_viewer__WEBPACK_IMPORTED_MODULE_0__["NgxIonicImageViewerModule"]]]
        });
        return PhotoPageModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](PhotoPageModule, {
          declarations: [_photo_page__WEBPACK_IMPORTED_MODULE_3__["PhotoPage"]],
          imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], _photo_routing_module__WEBPACK_IMPORTED_MODULE_2__["PhotoPageRoutingModule"], ngx_ionic_image_viewer__WEBPACK_IMPORTED_MODULE_0__["NgxIonicImageViewerModule"]]
        });
      })();
      /***/

    },

    /***/
    "MXsB":
    /*!***************************************************!*\
      !*** ./src/app/features/home/photo/photo.page.ts ***!
      \***************************************************/

    /*! exports provided: PhotoPage */

    /***/
    function MXsB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PhotoPage", function () {
        return PhotoPage;
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


      var _shared_juncture_juncture_repository_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../shared/juncture/juncture-repository.service */
      "kTgZ");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _ngrx_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ngrx/component */
      "9A8T");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _shared_image_image_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../../shared/image/image.component */
      "/T4s");
      /* harmony import */


      var ngx_ionic_image_viewer__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ngx-ionic-image-viewer */
      "6g0+");

      function PhotoPage_ion_slides_9_ion_slide_1_app_image_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-image", 20);
        }

        if (rf & 2) {
          var photoUrl_r6 = ctx.ngrxLet;

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", photoUrl_r6);
        }
      }

      function PhotoPage_ion_slides_9_ion_slide_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-slide");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, PhotoPage_ion_slides_9_ion_slide_1_app_image_1_Template, 1, 1, "app-image", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var juncture_r4 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngrxLet", juncture_r4.photoUrl$);
        }
      }

      function PhotoPage_ion_slides_9_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-slides", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ionSlideDidChange", function PhotoPage_ion_slides_9_Template_ion_slides_ionSlideDidChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

            return ctx_r7.onPhotoSlidesChanged($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, PhotoPage_ion_slides_9_ion_slide_1_Template, 2, 1, "ion-slide", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "ngrxPush");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var options_r2 = ctx.ngrxLet;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("options", options_r2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 2, ctx_r0.junctures$));
        }
      }

      function PhotoPage_iframe_56_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "iframe", 21);
        }

        if (rf & 2) {
          var mapUrl_r9 = ctx.ngrxLet;

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", mapUrl_r9, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeResourceUrl"]);
        }
      }

      var PhotoPage = /*@__PURE__*/function () {
        var PhotoPage = /*#__PURE__*/function () {
          function PhotoPage(junctureRepository, route, router, sanitizer, httpClient) {
            var _this = this;

            _classCallCheck(this, PhotoPage);

            this.junctureRepository = junctureRepository;
            this.route = route;
            this.router = router;
            this.sanitizer = sanitizer;
            this.httpClient = httpClient;
            this.currentJunctureId$ = this.route.queryParamMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (params) {
              return params.get('id');
            }), Object(_utils_rx_operators__WEBPACK_IMPORTED_MODULE_4__["isNonNullable"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])());
            this.junctures$ = this.junctureRepository.all$;
            this.currentJunctureIndex$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])([this.junctures$, this.currentJunctureId$]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (_ref) {
              var _ref2 = _slicedToArray(_ref, 2),
                  junctures = _ref2[0],
                  id = _ref2[1];

              return junctures.findIndex(function (j) {
                return j.id === id;
              });
            }));
            this.currentJuncture$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])([this.junctures$, this.currentJunctureIndex$]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (_ref3) {
              var _ref4 = _slicedToArray(_ref3, 2),
                  junctures = _ref4[0],
                  currentIndex = _ref4[1];

              return junctures[currentIndex];
            }));
            this.address$ = this.currentJuncture$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (juncture) {
              return juncture.geolocationPosition;
            }), Object(_utils_rx_operators__WEBPACK_IMPORTED_MODULE_4__["isNonNullable"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (position) {
              return _this.httpClient.get("https://nominatim.openstreetmap.org/reverse?lat=".concat(position.latitude, "&lon=").concat(position.longitude, "&format=geojson&accept-language=en-US"));
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (json) {
              if (json.features.length === 0) return undefined;
              var properties = json.features[0].properties;
              if (!properties) return undefined;
              return properties['display_name'];
            }));
            this.mapUrl$ = this.currentJuncture$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (juncture) {
              return juncture.geolocationPosition;
            }), Object(_utils_rx_operators__WEBPACK_IMPORTED_MODULE_4__["isNonNullable"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (position) {
              return _this.sanitizer.bypassSecurityTrustResourceUrl("https://maps.google.com/maps?q=".concat(position.latitude, ",").concat(position.longitude, "&z=15&output=embed"));
            }), Object(_utils_rx_operators__WEBPACK_IMPORTED_MODULE_4__["isNonNullable"])());
            this.photoSlidesOptions$ = this.currentJunctureIndex$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (initialIndex) {
              return {
                resistanceRatio: 0,
                initialSlide: initialIndex
              };
            }));
          }

          _createClass(PhotoPage, [{
            key: "onPhotoSlidesChanged",
            value: function onPhotoSlidesChanged(event) {
              var _this2 = this;

              var ionSlides = event.target;
              return this.junctures$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (junctures) {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                  return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          _context.next = 2;
                          return ionSlides.getActiveIndex();

                        case 2:
                          _context.t0 = _context.sent;
                          return _context.abrupt("return", junctures[_context.t0].id);

                        case 4:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee);
                }));
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (id) {
                return _this2.router.navigate([], {
                  queryParams: {
                    id: id
                  },
                  relativeTo: _this2.route,
                  replaceUrl: true
                });
              }), Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_1__["untilDestroyed"])(this)).subscribe();
            }
          }]);

          return PhotoPage;
        }();

        PhotoPage.ɵfac = function PhotoPage_Factory(t) {
          return new (t || PhotoPage)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_juncture_juncture_repository_service__WEBPACK_IMPORTED_MODULE_6__["JunctureRepository"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"]));
        };

        PhotoPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
          type: PhotoPage,
          selectors: [["app-photo"]],
          decls: 57,
          vars: 23,
          consts: [[1, "ion-no-border"], ["slot", "start"], ["color", "light"], ["slot", "end"], ["slot", "primary", "color", "light"], ["name", "trash-outline", "slot", "icon-only"], ["slot", "secondary", "color", "light"], ["name", "share-social-outline", "slot", "icon-only"], ["class", "photo-slides", 3, "options", "ionSlideDidChange", 4, "ngrxLet"], ["fullscreen", ""], ["lines", "none"], ["name", "code-outline", "slot", "start"], ["name", "document-outline", "slot", "start"], ["name", "time-outline", "slot", "start"], ["name", "location-outline", "slot", "start"], ["name", "home-outline", "slot", "start"], ["frameborder", "0", "loading", "lazy", 3, "src", 4, "ngrxLet"], [1, "photo-slides", 3, "options", "ionSlideDidChange"], [4, "ngFor", "ngForOf"], ["ionImgViewer", "", 3, "src", 4, "ngrxLet"], ["ionImgViewer", "", 3, "src"], ["frameborder", "0", "loading", "lazy", 3, "src"]],
          template: function PhotoPage_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-header", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "ion-toolbar");

              _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "ion-buttons", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "ion-back-button", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "ion-buttons", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "ion-button", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "ion-icon", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "ion-button", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "ion-icon", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, PhotoPage_ion_slides_9_Template, 3, 4, "ion-slides", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "ion-content", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "ion-list", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "ion-item");

              _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](13, "ion-icon", 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "ion-label");

              _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "h3");

              _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "Hash");

              _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "p");

              _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18);

              _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](19, "ngrxPush");

              _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "ion-item");

              _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](21, "ion-icon", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "ion-label");

              _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "h3");

              _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, "MIME Type");

              _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "p");

              _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26);

              _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](27, "ngrxPush");

              _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "ion-item");

              _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](29, "ion-icon", 13);

              _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "ion-label");

              _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "h3");

              _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](32, "Timestamp");

              _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "p");

              _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](34);

              _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](35, "date");

              _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](36, "ngrxPush");

              _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "ion-item");

              _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](38, "ion-icon", 14);

              _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "ion-label");

              _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "h3");

              _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](41, "Geolocation");

              _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "p");

              _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](43);

              _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](44, "ngrxPush");

              _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](45, "ngrxPush");

              _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "ion-item");

              _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](47, "ion-icon", 15);

              _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](48, "ion-label");

              _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](49, "h3");

              _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](50, "Address");

              _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "p");

              _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](52);

              _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](53, "ngrxPush");

              _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](54, "ion-item");

              _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](55, "ion-icon", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](56, PhotoPage_iframe_56_Template, 1, 1, "iframe", 16);

              _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            }

            if (rf & 2) {
              var tmp_1_0 = null;
              var tmp_2_0 = null;
              var tmp_3_0 = null;
              var tmp_4_0 = null;

              _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);

              _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngrxLet", ctx.photoSlidesOptions$);

              _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);

              _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"]((tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](19, 8, ctx.currentJuncture$)) == null ? null : tmp_1_0.id);

              _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);

              _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"]((tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](27, 10, ctx.currentJuncture$)) == null ? null : tmp_2_0.mimeType);

              _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);

              _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](35, 12, (tmp_3_0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](36, 15, ctx.currentJuncture$)) == null ? null : tmp_3_0.timestamp, "long"));

              _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);

              _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"](" ", (tmp_4_0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](44, 17, ctx.currentJuncture$)) == null ? null : tmp_4_0.geolocationPosition == null ? null : tmp_4_0.geolocationPosition.latitude, ", ", (tmp_4_0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](45, 19, ctx.currentJuncture$)) == null ? null : tmp_4_0.geolocationPosition == null ? null : tmp_4_0.geolocationPosition.longitude, " ");

              _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);

              _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](53, 21, ctx.address$));

              _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);

              _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngrxLet", ctx.mapUrl$);
            }
          },
          directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonIcon"], _ngrx_component__WEBPACK_IMPORTED_MODULE_11__["LetDirective"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonList"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonSlides"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonSlide"], _shared_image_image_component__WEBPACK_IMPORTED_MODULE_13__["ImageComponent"], ngx_ionic_image_viewer__WEBPACK_IMPORTED_MODULE_14__["NgxIonicImageViewerDirective"]],
          pipes: [_ngrx_component__WEBPACK_IMPORTED_MODULE_11__["PushPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["DatePipe"]],
          styles: ["ion-toolbar[_ngcontent-%COMP%] {\n  position: absolute;\n  --background: transparent;\n}\n\n.photo-slides[_ngcontent-%COMP%] {\n  overflow: hidden;\n  border-radius: 0 0 32px 32px;\n  box-shadow: rgba(0, 0, 0, 0.24) 0 3px 8px;\n}\n\n.photo-slides[_ngcontent-%COMP%]   ion-slide[_ngcontent-%COMP%] {\n  height: auto;\n}\n\n.photo-slides[_ngcontent-%COMP%]   ion-slide[_ngcontent-%COMP%]   app-image[_ngcontent-%COMP%] {\n  height: 100%;\n  max-height: 40vh;\n  min-height: 100px;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  -o-object-position: center;\n     object-position: center;\n}\n\niframe[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100px;\n  border-radius: 4px;\n}"]
        });
        PhotoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_1__["UntilDestroy"])()], PhotoPage);
        return PhotoPage;
      }();
      /***/

    }
  }]);
})();