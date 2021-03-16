(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "Kr/e":
/*!*********************************************************!*\
  !*** ./src/app/features/home/settings/settings.page.ts ***!
  \*********************************************************/
/*! exports provided: SettingsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPage", function() { return SettingsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngneat/until-destroy */ "VfN6");
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../package.json */ "kiQV");
var _package_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../../../package.json */ "kiQV", 1);
/* harmony import */ var _shared_themes_themes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/themes/themes.service */ "+JQf");
/* harmony import */ var _shared_transloco_transloco_root_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/transloco/transloco-root.module */ "AZLn");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_languages_languages_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/languages/languages.service */ "PmnW");
/* harmony import */ var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngneat/transloco */ "QPBi");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ngrx_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/component */ "9A8T");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");












function SettingsPage_ion_header_0_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-header", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "ion-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "ion-buttons", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "ion-back-button");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const t_r2 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](t_r2("settings"));
    }
}
function SettingsPage_ion_list_4_ion_select_5_ion_select_option_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-select-option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const theme_r8 = ctx.$implicit;
        const t_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", theme_r8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", t_r3("theme." + theme_r8), " ");
    }
}
function SettingsPage_ion_list_4_ion_select_5_Template(rf, ctx) {
    if (rf & 1) {
        const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-select", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ionChange", function SettingsPage_ion_list_4_ion_select_5_Template_ion_select_ionChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r10.onChangeTheme($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, SettingsPage_ion_list_4_ion_select_5_ion_select_option_1_Template, 2, 2, "ion-select-option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const theme_r6 = ctx.ngrxLet;
        const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", theme_r6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r4.themes);
    }
}
function SettingsPage_ion_list_4_ion_select_10_ion_select_option_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-select-option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const language_r14 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", language_r14.key);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](language_r14.value);
    }
}
function SettingsPage_ion_list_4_ion_select_10_Template(rf, ctx) {
    if (rf & 1) {
        const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-select", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ionChange", function SettingsPage_ion_list_4_ion_select_10_Template_ion_select_ionChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r15.onChangeLanguage($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, SettingsPage_ion_list_4_ion_select_10_ion_select_option_1_Template, 2, 2, "ion-select-option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "keyvalue");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const language_r12 = ctx.ngrxLet;
        const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", language_r12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 2, ctx_r5.languages));
    }
}
function SettingsPage_ion_list_4_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-list", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "ion-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "ion-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, SettingsPage_ion_list_4_ion_select_5_Template, 2, 2, "ion-select", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "ion-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "ion-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, SettingsPage_ion_list_4_ion_select_10_Template, 3, 4, "ion-select", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "ion-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](12, "ion-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "ion-note", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "ion-item", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](18, "ion-icon", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](21, "ion-icon", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "ion-item", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](23, "ion-icon", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](26, "ion-icon", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const t_r3 = ctx.$implicit;
        const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](t_r3(".theme"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngrxLet", ctx_r1.theme$);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](t_r3("languages"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngrxLet", ctx_r1.language$);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](t_r3("version"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.version);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](t_r3("help"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](t_r3("issueReport"));
    }
}
let SettingsPage = /*@__PURE__*/ (() => {
    let SettingsPage = class SettingsPage {
        constructor(themesService, languagesService) {
            this.themesService = themesService;
            this.languagesService = languagesService;
            this.themes = _shared_themes_themes_service__WEBPACK_IMPORTED_MODULE_3__["ThemesService"].THEMES;
            this.theme$ = this.themesService.theme$;
            this.languages = _shared_transloco_transloco_root_module__WEBPACK_IMPORTED_MODULE_4__["languages"];
            this.language$ = this.languagesService.language$;
            this.version = _package_json__WEBPACK_IMPORTED_MODULE_2__["version"];
        }
        onChangeTheme(event) {
            return this.themesService
                .setTheme$(event.detail.value)
                .pipe(Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_1__["untilDestroyed"])(this))
                .subscribe();
        }
        onChangeLanguage(event) {
            return this.languagesService
                .setLanguage$(event.detail.value)
                .pipe(Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_1__["untilDestroyed"])(this))
                .subscribe();
        }
    };
    SettingsPage.ɵfac = function SettingsPage_Factory(t) { return new (t || SettingsPage)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_themes_themes_service__WEBPACK_IMPORTED_MODULE_3__["ThemesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_languages_languages_service__WEBPACK_IMPORTED_MODULE_6__["LanguagesService"])); };
    SettingsPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: SettingsPage, selectors: [["app-settings"]], decls: 5, vars: 0, consts: [["class", "ion-no-border", 4, "transloco"], [1, "list-container"], ["lines", "none", 4, "transloco"], [1, "ion-no-border"], ["slot", "start"], ["lines", "none"], ["name", "moon-outline", "slot", "start"], [3, "value", "ionChange", 4, "ngrxLet"], ["name", "language-outline", "slot", "start"], ["name", "information-outline", "slot", "start"], ["slot", "end"], ["href", "https://github.com/seanwu1105/ionic-pwa-example/discussions", "target", "_blank"], ["name", "help-outline", "slot", "start"], ["name", "logo-github", "slot", "end"], ["href", "https://github.com/seanwu1105/ionic-pwa-example/issues", "target", "_blank"], ["name", "bug-outline", "slot", "start"], [3, "value", "ionChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function SettingsPage_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, SettingsPage_ion_header_0_Template, 6, 1, "ion-header", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "ion-content");
                _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "ion-card");
                _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, SettingsPage_ion_list_4_Template, 27, 8, "ion-list", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            }
        }, directives: [_ngneat_transloco__WEBPACK_IMPORTED_MODULE_7__["TranslocoDirective"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonCard"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonList"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonLabel"], _ngrx_component__WEBPACK_IMPORTED_MODULE_9__["LetDirective"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonNote"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonSelect"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["SelectValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonSelectOption"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["KeyValuePipe"]], styles: [".list-container[_ngcontent-%COMP%] {\n  max-width: 1000px;\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NldHRpbmdzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtBQUNGIiwiZmlsZSI6InNldHRpbmdzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5saXN0LWNvbnRhaW5lciB7XG4gIG1heC13aWR0aDogMTAwMHB4O1xuICBtYXJnaW46IGF1dG87XG59XG4iXX0= */"] });
    SettingsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_1__["UntilDestroy"])()
    ], SettingsPage);
    return SettingsPage;
})();




