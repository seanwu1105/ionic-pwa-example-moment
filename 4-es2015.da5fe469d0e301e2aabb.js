(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "/rh9":
/*!*****************************************************!*\
  !*** ./src/app/features/home/camera/camera.page.ts ***!
  \*****************************************************/
/*! exports provided: CameraPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CameraPage", function() { return CameraPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngneat/until-destroy */ "VfN6");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _utils_rx_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utils/rx-operators */ "KJy6");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_dialogs_dialogs_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/dialogs/dialogs.service */ "O/LV");
/* harmony import */ var _shared_moment_moment_repository_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/moment/moment-repository.service */ "BJdS");
/* harmony import */ var _shared_camera_camera_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/camera/camera.service */ "E+MT");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ngrx_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngrx/component */ "9A8T");
/* harmony import */ var _shared_image_image_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../shared/image/image.component */ "/T4s");
/* harmony import */ var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngneat/transloco */ "QPBi");















const _c0 = ["video"];
function CameraPage_ng_container_2_ion_button_3_Template(rf, ctx) {
    if (rf & 1) {
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CameraPage_ng_container_2_ion_button_3_Template_ion_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r6.reverseCamera(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "ion-icon", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    }
}
function CameraPage_ng_container_2_div_4_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "app-image", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const capturedImageUrl_r8 = ctx.ngrxLet;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", capturedImageUrl_r8);
    }
}
function CameraPage_ng_container_2_Template(rf, ctx) {
    if (rf & 1) {
        const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "ion-button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CameraPage_ng_container_2_Template_ion_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r9.capture(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "ion-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, CameraPage_ng_container_2_ion_button_3_Template, 2, 0, "ion-button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, CameraPage_ng_container_2_div_4_Template, 2, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "video", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngrxLet", ctx_r0.capturedImageUrl$);
    }
}
function CameraPage_ng_template_4_div_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "ion-img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const t_r12 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](t_r12("noCameraFound"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](t_r12("message.noCameraFound"));
    }
}
function CameraPage_ng_template_4_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, CameraPage_ng_template_4_div_1_Template, 6, 2, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    }
}
let CameraPage = /*@__PURE__*/ (() => {
    let CameraPage = class CameraPage {
        constructor(dialogsService, momentRepository, cameraService) {
            this.dialogsService = dialogsService;
            this.momentRepository = momentRepository;
            this.cameraService = cameraService;
            this.videoDevices$ = this.cameraService.videoDevices$;
            this._videoElement$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](undefined);
            this.videoElement$ = this._videoElement$.pipe(Object(_utils_rx_operators__WEBPACK_IMPORTED_MODULE_4__["isNonNullable"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])());
            this.capturedImageUrl$ = this.cameraService.capturedImageUrl$;
            this.startPreview();
        }
        set videoElement(value) {
            if (value)
                this._videoElement$.next(value.nativeElement);
        }
        startPreview() {
            return this.videoElement$
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["concatMap"])(videoElement => this.cameraService.connectPreview$(videoElement)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((err) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () { return this.dialogsService.presentError(err); })), Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_1__["untilDestroyed"])(this))
                .subscribe();
        }
        capture() {
            this.cameraService
                .capture$()
                .pipe(Object(_utils_rx_operators__WEBPACK_IMPORTED_MODULE_4__["concatTap"])(imageBlob => this.momentRepository.add$(imageBlob)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((err) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () { return this.dialogsService.presentError(err); })), Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_1__["untilDestroyed"])(this))
                .subscribe();
        }
        reverseCamera() {
            return this.videoElement$
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["concatMap"])(videoElement => this.cameraService.reverseCamera$(videoElement)), Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_1__["untilDestroyed"])(this))
                .subscribe();
        }
    };
    CameraPage.ɵfac = function CameraPage_Factory(t) { return new (t || CameraPage)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_dialogs_dialogs_service__WEBPACK_IMPORTED_MODULE_6__["DialogsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_moment_moment_repository_service__WEBPACK_IMPORTED_MODULE_7__["MomentRepository"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_camera_camera_service__WEBPACK_IMPORTED_MODULE_8__["CameraService"])); };
    CameraPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: CameraPage, selectors: [["app-camera"]], viewQuery: function CameraPage_Query(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 1);
            }
            if (rf & 2) {
                let _t;
                _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.videoElement = _t.first);
            }
        }, decls: 6, vars: 4, consts: [["routerLink", "..", "routerDirection", "back", "fill", "clear", 1, "dismiss"], ["slot", "icon-only", "name", "close-outline", "color", "light"], [4, "ngIf", "ngIfElse"], ["noCamera", ""], ["fill", "clear", 1, "capture", 3, "click"], ["slot", "icon-only", "name", "radio-button-on-outline", "color", "light"], ["class", "capture", "class", "reverse-camera", "fill", "clear", 3, "click", 4, "ngIf"], ["class", "captured ion-margin", 4, "ngrxLet"], ["playsinline", "", "autoplay", ""], ["video", ""], ["fill", "clear", 1, "reverse-camera", 3, "click"], ["slot", "icon-only", "name", "camera-reverse-outline", "color", "light"], [1, "captured", "ion-margin"], [3, "src"], [1, "no-camera"], ["class", "no-camera-illustration", 4, "transloco"], [1, "no-camera-illustration"], ["src", "./assets/icons/undraw-void.svg"]], template: function CameraPage_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-button", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "ion-icon", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, CameraPage_ng_container_2_Template, 7, 2, "ng-container", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "ngrxPush");
                _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, CameraPage_ng_template_4_Template, 2, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
            }
            if (rf & 2) {
                const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](5);
                let tmp_0_0 = null;
                _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ((tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 2, ctx.videoDevices$)) == null ? null : tmp_0_0.length) !== 0)("ngIfElse", _r1);
            }
        }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["RouterLinkDelegate"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterLink"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _ngrx_component__WEBPACK_IMPORTED_MODULE_12__["LetDirective"], _shared_image_image_component__WEBPACK_IMPORTED_MODULE_13__["ImageComponent"], _ngneat_transloco__WEBPACK_IMPORTED_MODULE_14__["TranslocoDirective"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonImg"]], pipes: [_ngrx_component__WEBPACK_IMPORTED_MODULE_12__["PushPipe"]], styles: ["[_nghost-%COMP%] {\n  display: contents;\n  position: relative;\n}\n\nvideo[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  -o-object-position: center;\n     object-position: center;\n}\n\nion-button.dismiss[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  z-index: 1;\n  width: 48px;\n  height: 48px;\n  --background: #0002;\n  --border-radius: 50%;\n  --padding-end: 0;\n  --padding-start: 0;\n}\n\nion-button.capture[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  left: 50%;\n  transform: translate(-50%);\n  z-index: 1;\n  height: 72px;\n  width: 72px;\n  margin: 0 0 var(--ion-margin, 16px);\n  --border-radius: 50%;\n  --padding-end: 0;\n  --padding-start: 0;\n  --background: #0006;\n}\n\nion-button.capture[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 64px;\n}\n\nion-button.reverse-camera[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 16px;\n  left: 16px;\n  z-index: 1;\n  height: 48px;\n  width: 48px;\n  --border-radius: 50%;\n  --padding-end: 0;\n  --padding-start: 0;\n  --background: #0006;\n}\n\n.captured[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 16px;\n  right: 16px;\n  overflow: hidden;\n  border-radius: 4px;\n  border: 1px solid var(--ion-color-light-shade);\n}\n\n.captured[_ngcontent-%COMP%]   app-image[_ngcontent-%COMP%] {\n  z-index: 1;\n  width: 60px;\n  height: 60px;\n}\n\n.no-camera[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background: var(--ion-color-light-shade);\n}\n\n.no-camera-illustration[_ngcontent-%COMP%] {\n  width: 70%;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  text-align: center;\n}\n\n.no-camera-illustration[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%] {\n  margin: auto;\n  max-width: 400px;\n}\n\n.no-camera-illustration[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  white-space: pre-line;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2NhbWVyYS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSwwQkFBQTtLQUFBLHVCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFFQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUFGOztBQUdBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLDBCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUNBQUE7RUFFQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQURGOztBQUdFO0VBQ0UsZUFBQTtBQURKOztBQUtBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUVBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBSEY7O0FBTUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLDhDQUFBO0FBSEY7O0FBS0U7RUFDRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFISjs7QUFPQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esd0NBQUE7QUFKRjs7QUFPQTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQkFBQTtBQUpGOztBQU1FO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0FBSko7O0FBT0U7RUFDRSxxQkFBQTtBQUxKIiwiZmlsZSI6ImNhbWVyYS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGNvbnRlbnRzO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbnZpZGVvIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIG9iamVjdC1wb3NpdGlvbjogY2VudGVyO1xufVxuXG5pb24tYnV0dG9uLmRpc21pc3Mge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB6LWluZGV4OiAxO1xuICB3aWR0aDogNDhweDtcbiAgaGVpZ2h0OiA0OHB4O1xuXG4gIC0tYmFja2dyb3VuZDogIzAwMDI7XG4gIC0tYm9yZGVyLXJhZGl1czogNTAlO1xuICAtLXBhZGRpbmctZW5kOiAwO1xuICAtLXBhZGRpbmctc3RhcnQ6IDA7XG59XG5cbmlvbi1idXR0b24uY2FwdHVyZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUpO1xuICB6LWluZGV4OiAxO1xuICBoZWlnaHQ6IDcycHg7XG4gIHdpZHRoOiA3MnB4O1xuICBtYXJnaW46IDAgMCB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTtcblxuICAtLWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgLS1wYWRkaW5nLWVuZDogMDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAtLWJhY2tncm91bmQ6ICMwMDA2O1xuXG4gIGlvbi1pY29uIHtcbiAgICBmb250LXNpemU6IDY0cHg7XG4gIH1cbn1cblxuaW9uLWJ1dHRvbi5yZXZlcnNlLWNhbWVyYSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAxNnB4O1xuICBsZWZ0OiAxNnB4O1xuICB6LWluZGV4OiAxO1xuICBoZWlnaHQ6IDQ4cHg7XG4gIHdpZHRoOiA0OHB4O1xuXG4gIC0tYm9yZGVyLXJhZGl1czogNTAlO1xuICAtLXBhZGRpbmctZW5kOiAwO1xuICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gIC0tYmFja2dyb3VuZDogIzAwMDY7XG59XG5cbi5jYXB0dXJlZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAxNnB4O1xuICByaWdodDogMTZweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUpO1xuXG4gIGFwcC1pbWFnZSB7XG4gICAgei1pbmRleDogMTtcbiAgICB3aWR0aDogNjBweDtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gIH1cbn1cblxuLm5vLWNhbWVyYSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZSk7XG59XG5cbi5uby1jYW1lcmEtaWxsdXN0cmF0aW9uIHtcbiAgd2lkdGg6IDcwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gIGlvbi1pbWcge1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xuICB9XG5cbiAgcCB7XG4gICAgd2hpdGUtc3BhY2U6IHByZS1saW5lO1xuICB9XG59XG4iXX0= */"] });
    CameraPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_1__["UntilDestroy"])()
    ], CameraPage);
    return CameraPage;
})();




