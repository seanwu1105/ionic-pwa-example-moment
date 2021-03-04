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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4], {
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


      var _shared_moment_moment_repository_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../shared/moment/moment-repository.service */
      "BJdS");
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


      var _shared_languages_languages_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../../shared/languages/languages.service */
      "PmnW");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @ngneat/transloco */
      "QPBi");
      /* harmony import */


      var _ngrx_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @ngrx/component */
      "9A8T");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _shared_image_image_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../../../shared/image/image.component */
      "/T4s");
      /* harmony import */


      var ngx_ionic_image_viewer__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ngx-ionic-image-viewer */
      "6g0+");
      /* harmony import */


      var _ngneat_transloco_locale__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @ngneat/transloco-locale */
      "pNjf");

      var _c0 = ["slides"];

      function PhotoPage_ion_content_9_ion_slides_1_ion_slide_2_app_image_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-image", 19);
        }

        if (rf & 2) {
          var photoUrl_r9 = ctx.ngrxLet;

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", photoUrl_r9);
        }
      }

      function PhotoPage_ion_content_9_ion_slides_1_ion_slide_2_ion_item_group_7_iframe_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "iframe", 23);
        }

        if (rf & 2) {
          var mapUrl_r11 = ctx.ngrxLet;

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", mapUrl_r11, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeResourceUrl"]);
        }
      }

      function PhotoPage_ion_content_9_ion_slides_1_ion_slide_2_ion_item_group_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-item-group");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "ion-item-divider");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, PhotoPage_ion_content_9_ion_slides_1_ion_slide_2_ion_item_group_7_iframe_4_Template, 1, 1, "iframe", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "ion-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "ion-icon", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "ion-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](13, "ion-icon", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](19, "ngrxPush");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var moment_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;

          var t_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit;

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](t_r1("location"));

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngrxLet", ctx_r8.mapUrl$);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](t_r1("coordinates"));

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"](" ", moment_r6.geolocationPosition == null ? null : moment_r6.geolocationPosition.latitude, " , ", moment_r6.geolocationPosition == null ? null : moment_r6.geolocationPosition.longitude, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](t_r1("address"));

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](19, 7, ctx_r8.address$));
        }
      }

      var _c1 = function _c1() {
        return {
          dateStyle: "full",
          timeStyle: "full"
        };
      };

      function PhotoPage_ion_content_9_ion_slides_1_ion_slide_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-slide");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, PhotoPage_ion_content_9_ion_slides_1_ion_slide_2_app_image_1_Template, 1, 1, "app-image", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "ion-list", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "ion-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](6, "translocoDate");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, PhotoPage_ion_content_9_ion_slides_1_ion_slide_2_ion_item_group_7_Template, 20, 9, "ion-item-group", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "ion-item-group");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "ion-item-divider");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "ion-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](13, "ion-icon", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "ion-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](20, "ion-icon", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var moment_r6 = ctx.$implicit;

          var t_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngrxLet", moment_r6.photoUrl$);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](6, 8, moment_r6.timestamp, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](11, _c1)), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", moment_r6.geolocationPosition);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](t_r1("details"));

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](t_r1("hash"));

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](moment_r6.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](t_r1("mimeType"));

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](moment_r6.mimeType);
        }
      }

      function PhotoPage_ion_content_9_ion_slides_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-slides", 11, 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ionSlideDidChange", function PhotoPage_ion_content_9_ion_slides_1_Template_ion_slides_ionSlideDidChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r16);

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);

            return ctx_r15.onPhotoSlidesChanged($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, PhotoPage_ion_content_9_ion_slides_1_ion_slide_2_Template, 26, 12, "ion-slide", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "ngrxPush");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var options_r3 = ctx.ngrxLet;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("options", options_r3);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 3, ctx_r2.moments$))("ngForTrackBy", ctx_r2.trackMoment);
        }
      }

      function PhotoPage_ion_content_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-content", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, PhotoPage_ion_content_9_ion_slides_1_Template, 4, 5, "ion-slides", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngrxLet", ctx_r0.photoSlidesOptions$);
        }
      }

      var PhotoPage = /*@__PURE__*/function () {
        var PhotoPage = /*#__PURE__*/function () {
          function PhotoPage(momentRepository, route, router, sanitizer, httpClient, languagesService) {
            var _this = this;

            _classCallCheck(this, PhotoPage);

            this.momentRepository = momentRepository;
            this.route = route;
            this.router = router;
            this.sanitizer = sanitizer;
            this.httpClient = httpClient;
            this.languagesService = languagesService;
            this._ionSlides$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](undefined);
            this.ionSlides$ = this._ionSlides$.pipe(Object(_utils_rx_operators__WEBPACK_IMPORTED_MODULE_4__["isNonNullable"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])());
            this.currentMemontId$ = this.route.queryParamMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (params) {
              return params.get('id');
            }), Object(_utils_rx_operators__WEBPACK_IMPORTED_MODULE_4__["isNonNullable"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])());
            this.moments$ = this.momentRepository.all$;
            this.currentMomentIndex$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])([this.moments$, this.currentMemontId$]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (_ref) {
              var _ref2 = _slicedToArray(_ref, 2),
                  moments = _ref2[0],
                  id = _ref2[1];

              return moments.findIndex(function (j) {
                return j.id === id;
              });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])());
            this.currentMoment$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])([this.moments$, this.currentMomentIndex$]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (_ref3) {
              var _ref4 = _slicedToArray(_ref3, 2),
                  moments = _ref4[0],
                  currentIndex = _ref4[1];

              return moments[currentIndex];
            }));
            this.geolocationPosition$ = this.currentMoment$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (moment) {
              return moment.geolocationPosition;
            }), Object(_utils_rx_operators__WEBPACK_IMPORTED_MODULE_4__["isNonNullable"])());
            this.address$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])([this.geolocationPosition$, this.languagesService.language$]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (_ref5) {
              var _ref6 = _slicedToArray(_ref5, 2),
                  position = _ref6[0],
                  language = _ref6[1];

              return _this.httpClient.get("https://nominatim.openstreetmap.org/reverse?lat=".concat(position.latitude, "&lon=").concat(position.longitude, "&format=geojson&accept-language=").concat(language));
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (json) {
              if (json.features.length === 0) return undefined;
              var properties = json.features[0].properties;
              if (!properties) return undefined;
              return properties['display_name'];
            }));
            this.mapUrl$ = this.geolocationPosition$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (position) {
              return _this.sanitizer.bypassSecurityTrustResourceUrl("https://maps.google.com/maps?q=".concat(position.latitude, ",").concat(position.longitude, "&z=15&output=embed"));
            }), Object(_utils_rx_operators__WEBPACK_IMPORTED_MODULE_4__["isNonNullable"])());
            this.photoSlidesOptions$ = this.currentMomentIndex$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (initialIndex) {
              return {
                resistanceRatio: 0,
                initialSlide: initialIndex
              };
            }));
            this.slideToMoment$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])([this.ionSlides$, this.currentMomentIndex$]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (_ref7) {
              var _ref8 = _slicedToArray(_ref7, 2),
                  slides = _ref8[0],
                  index = _ref8[1];

              return slides.slideTo(index);
            }));
            this.slideToMoment$.pipe(Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_1__["untilDestroyed"])(this)).subscribe();
          }

          _createClass(PhotoPage, [{
            key: "ionSlides",
            set: function set(value) {
              this._ionSlides$.next(value);
            }
          }, {
            key: "trackMoment",
            value: function trackMoment(_, item) {
              return item.id;
            }
          }, {
            key: "onPhotoSlidesChanged",
            value: function onPhotoSlidesChanged(event) {
              var _this2 = this;

              var ionSlides = event.target;
              return this.moments$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (moments) {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                  return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          _context.next = 2;
                          return ionSlides.getActiveIndex();

                        case 2:
                          _context.t0 = _context.sent;
                          return _context.abrupt("return", moments[_context.t0].id);

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
          return new (t || PhotoPage)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_moment_moment_repository_service__WEBPACK_IMPORTED_MODULE_6__["MomentRepository"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_languages_languages_service__WEBPACK_IMPORTED_MODULE_10__["LanguagesService"]));
        };

        PhotoPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
          type: PhotoPage,
          selectors: [["app-photo"]],
          viewQuery: function PhotoPage_Query(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 1);
            }

            if (rf & 2) {
              var _t;

              _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.ionSlides = _t.first);
            }
          },
          decls: 10,
          vars: 0,
          consts: [[1, "ion-no-border"], ["slot", "start"], ["color", "light"], ["slot", "end"], ["slot", "primary", "color", "light"], ["name", "trash-outline", "slot", "icon-only"], ["slot", "secondary", "color", "light"], ["name", "share-social-outline", "slot", "icon-only"], ["fullscreen", "", 4, "transloco"], ["fullscreen", ""], [3, "options", "ionSlideDidChange", 4, "ngrxLet"], [3, "options", "ionSlideDidChange"], ["slides", ""], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["ionImgViewer", "", 3, "src", 4, "ngrxLet"], ["lines", "none"], [4, "ngIf"], ["name", "code-outline", "slot", "start"], ["name", "document-outline", "slot", "start"], ["ionImgViewer", "", 3, "src"], ["frameborder", "0", "loading", "lazy", 3, "src", 4, "ngrxLet"], ["name", "location-outline", "slot", "start"], ["name", "home-outline", "slot", "start"], ["frameborder", "0", "loading", "lazy", 3, "src"]],
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

              _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, PhotoPage_ion_content_9_Template, 2, 1, "ion-content", 8);
            }
          },
          directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_11__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["IonIcon"], _ngneat_transloco__WEBPACK_IMPORTED_MODULE_12__["TranslocoDirective"], _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["IonContent"], _ngrx_component__WEBPACK_IMPORTED_MODULE_13__["LetDirective"], _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["IonSlides"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["IonSlide"], _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["IonList"], _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["IonLabel"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["IonItemGroup"], _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["IonItemDivider"], _shared_image_image_component__WEBPACK_IMPORTED_MODULE_15__["ImageComponent"], ngx_ionic_image_viewer__WEBPACK_IMPORTED_MODULE_16__["NgxIonicImageViewerDirective"]],
          pipes: [_ngrx_component__WEBPACK_IMPORTED_MODULE_13__["PushPipe"], _ngneat_transloco_locale__WEBPACK_IMPORTED_MODULE_17__["TranslocoDatePipe"]],
          styles: ["[_nghost-%COMP%] {\n  --photo-radius: 32px;\n}\n\nion-toolbar[_ngcontent-%COMP%] {\n  position: absolute;\n  --background: #00000025;\n}\n\nion-slides[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\nion-slide[_ngcontent-%COMP%] {\n  flex-direction: column;\n  justify-content: flex-start;\n  height: auto;\n}\n\napp-image[_ngcontent-%COMP%] {\n  height: 100%;\n  max-height: 40vh;\n  min-height: 200px;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  -o-object-position: center;\n     object-position: center;\n  border-radius: 0 0 var(--photo-radius) var(--photo-radius);\n  z-index: 99;\n}\n\nion-list[_ngcontent-%COMP%] {\n  width: 100%;\n  overflow: scroll;\n  margin-top: calc(-1 * var(--photo-radius));\n  padding-top: var(--photo-radius);\n}\n\niframe[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Bob3RvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUVBLHVCQUFBO0FBQUY7O0FBR0E7RUFDRSxZQUFBO0FBQUY7O0FBR0E7RUFDRSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsWUFBQTtBQUFGOztBQUdBO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtFQUNBLDBCQUFBO0tBQUEsdUJBQUE7RUFDQSwwREFBQTtFQUNBLFdBQUE7QUFBRjs7QUFHQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLDBDQUFBO0VBQ0EsZ0NBQUE7QUFBRjs7QUFHQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0FBQUYiLCJmaWxlIjoicGhvdG8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAtLXBob3RvLXJhZGl1czogMzJweDtcbn1cblxuaW9uLXRvb2xiYXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG5cbiAgLS1iYWNrZ3JvdW5kOiAjMDAwMDAwMjU7XG59XG5cbmlvbi1zbGlkZXMge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbmlvbi1zbGlkZSB7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG5hcHAtaW1hZ2Uge1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDQwdmg7XG4gIG1pbi1oZWlnaHQ6IDIwMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIG9iamVjdC1wb3NpdGlvbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiAwIDAgdmFyKC0tcGhvdG8tcmFkaXVzKSB2YXIoLS1waG90by1yYWRpdXMpO1xuICB6LWluZGV4OiA5OTtcbn1cblxuaW9uLWxpc3Qge1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgbWFyZ2luLXRvcDogY2FsYygtMSAqIHZhcigtLXBob3RvLXJhZGl1cykpO1xuICBwYWRkaW5nLXRvcDogdmFyKC0tcGhvdG8tcmFkaXVzKTtcbn1cblxuaWZyYW1lIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwcHg7XG59XG4iXX0= */"]
        });
        PhotoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_1__["UntilDestroy"])()], PhotoPage);
        return PhotoPage;
      }();
      /***/

    }
  }]);
})();
//# sourceMappingURL=4-es5.8a43048b53d6a37ed645.js.map