/***/ }),

/***/ "T1yT":
/*!*******************************************************************!*\
  !*** ./src/app/features/home/settings/settings-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: SettingsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageRoutingModule", function() { return SettingsPageRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _settings_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings.page */ "Kr/e");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: '',
        component: _settings_page__WEBPACK_IMPORTED_MODULE_1__["SettingsPage"],
    },
];
let SettingsPageRoutingModule = /*@__PURE__*/ (() => {
    class SettingsPageRoutingModule {
    }
    SettingsPageRoutingModule.ɵfac = function SettingsPageRoutingModule_Factory(t) { return new (t || SettingsPageRoutingModule)(); };
    SettingsPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: SettingsPageRoutingModule });
    SettingsPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
    return SettingsPageRoutingModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](SettingsPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();



/***/ }),

/***/ "VJEY":
/*!***********************************************************!*\
  !*** ./src/app/features/home/settings/settings.module.ts ***!
  \***********************************************************/
/*! exports provided: SettingsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageModule", function() { return SettingsPageModule; });
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/shared.module */ "PCNd");
/* harmony import */ var _settings_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings-routing.module */ "T1yT");
/* harmony import */ var _settings_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings.page */ "Kr/e");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let SettingsPageModule = /*@__PURE__*/ (() => {
    class SettingsPageModule {
    }
    SettingsPageModule.ɵfac = function SettingsPageModule_Factory(t) { return new (t || SettingsPageModule)(); };
    SettingsPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: SettingsPageModule });
    SettingsPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"], _settings_routing_module__WEBPACK_IMPORTED_MODULE_1__["SettingsPageRoutingModule"]]] });
    return SettingsPageModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](SettingsPageModule, { declarations: [_settings_page__WEBPACK_IMPORTED_MODULE_2__["SettingsPage"]], imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"], _settings_routing_module__WEBPACK_IMPORTED_MODULE_1__["SettingsPageRoutingModule"]] }); })();



/***/ }),