/***/ }),

/***/ "E+MT":
/*!*************************************************!*\
  !*** ./src/app/shared/camera/camera.service.ts ***!
  \*************************************************/
/*! exports provided: CameraService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CameraService", function() { return CameraService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _utils_rx_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/rx-operators */ "KJy6");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





let CameraService = /*@__PURE__*/ (() => {
    class CameraService {
        constructor() {
            this.videoDevices$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["defer"])(() => navigator.mediaDevices.enumerateDevices()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(devices => devices.filter(d => d.kind === 'videoinput')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["shareReplay"])({ bufferSize: 1, refCount: true }));
            this._mediaStream$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"](1);
            this.t = this._mediaStream$
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(v => console.log('next', v)))
                .subscribe();
            this.mediaStream$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["defer"])(() => getEnvironmentCamera()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(v => console.log('init', v)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(mediaStream => this._mediaStream$.next(mediaStream)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["concatMapTo"])(this._mediaStream$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["shareReplay"])({ bufferSize: 1, refCount: true }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(v => console.log('here', v)), Object(_utils_rx_operators__WEBPACK_IMPORTED_MODULE_3__["isNonNullable"])(), stopPreviousMediaStream(), Object(_utils_rx_operators__WEBPACK_IMPORTED_MODULE_3__["finalizeLast"])(mediaStream => {
                if (mediaStream)
                    stopMediaStream(mediaStream);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["shareReplay"])({ bufferSize: 1, refCount: true }));
            this.imageCapture$ = this.mediaStream$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(mediaStream => mediaStream.getVideoTracks()[0]), Object(_utils_rx_operators__WEBPACK_IMPORTED_MODULE_3__["isNonNullable"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(track => new ImageCapture(track)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["shareReplay"])({ bufferSize: 1, refCount: true }));
            this._capturedImageUrl$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](undefined);
            this.capturedImageUrl$ = this._capturedImageUrl$.pipe(Object(_utils_rx_operators__WEBPACK_IMPORTED_MODULE_3__["isNonNullable"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])(), revokePreviousImageUrl());
        }
        connectPreview$(videoElement) {
            return this.mediaStream$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(v => console.log('preview', v)), 
            // tap(mediaStream => (videoElement.srcObject = mediaStream)),
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mapTo"])(videoElement));
        }
        capture$() {
            return this.imageCapture$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(imageCapture => imageCapture.takePhoto()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(imageBlob => {
                this._capturedImageUrl$.next(URL.createObjectURL(imageBlob));
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((err) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (err instanceof DOMException &&
                    (err.name === 'InvalidStateError' ||
                        err.name === 'UnknownError' ||
                        err.name === 'OperationError')) {
                    return undefined;
                }
                throw err;
            })), Object(_utils_rx_operators__WEBPACK_IMPORTED_MODULE_3__["isNonNullable"])());
        }
        reverseCamera$(videoElement) {
            return this.mediaStream$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(mediaStream => mediaStream.getVideoTracks()[0]), Object(_utils_rx_operators__WEBPACK_IMPORTED_MODULE_3__["isNonNullable"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(videoTrack => videoTrack.getConstraints().facingMode), Object(_utils_rx_operators__WEBPACK_IMPORTED_MODULE_3__["isNonNullable"])(), 
            // tap(() => (videoElement.srcObject = null)),
            Object(_utils_rx_operators__WEBPACK_IMPORTED_MODULE_3__["concatTap"])(facingMode => Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["iif"])(() => facingMode === 'environment', Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["defer"])(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                console.log('b', facingMode);
                this._mediaStream$.next(yield getUserCamera());
                console.log('a', facingMode);
            })), Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["defer"])(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                console.log('b', facingMode);
                this._mediaStream$.next(yield getEnvironmentCamera());
                console.log('a', facingMode);
            })))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(() => console.log('afterPushNext', videoElement)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((err) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const e = err;
                console.error(e.name, e);
            })));
        }
    }
    CameraService.ɵfac = function CameraService_Factory(t) { return new (t || CameraService)(); };
    CameraService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: CameraService, factory: CameraService.ɵfac, providedIn: 'root' });
    return CameraService;
})();
function revokePreviousImageUrl() {
    return (source$) => source$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(undefined), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["pairwise"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(([previous]) => {
        if (previous)
            URL.revokeObjectURL(previous);
    }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["concatMapTo"])(source$));
}
function stopPreviousMediaStream() {
    return (source$) => source$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(undefined), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["pairwise"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(([previous]) => {
        if (previous)
            stopMediaStream(previous);
    }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["concatMapTo"])(source$));
}
function stopMediaStream(mediaStream) {
    mediaStream.getVideoTracks().forEach(t => t.stop());
    return mediaStream;
}
function getEnvironmentCamera() {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
        return navigator.mediaDevices.getUserMedia({
            video: { facingMode: 'environment' },
        });
    });
}
function getUserCamera() {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
        return navigator.mediaDevices.getUserMedia({
            video: { facingMode: 'user' },
        });
    });
}



