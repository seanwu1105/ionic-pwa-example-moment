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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5], {
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


      var mime_lite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! mime/lite */
      "M57b");
      /* harmony import */


      var mime_lite__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mime_lite__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _utils_rx_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../utils/rx-operators */
      "KJy6");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _shared_moment_moment_repository_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../shared/moment/moment-repository.service */
      "BJdS");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _shared_languages_languages_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../../shared/languages/languages.service */
      "PmnW");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _ngrx_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @ngrx/component */
      "9A8T");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @ngneat/transloco */
      "QPBi");
      /* harmony import */


      var _shared_copy_clipboard_copy_clipboard_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../../../shared/copy-clipboard/copy-clipboard.component */
      "GREk");
      /* harmony import */


      var _shared_image_image_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ../../../shared/image/image.component */
      "/T4s");
      /* harmony import */


      var ngx_ionic_image_viewer__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ngx-ionic-image-viewer */
      "6g0+");
      /* harmony import */


      var _shared_extension_extension_pipe__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ../../../shared/extension/extension.pipe */
      "j86x");
      /* harmony import */


      var _ngneat_transloco_locale__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @ngneat/transloco-locale */
      "pNjf");

      function PhotoPage_ion_button_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](1, "ngrxPush");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "extension");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "ion-icon", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var currentMoment_r3 = ctx.ngrxLet;

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("href", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](1, 2, currentMoment_r3.photoUrl$))("download", currentMoment_r3.id + "." + _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 4, currentMoment_r3.mimeType));
        }
      }

      function PhotoPage_ion_button_8_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PhotoPage_ion_button_8_Template_ion_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r5);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

            return ctx_r4.share();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "ion-icon", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function PhotoPage_ion_content_9_ion_slides_1_ion_slide_1_app_image_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-image", 23);
        }

        if (rf & 2) {
          var photoUrl_r13 = ctx.ngrxLet;

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", photoUrl_r13);
        }
      }

      function PhotoPage_ion_content_9_ion_slides_1_ion_slide_1_ion_item_group_7_iframe_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "iframe", 27);
        }

        if (rf & 2) {
          var mapUrl_r15 = ctx.ngrxLet;

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", mapUrl_r15, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeResourceUrl"]);
        }
      }

      function PhotoPage_ion_content_9_ion_slides_1_ion_slide_1_ion_item_group_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-item-group");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "ion-item-divider");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, PhotoPage_ion_content_9_ion_slides_1_ion_slide_1_ion_item_group_7_iframe_4_Template, 1, 1, "iframe", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "ion-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "ion-icon", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](12, "app-copy-clipboard", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "ion-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](14, "ion-icon", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](20, "ngrxPush");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](21, "app-copy-clipboard", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](22, "ngrxPush");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var moment_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;

          var t_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](t_r6("location"));

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngrxLet", ctx_r12.mapUrl$);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](t_r6("coordinates"));

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"](" ", moment_r10.geolocationPosition == null ? null : moment_r10.geolocationPosition.latitude, " , ", moment_r10.geolocationPosition == null ? null : moment_r10.geolocationPosition.longitude, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("text", (moment_r10.geolocationPosition == null ? null : moment_r10.geolocationPosition.latitude) + "," + (moment_r10.geolocationPosition == null ? null : moment_r10.geolocationPosition.longitude));

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](t_r6("address"));

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](20, 9, ctx_r12.address$));

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("text", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](22, 11, ctx_r12.address$));
        }
      }

      var _c0 = function _c0() {
        return {
          dateStyle: "full",
          timeStyle: "full"
        };
      };

      function PhotoPage_ion_content_9_ion_slides_1_ion_slide_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-slide");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, PhotoPage_ion_content_9_ion_slides_1_ion_slide_1_app_image_1_Template, 1, 1, "app-image", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "ion-list", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "ion-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](6, "translocoDate");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, PhotoPage_ion_content_9_ion_slides_1_ion_slide_1_ion_item_group_7_Template, 23, 13, "ion-item-group", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "ion-item-group");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "ion-item-divider");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "ion-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](13, "ion-icon", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](19, "app-copy-clipboard", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "ion-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](21, "ion-icon", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](27, "app-copy-clipboard", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var moment_r10 = ctx.$implicit;

          var t_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngrxLet", moment_r10.photoUrl$);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](6, 10, moment_r10.timestamp, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](13, _c0)), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", moment_r10.geolocationPosition);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](t_r6("details"));

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](t_r6("hash"));

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](moment_r10.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("text", moment_r10.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](t_r6("mimeType"));

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](moment_r10.mimeType);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("text", moment_r10.mimeType);
        }
      }

      function PhotoPage_ion_content_9_ion_slides_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-slides", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ionSlideDidChange", function PhotoPage_ion_content_9_ion_slides_1_Template_ion_slides_ionSlideDidChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r20);

            var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);

            return ctx_r19.onPhotoSlidesChanged($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, PhotoPage_ion_content_9_ion_slides_1_ion_slide_1_Template, 28, 14, "ion-slide", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "ngrxPush");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var options_r8 = ctx.ngrxLet;

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("options", options_r8);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 3, ctx_r7.moments$))("ngForTrackBy", ctx_r7.trackMoment);
        }
      }

      function PhotoPage_ion_content_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-content", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, PhotoPage_ion_content_9_ion_slides_1_Template, 3, 5, "ion-slides", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngrxLet", ctx_r2.photoSlidesOptions$);
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
            this.willBeDestroyed = false;
            this.currentMemontId$ = this.route.queryParamMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (params) {
              return params.get('id');
            }), Object(_utils_rx_operators__WEBPACK_IMPORTED_MODULE_5__["isNonNullable"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])());
            this.moments$ = this.momentRepository.all$;
            this.currentMomentIndex$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["combineLatest"])([this.moments$, this.currentMemontId$]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (_ref) {
              var _ref2 = _slicedToArray(_ref, 2),
                  moments = _ref2[0],
                  id = _ref2[1];

              return moments.findIndex(function (j) {
                return j.id === id;
              });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])());
            this.currentMoment$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["combineLatest"])([this.moments$, this.currentMomentIndex$]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (_ref3) {
              var _ref4 = _slicedToArray(_ref3, 2),
                  moments = _ref4[0],
                  currentIndex = _ref4[1];

              return moments[currentIndex];
            }));
            this.geolocationPosition$ = this.currentMoment$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (moment) {
              return moment.geolocationPosition;
            }), Object(_utils_rx_operators__WEBPACK_IMPORTED_MODULE_5__["isNonNullable"])());
            this.address$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["combineLatest"])([this.geolocationPosition$, this.languagesService.language$]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (_ref5) {
              var _ref6 = _slicedToArray(_ref5, 2),
                  position = _ref6[0],
                  language = _ref6[1];

              return _this.httpClient.get("https://nominatim.openstreetmap.org/reverse?lat=".concat(position.latitude, "&lon=").concat(position.longitude, "&format=geojson&accept-language=").concat(language));
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (json) {
              if (json.features.length === 0) return undefined;
              var properties = json.features[0].properties;
              if (!properties) return undefined;
              return properties['display_name'];
            }));
            this.mapUrl$ = this.geolocationPosition$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (position) {
              return _this.sanitizer.bypassSecurityTrustResourceUrl("https://maps.google.com/maps?q=".concat(position.latitude, ",").concat(position.longitude, "&z=15&output=embed"));
            }), Object(_utils_rx_operators__WEBPACK_IMPORTED_MODULE_5__["isNonNullable"])());
            this.photoSlidesOptions$ = this.currentMomentIndex$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (initialIndex) {
              return {
                resistanceRatio: 0,
                initialSlide: initialIndex
              };
            }));
            this.supportShare = !!navigator['share'];
          }

          _createClass(PhotoPage, [{
            key: "trackMoment",
            value: function trackMoment(_, item) {
              return item.id;
            }
          }, {
            key: "onPhotoSlidesChanged",
            value: function onPhotoSlidesChanged(event) {
              var _this2 = this;

              var ionSlides = event.target;
              return this.moments$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (moments) {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                  return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          _context.next = 2;
                          return ionSlides.getActiveIndex();

                        case 2:
                          _context.t0 = _context.sent;
                          return _context.abrupt("return", moments[_context.t0]);

                        case 4:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee);
                }));
              }), Object(_utils_rx_operators__WEBPACK_IMPORTED_MODULE_5__["isNonNullable"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (moment) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["iif"])(function () {
                  return !_this2.willBeDestroyed;
                }, _this2.router.navigate([], {
                  queryParams: {
                    id: moment.id
                  },
                  relativeTo: _this2.route,
                  replaceUrl: true
                }));
              }), Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_1__["untilDestroyed"])(this)).subscribe();
            }
          }, {
            key: "remove",
            value: function remove() {
              var _this3 = this;

              return this.currentMemontId$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function () {
                return _this3.willBeDestroyed = true;
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["concatMap"])(function (id) {
                return _this3.momentRepository.remove$(id);
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["concatMapTo"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["defer"])(function () {
                return _this3.router.navigate(['..']);
              })), Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_1__["untilDestroyed"])(this)).subscribe();
            }
          }, {
            key: "share",
            value: function share() {
              var _this4 = this;

              return this.currentMoment$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (moment) {
                return _this4._share$(moment);
              }), Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_1__["untilDestroyed"])(this)).subscribe();
            }
          }, {
            key: "_share$",
            value: function _share$(moment) {
              return moment.photo$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (photo) {
                return new File([photo], //@ts-expect-error: https://github.com/broofa/mime/issues/255
                "".concat(moment.id, ".").concat(mime_lite__WEBPACK_IMPORTED_MODULE_2___default.a.getExtension(moment.mimeType)), {
                  type: moment.mimeType,
                  lastModified: moment.timestamp
                });
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (file) {
                return navigator.share({
                  text: JSON.stringify(moment.geolocationPosition),
                  // @ts-expect-error: share API level 2
                  files: [file]
                });
              }));
            }
          }]);

          return PhotoPage;
        }();

        PhotoPage.ɵfac = function PhotoPage_Factory(t) {
          return new (t || PhotoPage)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_moment_moment_repository_service__WEBPACK_IMPORTED_MODULE_7__["MomentRepository"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_languages_languages_service__WEBPACK_IMPORTED_MODULE_11__["LanguagesService"]));
        };

        PhotoPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
          type: PhotoPage,
          selectors: [["app-photo"]],
          decls: 10,
          vars: 2,
          consts: [[1, "ion-no-border"], ["slot", "start"], ["color", "light"], ["slot", "end"], ["slot", "primary", "color", "light", 3, "click"], ["name", "trash-outline", "slot", "icon-only"], ["target", "_blank", "slot", "secondary", "color", "light", 3, "href", "download", 4, "ngrxLet"], ["slot", "secondary", "color", "light", 3, "click", 4, "ngIf"], ["fullscreen", "", 4, "transloco"], ["target", "_blank", "slot", "secondary", "color", "light", 3, "href", "download"], ["name", "download-outline", "slot", "icon-only"], ["slot", "secondary", "color", "light", 3, "click"], ["name", "share-social-outline", "slot", "icon-only"], ["fullscreen", ""], [3, "options", "ionSlideDidChange", 4, "ngrxLet"], [3, "options", "ionSlideDidChange"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["ionImgViewer", "", 3, "src", 4, "ngrxLet"], ["lines", "none"], [4, "ngIf"], ["name", "code-outline", "slot", "start"], ["slot", "end", 3, "text"], ["name", "document-outline", "slot", "start"], ["ionImgViewer", "", 3, "src"], ["frameborder", "0", "loading", "lazy", 3, "src", 4, "ngrxLet"], ["name", "location-outline", "slot", "start"], ["name", "home-outline", "slot", "start"], ["frameborder", "0", "loading", "lazy", 3, "src"]],
          template: function PhotoPage_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-header", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "ion-toolbar");

              _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "ion-buttons", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "ion-back-button", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "ion-buttons", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "ion-button", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PhotoPage_Template_ion_button_click_5_listener() {
                return ctx.remove();
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "ion-icon", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, PhotoPage_ion_button_7_Template, 4, 6, "ion-button", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, PhotoPage_ion_button_8_Template, 2, 0, "ion-button", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, PhotoPage_ion_content_9_Template, 2, 1, "ion-content", 8);
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);

              _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngrxLet", ctx.currentMoment$);

              _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.supportShare);
            }
          },
          directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_12__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_12__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_12__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_12__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_12__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_12__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_12__["IonIcon"], _ngrx_component__WEBPACK_IMPORTED_MODULE_13__["LetDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], _ngneat_transloco__WEBPACK_IMPORTED_MODULE_15__["TranslocoDirective"], _ionic_angular__WEBPACK_IMPORTED_MODULE_12__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_12__["IonSlides"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_12__["IonSlide"], _ionic_angular__WEBPACK_IMPORTED_MODULE_12__["IonList"], _ionic_angular__WEBPACK_IMPORTED_MODULE_12__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_12__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_12__["IonItemGroup"], _ionic_angular__WEBPACK_IMPORTED_MODULE_12__["IonItemDivider"], _shared_copy_clipboard_copy_clipboard_component__WEBPACK_IMPORTED_MODULE_16__["CopyClipboardComponent"], _shared_image_image_component__WEBPACK_IMPORTED_MODULE_17__["ImageComponent"], ngx_ionic_image_viewer__WEBPACK_IMPORTED_MODULE_18__["NgxIonicImageViewerDirective"]],
          pipes: [_ngrx_component__WEBPACK_IMPORTED_MODULE_13__["PushPipe"], _shared_extension_extension_pipe__WEBPACK_IMPORTED_MODULE_19__["ExtensionPipe"], _ngneat_transloco_locale__WEBPACK_IMPORTED_MODULE_20__["TranslocoDatePipe"]],
          styles: ["[_nghost-%COMP%] {\n  --photo-radius: 32px;\n}\n\nion-toolbar[_ngcontent-%COMP%] {\n  position: absolute;\n  --background: #00000025;\n}\n\nion-slides[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\nion-slide[_ngcontent-%COMP%] {\n  flex-direction: column;\n  justify-content: flex-start;\n  height: auto;\n}\n\napp-image[_ngcontent-%COMP%] {\n  height: 100%;\n  max-height: 40vh;\n  min-height: 200px;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  -o-object-position: center;\n     object-position: center;\n  border-radius: 0 0 var(--photo-radius) var(--photo-radius);\n  z-index: 99;\n}\n\nion-list[_ngcontent-%COMP%] {\n  width: 100%;\n  overflow: scroll;\n  margin-top: calc(-1 * var(--photo-radius));\n  padding-top: var(--photo-radius);\n}\n\nion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  white-space: initial;\n}\n\niframe[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Bob3RvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUVBLHVCQUFBO0FBQUY7O0FBR0E7RUFDRSxZQUFBO0FBQUY7O0FBR0E7RUFDRSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsWUFBQTtBQUFGOztBQUdBO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtFQUNBLDBCQUFBO0tBQUEsdUJBQUE7RUFDQSwwREFBQTtFQUNBLFdBQUE7QUFBRjs7QUFHQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLDBDQUFBO0VBQ0EsZ0NBQUE7QUFBRjs7QUFHSTtFQUNFLG9CQUFBO0FBRE47O0FBTUE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtBQUhGIiwiZmlsZSI6InBob3RvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgLS1waG90by1yYWRpdXM6IDMycHg7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuXG4gIC0tYmFja2dyb3VuZDogIzAwMDAwMDI1O1xufVxuXG5pb24tc2xpZGVzIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5pb24tc2xpZGUge1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGhlaWdodDogYXV0bztcbn1cblxuYXBwLWltYWdlIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXgtaGVpZ2h0OiA0MHZoO1xuICBtaW4taGVpZ2h0OiAyMDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBvYmplY3QtcG9zaXRpb246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMCAwIHZhcigtLXBob3RvLXJhZGl1cykgdmFyKC0tcGhvdG8tcmFkaXVzKTtcbiAgei1pbmRleDogOTk7XG59XG5cbmlvbi1saXN0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBzY3JvbGw7XG4gIG1hcmdpbi10b3A6IGNhbGMoLTEgKiB2YXIoLS1waG90by1yYWRpdXMpKTtcbiAgcGFkZGluZy10b3A6IHZhcigtLXBob3RvLXJhZGl1cyk7XG5cbiAgaW9uLWl0ZW0ge1xuICAgIGlvbi1sYWJlbCB7XG4gICAgICB3aGl0ZS1zcGFjZTogaW5pdGlhbDtcbiAgICB9XG4gIH1cbn1cblxuaWZyYW1lIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwcHg7XG59XG4iXX0= */"]
        });
        PhotoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_1__["UntilDestroy"])()], PhotoPage);
        return PhotoPage;
      }();
      /***/

    }
  }]);
})();
//# sourceMappingURL=5-es5.ecee07db5ec03f758d5f.js.map