/***/ "kiQV":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: name, version, author, homepage, scripts, private, dependencies, devDependencies, husky, lint-staged, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"moment\",\"version\":\"0.0.1\",\"author\":\"Sean Wu\",\"homepage\":\"https://github.com/seanwu1105\",\"scripts\":{\"serve\":\"ionic serve\",\"serve.hmr\":\"ionic serve -- --hmr\",\"serve.prod\":\"ionic serve --prod\",\"build\":\"ionic build --prod\",\"build.watch.pwa\":\"ionic build --prod --watch\",\"test\":\"ng test\",\"test.ci\":\"ng test --no-watch --no-progress --browsers=ChromeHeadlessCI\",\"lint\":\"prettier --check . && stylelint \\\"**/*.{css,scss,sass}\\\" && ng lint\",\"e2e\":\"ng e2e\",\"prepare\":\"husky install\"},\"private\":true,\"dependencies\":{\"@angular/common\":\"~11.2.5\",\"@angular/core\":\"~11.2.5\",\"@angular/forms\":\"~11.2.5\",\"@angular/platform-browser\":\"~11.2.5\",\"@angular/platform-browser-dynamic\":\"~11.2.5\",\"@angular/router\":\"~11.2.5\",\"@angular/service-worker\":\"~11.2.5\",\"@ionic-native/core\":\"^5.0.0\",\"@ionic/angular\":\"^5.6.0\",\"@ngneat/transloco\":\"^2.20.1\",\"@ngneat/transloco-locale\":\"^1.4.0\",\"@ngneat/until-destroy\":\"^8.0.4\",\"@ngrx/component\":\"^11.0.1\",\"buffer\":\"^6.0.3\",\"exifreader\":\"^3.14.1\",\"image-blob-reduce\":\"^2.2.2\",\"image-capture\":\"^0.4.0\",\"lodash-es\":\"^4.17.21\",\"mime\":\"^2.5.2\",\"ngx-ionic-image-viewer\":\"^0.7.4\",\"pouchdb-adapter-memory\":\"^7.2.2\",\"process\":\"^0.11.10\",\"rxdb\":\"^9.15.0\",\"rxjs\":\"^6.6.6\",\"stream-browserify\":\"^3.0.0\",\"swiper\":\"^6.5.0\",\"tslib\":\"^2.0.0\",\"zone.js\":\"^0.11.4\"},\"devDependencies\":{\"@angular-devkit/build-angular\":\"^0.1101.0\",\"@angular-eslint/builder\":\"^2.0.0\",\"@angular-eslint/eslint-plugin\":\"^2.0.0\",\"@angular-eslint/eslint-plugin-template\":\"^2.0.0\",\"@angular-eslint/schematics\":\"2.0.1\",\"@angular-eslint/template-parser\":\"^2.0.0\",\"@angular/cli\":\"~11.2.4\",\"@angular/compiler\":\"~11.2.5\",\"@angular/compiler-cli\":\"~11.2.5\",\"@angular/language-service\":\"~11.2.5\",\"@ionic/angular-toolkit\":\"^3.1.0\",\"@types/geojson\":\"^7946.0.7\",\"@types/jasmine\":\"^3.6.6\",\"@types/jasminewd2\":\"~2.0.3\",\"@types/lodash-es\":\"^4.17.4\",\"@types/node\":\"^14.14.34\",\"@types/pouchdb-adapter-memory\":\"^6.1.3\",\"@types/w3c-image-capture\":\"^1.0.2\",\"@typescript-eslint/eslint-plugin\":\"4.16.1\",\"@typescript-eslint/parser\":\"4.16.1\",\"eslint\":\"^7.21.0\",\"eslint-plugin-import\":\"2.22.1\",\"eslint-plugin-jsdoc\":\"32.2.0\",\"eslint-plugin-prefer-arrow\":\"1.2.3\",\"eslint-plugin-rxjs\":\"^3.1.0\",\"husky\":\"^5.1.3\",\"jasmine-core\":\"^3.6.0\",\"jasmine-spec-reporter\":\"^6.0.0\",\"karma\":\"^5.2.0\",\"karma-chrome-launcher\":\"~3.1.0\",\"karma-coverage\":\"^2.0.3\",\"karma-jasmine\":\"^4.0.1\",\"karma-jasmine-html-reporter\":\"^1.5.0\",\"lint-staged\":\"^10.5.4\",\"prettier\":\"^2.2.1\",\"protractor\":\"~7.0.0\",\"stylelint\":\"^13.12.0\",\"stylelint-config-standard\":\"^21.0.0\",\"stylelint-scss\":\"^3.19.0\",\"ts-node\":\"^9.1.1\",\"typescript\":\"~4.1.3\"},\"husky\":{\"hooks\":{\"pre-commit\":\"lint-staged\"}},\"lint-staged\":{\"*.{js,ts,scss,css,html,md,yml,json}\":\"prettier --write\"}}");

/***/ })

}]);
//# sourceMappingURL=4-es2015.38ddc50243770accda13.js.map