/***/ }),

/***/ "O/LV":
/*!***************************************************!*\
  !*** ./src/app/shared/dialogs/dialogs.service.ts ***!
  \***************************************************/
/*! exports provided: DialogsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogsService", function() { return DialogsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");



let DialogsService = /*@__PURE__*/ (() => {
    class DialogsService {
        constructor(alertController) {
            this.alertController = alertController;
        }
        presentError(error) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                // eslint-disable-next-line no-console
                console.error(error);
                const alert = yield this.alertController.create({
                    header: error instanceof Error ? error.name : 'Unknown Error',
                    message: error instanceof Error ? error.message : JSON.stringify(error),
                    buttons: [{ text: 'ok' }],
                });
                yield alert.present();
            });
        }
    }
    DialogsService.ɵfac = function DialogsService_Factory(t) { return new (t || DialogsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"])); };
    DialogsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: DialogsService, factory: DialogsService.ɵfac, providedIn: 'root' });
    return DialogsService;
})();



/***/ }),

/***/ "QDOj":
/*!*******************************************************!*\
  !*** ./src/app/features/home/camera/camera.module.ts ***!
  \*******************************************************/
/*! exports provided: CameraPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CameraPageModule", function() { return CameraPageModule; });
/* harmony import */ var ngx_ionic_image_viewer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-ionic-image-viewer */ "6g0+");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/shared.module */ "PCNd");
/* harmony import */ var _camera_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./camera-routing.module */ "nnWX");
/* harmony import */ var _camera_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./camera.page */ "/rh9");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





let CameraPageModule = /*@__PURE__*/ (() => {
    class CameraPageModule {
    }
    CameraPageModule.ɵfac = function CameraPageModule_Factory(t) { return new (t || CameraPageModule)(); };
    CameraPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: CameraPageModule });
    CameraPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], _camera_routing_module__WEBPACK_IMPORTED_MODULE_2__["CameraPageRoutingModule"], ngx_ionic_image_viewer__WEBPACK_IMPORTED_MODULE_0__["NgxIonicImageViewerModule"]]] });
    return CameraPageModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](CameraPageModule, { declarations: [_camera_page__WEBPACK_IMPORTED_MODULE_3__["CameraPage"]], imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], _camera_routing_module__WEBPACK_IMPORTED_MODULE_2__["CameraPageRoutingModule"], ngx_ionic_image_viewer__WEBPACK_IMPORTED_MODULE_0__["NgxIonicImageViewerModule"]] }); })();



/***/ }),

/***/ "nnWX":
/*!***************************************************************!*\
  !*** ./src/app/features/home/camera/camera-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: CameraPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CameraPageRoutingModule", function() { return CameraPageRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _camera_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./camera.page */ "/rh9");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: '',
        component: _camera_page__WEBPACK_IMPORTED_MODULE_1__["CameraPage"],
    },
];
let CameraPageRoutingModule = /*@__PURE__*/ (() => {
    class CameraPageRoutingModule {
    }
    CameraPageRoutingModule.ɵfac = function CameraPageRoutingModule_Factory(t) { return new (t || CameraPageRoutingModule)(); };
    CameraPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: CameraPageRoutingModule });
    CameraPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
    return CameraPageRoutingModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](CameraPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();



/***/ })

}]);
//# sourceMappingURL=4-es2015.da5fe469d0e301e2aabb.js.map