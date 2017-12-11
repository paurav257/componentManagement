webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: "<router-outlet></router-outlet>",
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_test_test_component__ = __webpack_require__("../../../../../src/app/components/test/test.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_test_service_client__ = __webpack_require__("../../../../../src/app/services/test.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_user_login_login_component__ = __webpack_require__("../../../../../src/app/components/user/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_user_register_register_component__ = __webpack_require__("../../../../../src/app/components/user/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_auth_guard_service__ = __webpack_require__("../../../../../src/app/services/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_shared_service__ = __webpack_require__("../../../../../src/app/services/shared.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_module_module_new_module_new_component__ = __webpack_require__("../../../../../src/app/components/module/module-new/module-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_module_module_edit_module_edit_component__ = __webpack_require__("../../../../../src/app/components/module/module-edit/module-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_section_section_new_section_new_component__ = __webpack_require__("../../../../../src/app/components/section/section-new/section-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_section_section_edit_section_edit_component__ = __webpack_require__("../../../../../src/app/components/section/section-edit/section-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_module_service_client__ = __webpack_require__("../../../../../src/app/services/module.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_section_service_client__ = __webpack_require__("../../../../../src/app/services/section.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_component_component_new_component_new_component__ = __webpack_require__("../../../../../src/app/components/component/component-new/component-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_component_component_edit_component_edit_component__ = __webpack_require__("../../../../../src/app/components/component/component-edit/component-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_ngx_quill_editor__ = __webpack_require__("../../../../ngx-quill-editor/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__services_component_service_client__ = __webpack_require__("../../../../../src/app/services/component.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_component_component_view_component_view_component__ = __webpack_require__("../../../../../src/app/components/component/component-view/component-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_widget_widget_choose_widget_choose_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-choose/widget-choose.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_widget_widget_edit_widget_edit_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_widget_widget_edit_widget_heading_widget_heading_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-heading/widget-heading.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_widget_widget_edit_widget_html_widget_html_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-html/widget-html.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__components_widget_widget_edit_widget_youtube_widget_youtube_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__components_widget_widget_edit_widget_text_widget_text_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-text/widget-text.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__directives_sortable_directive__ = __webpack_require__("../../../../../src/app/directives/sortable.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__directives_xsortable_directive__ = __webpack_require__("../../../../../src/app/directives/xsortable.directive.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


































var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        // Declare components here
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_3__components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_4__components_test_test_component__["a" /* TestComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_user_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_user_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_module_module_new_module_new_component__["a" /* ModuleNewComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_module_module_edit_module_edit_component__["a" /* ModuleEditComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_section_section_new_section_new_component__["a" /* SectionNewComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_section_section_edit_section_edit_component__["a" /* SectionEditComponent */],
            __WEBPACK_IMPORTED_MODULE_21__components_component_component_new_component_new_component__["a" /* ComponentNewComponent */],
            __WEBPACK_IMPORTED_MODULE_22__components_component_component_edit_component_edit_component__["a" /* ComponentEditComponent */],
            __WEBPACK_IMPORTED_MODULE_25__components_component_component_view_component_view_component__["a" /* ComponentViewComponent */],
            __WEBPACK_IMPORTED_MODULE_26__components_widget_widget_choose_widget_choose_component__["a" /* WidgetChooseComponent */],
            __WEBPACK_IMPORTED_MODULE_27__components_widget_widget_edit_widget_edit_component__["a" /* WidgetEditComponent */],
            __WEBPACK_IMPORTED_MODULE_28__components_widget_widget_edit_widget_heading_widget_heading_component__["a" /* WidgetHeadingComponent */],
            __WEBPACK_IMPORTED_MODULE_29__components_widget_widget_edit_widget_html_widget_html_component__["a" /* WidgetHtmlComponent */],
            __WEBPACK_IMPORTED_MODULE_30__components_widget_widget_edit_widget_youtube_widget_youtube_component__["a" /* WidgetYoutubeComponent */],
            __WEBPACK_IMPORTED_MODULE_31__components_widget_widget_edit_widget_text_widget_text_component__["a" /* WidgetTextComponent */],
            __WEBPACK_IMPORTED_MODULE_32__directives_sortable_directive__["a" /* SortableDirective */],
            __WEBPACK_IMPORTED_MODULE_33__directives_xsortable_directive__["a" /* xSortableDirective */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__app_routing__["a" /* Routing */],
            __WEBPACK_IMPORTED_MODULE_23_ngx_quill_editor__["a" /* QuillEditorModule */]
        ],
        // Client Side services here
        providers: [__WEBPACK_IMPORTED_MODULE_8__services_test_service_client__["a" /* TestService */], __WEBPACK_IMPORTED_MODULE_11__services_auth_guard_service__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_12__services_shared_service__["a" /* SharedService */], __WEBPACK_IMPORTED_MODULE_13__services_user_service_client__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_18__services_module_service_client__["a" /* ModuleService */], __WEBPACK_IMPORTED_MODULE_19__services_section_service_client__["a" /* SectionService */], __WEBPACK_IMPORTED_MODULE_20__services_widget_service_client__["a" /* WidgetService */], __WEBPACK_IMPORTED_MODULE_24__services_component_service_client__["a" /* ComponentService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_test_test_component__ = __webpack_require__("../../../../../src/app/components/test/test.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_user_login_login_component__ = __webpack_require__("../../../../../src/app/components/user/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_user_register_register_component__ = __webpack_require__("../../../../../src/app/components/user/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_module_module_new_module_new_component__ = __webpack_require__("../../../../../src/app/components/module/module-new/module-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_module_module_edit_module_edit_component__ = __webpack_require__("../../../../../src/app/components/module/module-edit/module-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_section_section_new_section_new_component__ = __webpack_require__("../../../../../src/app/components/section/section-new/section-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_component_component_new_component_new_component__ = __webpack_require__("../../../../../src/app/components/component/component-new/component-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_component_component_edit_component_edit_component__ = __webpack_require__("../../../../../src/app/components/component/component-edit/component-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_component_component_view_component_view_component__ = __webpack_require__("../../../../../src/app/components/component/component-view/component-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_widget_widget_choose_widget_choose_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-choose/widget-choose.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_widget_widget_edit_widget_edit_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_widget_widget_edit_widget_heading_widget_heading_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-heading/widget-heading.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_widget_widget_edit_widget_youtube_widget_youtube_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_widget_widget_edit_widget_html_widget_html_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-html/widget-html.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_widget_widget_edit_widget_text_widget_text_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-text/widget-text.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_auth_guard_service__ = __webpack_require__("../../../../../src/app/services/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_section_section_edit_section_edit_component__ = __webpack_require__("../../../../../src/app/components/section/section-edit/section-edit.component.ts");



















var APP_ROUTES = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__components_home_home_component__["a" /* HomeComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_17__services_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'test', component: __WEBPACK_IMPORTED_MODULE_2__components_test_test_component__["a" /* TestComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_3__components_user_login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_4__components_user_register_register_component__["a" /* RegisterComponent */] },
    { path: 'component/new', component: __WEBPACK_IMPORTED_MODULE_8__components_component_component_new_component_new_component__["a" /* ComponentNewComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_17__services_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'component/:cid', component: __WEBPACK_IMPORTED_MODULE_10__components_component_component_view_component_view_component__["a" /* ComponentViewComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_17__services_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'component/:cid/edit', component: __WEBPACK_IMPORTED_MODULE_9__components_component_component_edit_component_edit_component__["a" /* ComponentEditComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_17__services_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'component/:cid/module/new', component: __WEBPACK_IMPORTED_MODULE_5__components_module_module_new_module_new_component__["a" /* ModuleNewComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_17__services_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'component/:cid/module/:mid', component: __WEBPACK_IMPORTED_MODULE_6__components_module_module_edit_module_edit_component__["a" /* ModuleEditComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_17__services_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'component/:cid/module/:mid/section/new', component: __WEBPACK_IMPORTED_MODULE_7__components_section_section_new_section_new_component__["a" /* SectionNewComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_17__services_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'component/:cid/module/:mid/section/:sid', component: __WEBPACK_IMPORTED_MODULE_18__components_section_section_edit_section_edit_component__["a" /* SectionEditComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_17__services_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'component/:cid/module/:mid/section/:sid/widget/new', component: __WEBPACK_IMPORTED_MODULE_11__components_widget_widget_choose_widget_choose_component__["a" /* WidgetChooseComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_17__services_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'component/:cid/module/:mid/section/:sid/widget/:wid', component: __WEBPACK_IMPORTED_MODULE_12__components_widget_widget_edit_widget_edit_component__["a" /* WidgetEditComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_17__services_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'component/:cid/module/:mid/section/:sid/widget/new/heading', component: __WEBPACK_IMPORTED_MODULE_13__components_widget_widget_edit_widget_heading_widget_heading_component__["a" /* WidgetHeadingComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_17__services_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'component/:cid/module/:mid/section/:sid/widget/new/youtube', component: __WEBPACK_IMPORTED_MODULE_14__components_widget_widget_edit_widget_youtube_widget_youtube_component__["a" /* WidgetYoutubeComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_17__services_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'component/:cid/module/:mid/section/:sid/widget/new/html', component: __WEBPACK_IMPORTED_MODULE_15__components_widget_widget_edit_widget_html_widget_html_component__["a" /* WidgetHtmlComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_17__services_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'component/:cid/module/:mid/section/:sid/widget/new/text', component: __WEBPACK_IMPORTED_MODULE_16__components_widget_widget_edit_widget_text_widget_text_component__["a" /* WidgetTextComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_17__services_auth_guard_service__["a" /* AuthGuard */]] },
];
// Export the routes as module providers
var Routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(APP_ROUTES);
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/components/component/component-edit/component-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "::ng-deep body {\n  padding-top: 70px;\n  padding-bottom: 70px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/component/component-edit/component-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse navbar-fixed-top\">\n  <div class=\"container-fluid\">\n      <!--tick mark-->\n      <div class=\"navbar-brand pull-right right-margin-fix\">\n        <a (click)=\"updateComponent()\"\n           class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-ok-sign\"></span>\n        </a>\n      </div>\n      <!--tick mark-->\n      <div class=\"navbar-brand pull-left left-margin-fix\">\n        <a [routerLink]=\"['/']\"\n           class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-chevron-left\"></span>\n        </a>\n      </div>\n      <!--heading on the nav bar-->\n      <p class=\"navbar-header pull-left\">\n        <a class=\"navbar-brand \">\n          <b>Edit Components</b>\n        </a>\n      </p>\n    </div>\n</nav>\n\n<div class=\"container-fluid \">\n  <form>\n    <div class=\"form-group\">\n      <label for=\"componentName\">\n        Name\n      </label>\n      <input [(ngModel)]=\"component['name']\"\n             name=\"componentName\"\n             required\n             type=\"text\"\n             class=\"form-control mr-5\"\n             id=\"componentName\"\n             placeholder=\"Component Name\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"componentDesc\">\n        Description\n      </label>\n      <textarea [(ngModel)]=\"component['description']\"\n                name=\"componentDesc\"\n                required\n                rows=\"5\"\n                class=\"form-control mr-5\"\n                id=\"componentDesc\"\n                placeholder=\"Component Description\"></textarea>\n    </div>\n    <div class=\"form-group\">\n      <a class=\"btn btn-danger btn-block \"\n         (click)=\"deleteComponent()\">\n        Delete\n      </a>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/component/component-edit/component-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_shared_service__ = __webpack_require__("../../../../../src/app/services/shared.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_component_service_client__ = __webpack_require__("../../../../../src/app/services/component.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ComponentEditComponent = (function () {
    function ComponentEditComponent(router, route, sharedService, componentService) {
        this.router = router;
        this.route = route;
        this.sharedService = sharedService;
        this.componentService = componentService;
        this.component = {};
    }
    ComponentEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.currentUser = _this.sharedService.user;
            _this.componentId = params['cid'];
            _this.componentService.findComponentById(_this.componentId)
                .subscribe(function (component) {
                _this.component = component;
            });
        });
    };
    ComponentEditComponent.prototype.updateComponent = function () {
        var _this = this;
        this.componentService.updateComponent(this.componentId, this.component)
            .subscribe(function (component) {
            _this.component = component;
            _this.router.navigate(['/']);
        });
    };
    ComponentEditComponent.prototype.deleteComponent = function () {
        var _this = this;
        this.componentService.deleteComponent(this.componentId)
            .subscribe(function (data) {
            if (data === 200) {
                _this.router.navigate(['/']);
            }
        });
    };
    return ComponentEditComponent;
}());
ComponentEditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-component-edit',
        template: __webpack_require__("../../../../../src/app/components/component/component-edit/component-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/component/component-edit/component-edit.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_shared_service__["a" /* SharedService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_component_service_client__["a" /* ComponentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_component_service_client__["a" /* ComponentService */]) === "function" && _d || Object])
], ComponentEditComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=component-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/component/component-new/component-new.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "::ng-deep body {\n  padding-top: 70px;\n  padding-bottom: 70px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/component/component-new/component-new.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse navbar-fixed-top\">\n  <div class=\"container-fluid\">\n      <!--tick mark-->\n      <div class=\"navbar-brand pull-right right-margin-fix\">\n        <a (click)=\"createComponent()\"\n           class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-ok-sign\"></span>\n        </a>\n      </div>\n      <!--tick mark-->\n      <div class=\"navbar-brand pull-left left-margin-fix\">\n        <a [routerLink]=\"['/']\"\n           class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-chevron-left\"></span>\n        </a>\n      </div>\n      <!--heading on the nav bar-->\n      <p class=\"navbar-header pull-left\">\n        <a class=\"navbar-brand \">\n          <b>New Components</b>\n        </a>\n      </p>\n    </div>\n</nav>\n\n<div class=\"container-fluid \">\n  <form #f=\"ngForm\">\n    <div class=\"form-group\">\n      <label for=\"componentName\">\n        Name\n      </label>\n      <input ngModel=\"\"\n             name=\"componentName\"\n             required\n             type=\"text\"\n             class=\"form-control mr-5\"\n             id=\"componentName\"\n             placeholder=\"Component Name\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"componentDesc\">\n        Description\n      </label>\n      <textarea ngModel=\"\"\n                name=\"componentDesc\"\n                required\n                rows=\"5\"\n                class=\"form-control mr-5\"\n                id=\"componentDesc\"\n                placeholder=\"Component Description\"></textarea>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/component/component-new/component-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentNewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_shared_service__ = __webpack_require__("../../../../../src/app/services/shared.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_component_service_client__ = __webpack_require__("../../../../../src/app/services/component.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ComponentNewComponent = (function () {
    function ComponentNewComponent(router, route, sharedService, componentService) {
        this.router = router;
        this.route = route;
        this.sharedService = sharedService;
        this.componentService = componentService;
        this.component = {};
    }
    ComponentNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            console.log(_this.sharedService.user);
            _this.currentUser = _this.sharedService.user;
        });
    };
    ComponentNewComponent.prototype.createComponent = function () {
        var _this = this;
        this.component['name'] = this.newComponentForm.value.componentName;
        this.component['description'] = this.newComponentForm.value.componentDesc;
        this.componentService.createComponent(this.component)
            .subscribe(function (component) {
            _this.component = component;
            _this.router.navigate(['/']);
        });
    };
    return ComponentNewComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* NgForm */]) === "function" && _a || Object)
], ComponentNewComponent.prototype, "newComponentForm", void 0);
ComponentNewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-component-new',
        template: __webpack_require__("../../../../../src/app/components/component/component-new/component-new.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/component/component-new/component-new.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_shared_service__["a" /* SharedService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__services_component_service_client__["a" /* ComponentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_component_service_client__["a" /* ComponentService */]) === "function" && _e || Object])
], ComponentNewComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=component-new.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/component/component-view/component-view.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "::ng-deep body {\n  padding-top: 70px;\n  padding-bottom: 70px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/component/component-view/component-view.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse navbar-fixed-top\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <div class=\"navbar-brand pull-left left-margin-fix\">\n        <a [routerLink]=\"['/']\"\n           class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-chevron-left\"></span>\n        </a>\n      </div>\n      <div class=\"navbar-brand pull-left\">\n        {{component['name']}}\n      </div>\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\"\n              aria-expanded=\"false\" aria-controls=\"navbar\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" href=\"#\">&nbsp;</a>\n    </div>\n    <div id=\"navbar\" class=\"navbar-collapse collapse\">\n\n\n      <ul class=\"nav navbar-nav  navbar-right\">\n        <li *ngIf=\"!currentUser\"><a [routerLink]=\"['login']\">Login</a></li>\n        <li *ngIf=\"currentUser\"><a (click)=\"logout()\">Logout</a></li>\n        <li *ngIf=\"!currentUser\"><a [routerLink]=\"['register']\">Register</a></li>\n      </ul>\n    </div>\n  </div>\n</nav>\n\n<div *ngIf=\"currentUser.admin\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-sm-3 col-md-2 sidebar\">\n        Modules\n          <a [routerLink]=\"['/component',componentId, 'module', 'new']\"\n             class=\"pull-right\">\n            <span class=\"glyphicon glyphicon-plus-sign\"></span>\n          </a>\n          <ul class=\"nav nav-sidebar\" appYSortable (newIndexes)=\"updateModulePosition($event)\">\n            <li *ngFor=\"let module of modules; let i=index\" [ngClass]=\"{'active' : moduleIndex == i}\">\n              <a (click)=\"selectModule(i)\">{{module['name']}}</a>\n              <div class=\"scroll-settings-icons\">\n                <a [routerLink]=\"['/component',componentId, 'module', module['_id']]\">\n                  <span class=\"glyphicon glyphicon-cog\"></span>\n                </a>\n                <span class=\"glyphicon glyphicon-menu-hamburger\"></span>\n              </div>\n            </li>\n          </ul>\n      </div>\n\n      <div class=\"col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main\">\n        <div class=\"row\">\n          <div class=\"col-sm-12\">\n            <h1>{{module['name']}}</h1>\n            <ul class=\"nav nav-tabs\" appXSortable (newIndexes)=\"updateSectionPosition($event)\">\n              <li *ngFor=\"let section of sections; let i=index\" [ngClass]=\"{'active' : sectionIndex == i}\">\n                <a (click)=\"selectSection(i)\">{{section['name']}}</a>\n                <div class=\"scroll-settings-icons\">\n                  <a [routerLink]=\"['/component',componentId, 'module', module['_id'], 'section', section['_id']]\">\n                    <span class=\"glyphicon glyphicon-cog\"></span>\n                  </a>\n                  <span class=\"glyphicon glyphicon-menu-hamburger\"></span>\n                </div>\n              </li>\n              <li>\n                <a [routerLink]=\"['/component',componentId, 'module', module['_id'], 'section', 'new']\">\n                  <span class=\"glyphicon glyphicon-plus-sign\"></span>\n                </a>\n              </li>\n            </ul>\n            <button class=\"btn btn-primary btn-block\"\n                    [routerLink]=\"['/component', componentId, 'module', moduleId, 'section', sectionId, 'widget', 'new']\">\n              New Widget\n            </button>\n            <ul class=\"list-group\" appYSortable (newIndexes)=\"updateWidgetPosition($event)\">\n              <div *ngFor=\"let widget of widgets\">\n                <div *ngIf=\"widget\">\n                  <div [ngSwitch]=\"widget['type']\">\n\n                    <div *ngSwitchCase=\"'HEADING'\">\n                      <div class=\"row\">\n                        <!--<li class=\"list-group-item\">-->\n                        <div class=\"col-xs-12\">\n                          <div [ngSwitch]=\"widget['size']\">\n                            <div *ngSwitchCase=\"1\">\n                              <h1>{{widget['text']}}</h1>\n                            </div>\n                            <div *ngSwitchCase=\"2\">\n                              <h2>{{widget['text']}}</h2>\n                            </div>\n                            <div *ngSwitchCase=\"3\">\n                              <h3>{{widget['text']}}</h3>\n                            </div>\n                            <div *ngSwitchCase=\"4\">\n                              <h4>{{widget['text']}}</h4>\n                            </div>\n                          </div>\n                          <div class=\"scroll-settings-icons\">\n                            <a\n                              [routerLink]=\"['/component', componentId, 'module', moduleId, 'section', sectionId, 'widget', widget['_id']]\">\n                              <span class=\"glyphicon glyphicon-cog\"></span>\n                            </a>\n                            <span class=\"glyphicon glyphicon-menu-hamburger\"></span>\n                          </div>\n                        </div>\n                        <!--</li>-->\n                      </div>\n                    </div>\n\n                    <div *ngSwitchCase=\"'YOUTUBE'\">\n                      <div class=\"row\">\n                        <!--<li class=\"list-group-item\">-->\n                        <div class=\"col-xs-12\" class=\"youtube-widget\">\n                          <iframe [width]=\"widget['width']\"\n                                  height=\"300\"\n                                  [src]=\"safeUrl(widget['url'])\">\n                          </iframe>\n                          <div class=\"scroll-settings-icons\">\n                            <a\n                              [routerLink]=\"['/component', componentId, 'module', moduleId, 'section', sectionId, 'widget', widget['_id']]\">\n                              <span class=\"glyphicon glyphicon-cog\"></span>\n                            </a>\n                            <span class=\"glyphicon glyphicon-menu-hamburger\"></span>\n                          </div>\n                        </div>\n                        <!--</li>-->\n                      </div>\n                    </div>\n\n                    <!--<div *ngSwitchCase=\"'IMAGE'\">-->\n                    <!--<div class=\"row\">-->\n                    <!--&lt;!&ndash;<li class=\"list-group-item\">&ndash;&gt;-->\n                    <!--<div class=\"col-xs-12\">-->\n                    <!--<a [routerLink]=\"['/user', userId, 'website', websiteId, 'page', pageId, 'widget']\" class=\"thumbnail\">-->\n                    <!--<img [style.width]=\"widget['width']\"-->\n                    <!--[src]=\"safeUrl(widget['url'])\">-->\n                    <!--</a>-->\n                    <!--<div class=\"scroll-settings-icons\">-->\n                    <!--<a [routerLink]=\"['/component', componentId, 'module', moduleId, 'section', sectionId, 'widget', widget['_id']]\">-->\n                    <!--<span class=\"glyphicon glyphicon-cog\"></span>-->\n                    <!--</a>-->\n                    <!--<span class=\"glyphicon glyphicon-menu-hamburger\"></span>-->\n                    <!--</div>-->\n                    <!--</div>-->\n                    <!--&lt;!&ndash;</li>&ndash;&gt;-->\n                    <!--</div>-->\n                    <!--</div>-->\n\n                    <div *ngSwitchCase=\"'HTML'\">\n                      <div class=\"row\">\n                        <!--<li class=\"list-group-item\">-->\n                        <div class=\"col-xs-12\">\n                          <div [innerHTML]=\"widget['text']\">\n                          </div>\n                          <div class=\"scroll-settings-icons\">\n                            <a\n                              [routerLink]=\"['/component', componentId, 'module', moduleId, 'section', sectionId, 'widget', widget['_id']]\">\n                              <span class=\"glyphicon glyphicon-cog\"></span>\n                            </a>\n                            <span class=\"glyphicon glyphicon-menu-hamburger\"></span>\n                          </div>\n                        </div>\n                        <!--</li>-->\n                      </div>\n                    </div>\n\n                    <div *ngSwitchCase=\"'TEXT'\">\n                      <div class=\"row\">\n                        <div class=\"col-xs-12\">\n                          <!--<li class=\"list-group-item\">-->\n                          <div *ngIf=\"widget['formatted']\">\n                            <quill-editor [(ngModel)]=\"widget['text']\" name=\"text\"></quill-editor>\n                          </div>\n\n                          <input *ngIf=\"!widget.formatted && (!widget['rows ']|| widget['rows']===1)\"\n                                 placeholder=\"{{widget['placeholder']}}\" class=\"form-control\"/>\n\n                          <textarea *ngIf=\"!widget['formatted'] && (widget['rows'] > 1)\"\n                                    rows=\"{{widget['rows']}}\" placeholder=\"{{widget['placeholder']}}\"\n                                    class=\"form-control\">{{widget['text']}}</textarea>\n                          <div class=\"scroll-settings-icons\">\n                            <a\n                              [routerLink]=\"['/component', componentId, 'module', moduleId, 'section', sectionId, 'widget', widget['_id']]\">\n                              <span class=\"glyphicon glyphicon-cog\"></span>\n                            </a>\n                            <span class=\"glyphicon glyphicon-menu-hamburger\"></span>\n                          </div>\n                          <!--</li>-->\n                        </div>\n                      </div>\n                    </div>\n\n                  </div>\n                </div>\n              </div>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div *ngIf=\"!currentUser.admin\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-sm-3 col-md-2 sidebar\">\n        Modules\n        <ul class=\"nav nav-sidebar\">\n          <li *ngFor=\"let module of modules; let i=index\" [ngClass]=\"{'active' : moduleIndex == i}\">\n            <a (click)=\"selectModule(i)\">{{module['name']}}</a>\n          </li>\n        </ul>\n      </div>\n\n\n      <div class=\"col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main\">\n        <div class=\"row\">\n          <div class=\"col-sm-12\">\n            <h1>{{module['name']}}</h1>\n            <ul class=\"nav nav-tabs\">\n              <li *ngFor=\"let section of sections; let i=index\" [ngClass]=\"{'active' : sectionIndex == i}\">\n                <a (click)=\"selectSection(i)\">{{section['name']}}</a>\n              </li>\n            </ul>\n            <ul class=\"list-group\">\n              <div *ngFor=\"let widget of widgets\">\n                <div *ngIf=\"widget\">\n                  <div [ngSwitch]=\"widget['type']\">\n\n                    <div *ngSwitchCase=\"'HEADING'\">\n                      <div class=\"row\">\n                        <!--<li class=\"list-group-item\">-->\n                        <div class=\"col-xs-12\">\n                          <div [ngSwitch]=\"widget['size']\">\n                            <div *ngSwitchCase=\"1\">\n                              <h1>{{widget['text']}}</h1>\n                            </div>\n                            <div *ngSwitchCase=\"2\">\n                              <h2>{{widget['text']}}</h2>\n                            </div>\n                            <div *ngSwitchCase=\"3\">\n                              <h3>{{widget['text']}}</h3>\n                            </div>\n                            <div *ngSwitchCase=\"4\">\n                              <h4>{{widget['text']}}</h4>\n                            </div>\n                          </div>\n                        </div>\n                        <!--</li>-->\n                      </div>\n                    </div>\n\n                    <div *ngSwitchCase=\"'YOUTUBE'\">\n                      <div class=\"row\">\n                        <!--<li class=\"list-group-item\">-->\n                        <div class=\"col-xs-12\" class=\"youtube-widget\">\n                          <iframe [width]=\"widget['width']\"\n                                  height=\"300\"\n                                  [src]=\"safeUrl(widget['url'])\">\n                          </iframe>\n                        </div>\n                        <!--</li>-->\n                      </div>\n                    </div>\n\n                    <!--<div *ngSwitchCase=\"'IMAGE'\">-->\n                    <!--<div class=\"row\">-->\n                    <!--&lt;!&ndash;<li class=\"list-group-item\">&ndash;&gt;-->\n                    <!--<div class=\"col-xs-12\">-->\n                    <!--<a [routerLink]=\"['/user', userId, 'website', websiteId, 'page', pageId, 'widget']\" class=\"thumbnail\">-->\n                    <!--<img [style.width]=\"widget['width']\"-->\n                    <!--[src]=\"safeUrl(widget['url'])\">-->\n                    <!--</a>-->\n                    <!--<div class=\"scroll-settings-icons\">-->\n                    <!--<a [routerLink]=\"['/component', componentId, 'module', moduleId, 'section', sectionId, 'widget', widget['_id']]\">-->\n                    <!--<span class=\"glyphicon glyphicon-cog\"></span>-->\n                    <!--</a>-->\n                    <!--<span class=\"glyphicon glyphicon-menu-hamburger\"></span>-->\n                    <!--</div>-->\n                    <!--</div>-->\n                    <!--&lt;!&ndash;</li>&ndash;&gt;-->\n                    <!--</div>-->\n                    <!--</div>-->\n\n                    <div *ngSwitchCase=\"'HTML'\">\n                      <div class=\"row\">\n                        <!--<li class=\"list-group-item\">-->\n                        <div class=\"col-xs-12\">\n                          <div [innerHTML]=\"widget['text']\">\n                          </div>\n                        </div>\n                        <!--</li>-->\n                      </div>\n                    </div>\n\n                    <div *ngSwitchCase=\"'TEXT'\">\n                      <div class=\"row\">\n                        <div class=\"col-xs-12\">\n                          <!--<li class=\"list-group-item\">-->\n                          <div *ngIf=\"widget['formatted']\">\n                            <quill-editor [(ngModel)]=\"widget['text']\" name=\"text\"></quill-editor>\n                          </div>\n\n                          <input *ngIf=\"!widget.formatted && (!widget['rows ']|| widget['rows']===1)\"\n                                 placeholder=\"{{widget['placeholder']}}\" class=\"form-control\"/>\n\n                          <textarea *ngIf=\"!widget['formatted'] && (widget['rows'] > 1)\"\n                                    rows=\"{{widget['rows']}}\" placeholder=\"{{widget['placeholder']}}\"\n                                    class=\"form-control\">{{widget['text']}}</textarea>\n                          <!--</li>-->\n                        </div>\n                      </div>\n                    </div>\n\n                  </div>\n                </div>\n              </div>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/component/component-view/component-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_shared_service__ = __webpack_require__("../../../../../src/app/services/shared.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_component_service_client__ = __webpack_require__("../../../../../src/app/services/component.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_module_service_client__ = __webpack_require__("../../../../../src/app/services/module.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_section_service_client__ = __webpack_require__("../../../../../src/app/services/section.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ComponentViewComponent = (function () {
    function ComponentViewComponent(router, route, sharedService, componentService, moduleService, sectionService, widgetService, domSanitizer, userService) {
        this.router = router;
        this.route = route;
        this.sharedService = sharedService;
        this.componentService = componentService;
        this.moduleService = moduleService;
        this.sectionService = sectionService;
        this.widgetService = widgetService;
        this.domSanitizer = domSanitizer;
        this.userService = userService;
        this.sectionIndex = 0;
        this.moduleIndex = 0;
        this.component = {};
        this.modules = [{}];
        this.module = {};
        this.section = {};
        this.sections = [{}];
        this.widgets = [{}];
    }
    ComponentViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.currentUser = _this.sharedService.user;
            _this.componentId = params['cid'];
            _this.componentService.findComponentById(_this.componentId)
                .subscribe(function (component) {
                _this.component = component;
            });
            _this.moduleService.findModulesByComponentId(_this.componentId)
                .subscribe(function (modules) {
                _this.modules = modules;
                if (_this.modules && _this.modules.length) {
                    _this.moduleId = modules[_this.moduleIndex]['_id'];
                    _this.module = modules[_this.moduleIndex];
                    _this.sectionService.findSectionsByModuleId(_this.moduleId)
                        .subscribe(function (sections) {
                        _this.sections = sections;
                        if (_this.sections && _this.sections.length) {
                            if (sections[_this.sectionIndex]) {
                                _this.sectionId = sections[_this.sectionIndex]['_id'];
                                _this.section = sections[_this.sectionIndex];
                                _this.widgetService.findWidgetsBySectionId(_this.sectionId)
                                    .subscribe(function (widgets) {
                                    _this.widgets = widgets;
                                });
                            }
                        }
                    });
                }
            });
        });
    };
    ComponentViewComponent.prototype.selectModule = function (moduleIndex) {
        var _this = this;
        this.moduleIndex = moduleIndex;
        this.sectionIndex = 0;
        this.section = {};
        this.sections = [{}];
        this.widgets = [{}];
        this.module = this.modules[this.moduleIndex];
        this.sectionService.findSectionsByModuleId(this.module['_id'])
            .subscribe(function (sections) {
            _this.sections = sections;
            if (_this.sections && _this.sections.length) {
                if (sections[_this.sectionIndex]) {
                    _this.sectionId = sections[_this.sectionIndex]['_id'];
                    _this.section = sections[_this.sectionIndex];
                    _this.widgetService.findWidgetsBySectionId(_this.sectionId)
                        .subscribe(function (widgets) {
                        _this.widgets = widgets;
                    });
                }
                else {
                    _this.sections = [{}];
                }
            }
        });
    };
    ComponentViewComponent.prototype.selectSection = function (sectionIndex) {
        var _this = this;
        this.sectionIndex = sectionIndex;
        this.section = this.sections[this.sectionIndex];
        this.widgets = [{}];
        this.widgetService.findWidgetsBySectionId(this.section['_id'])
            .subscribe(function (widgets) {
            _this.widgets = widgets;
        });
    };
    ComponentViewComponent.prototype.safeUrl = function (url) {
        return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
    };
    ComponentViewComponent.prototype.updateWidgetPosition = function (event) {
        this.widgetService.updateWidgetPosition(this.sectionId, event['startIndex'], event['endIndex'])
            .subscribe(function (data) {
            if (data && data.success === true) {
                console.log('success');
            }
            else {
                console.log('error in updating position');
            }
        });
    };
    ComponentViewComponent.prototype.updateSectionPosition = function (event) {
        this.sectionService.updateSectionPosition(this.moduleId, event['startIndex'], event['endIndex'])
            .subscribe(function (data) {
            if (data && data.success === true) {
                console.log('success');
            }
            else {
                console.log('error in updating position');
            }
        });
    };
    ComponentViewComponent.prototype.updateModulePosition = function (event) {
        this.moduleService.updateModulePosition(this.componentId, event['startIndex'], event['endIndex'])
            .subscribe(function (data) {
            if (data && data.success === true) {
                console.log('success');
            }
            else {
                console.log('error in updating position');
            }
        });
    };
    ComponentViewComponent.prototype.logout = function () {
        var _this = this;
        this.userService.logout()
            .subscribe(function (data) {
            _this.currentUser = undefined;
            _this.sharedService.user = undefined;
            _this.router.navigate(['/']);
        });
    };
    return ComponentViewComponent;
}());
ComponentViewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-component-view',
        template: __webpack_require__("../../../../../src/app/components/component/component-view/component-view.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/component/component-view/component-view.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_shared_service__["a" /* SharedService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_component_service_client__["a" /* ComponentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_component_service_client__["a" /* ComponentService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__services_module_service_client__["a" /* ModuleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_module_service_client__["a" /* ModuleService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__services_section_service_client__["a" /* SectionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_section_service_client__["a" /* SectionService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_6__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_widget_service_client__["a" /* WidgetService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__["b" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__["b" /* DomSanitizer */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_8__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__services_user_service_client__["a" /* UserService */]) === "function" && _j || Object])
], ComponentViewComponent);

var _a, _b, _c, _d, _e, _f, _g, _h, _j;
//# sourceMappingURL=component-view.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*!*  landing page  *!*/\n\n/*.jumbotron{*/\n  /*background-color: #334d5c;*/\n/*}*/\n\n/*.navbar-right{*/\n  /*!*visibility:hidden;*!*/\n/*}*/\n\n/*p {*/\n  /*text-align: justify;*/\n/*}*/\n\n/*@media (min-width:320px) {*/\n  /*.jumbotron .container{*/\n    /*background: #334d5c url(\"../images/home_row_bg_graphic_fade.gif\") no-repeat left top;*/\n    /*min-height: 340px;*/\n  /*}*/\n/*}*/\n/*@media (min-width:992px) {*/\n  /*.jumbotron .container{*/\n    /*background: #334d5c url(\"../images/home_row_bg_graphic.gif\") no-repeat left top;*/\n    /*min-height: 340px;*/\n  /*}*/\n/*}*/\n\n/*.jumbotron {*/\n  /*padding: 48px 0px 0px;*/\n/*}*/\n\n/*.jumbotron .container h1{*/\n  /*text-align:right;*/\n  /*color:#ffd54d;*/\n  /*font-size:64px;*/\n  /*margin-top:0;*/\n/*}*/\n/*.jumbotron .container h2{*/\n  /*text-align:right;*/\n  /*color:#77b3d5;*/\n  /*font-size:48px;*/\n  /*margin-top:140px;*/\n  /*margin-bottom:0;*/\n/*}*/\n/*.jumbotron .container p{*/\n  /*text-align:right;*/\n  /*margin-top:30px;*/\n  /*color:#77b3d5;*/\n  /*font-size:16px;*/\n/*}*/\n\n/*img{*/\n  /*margin-right:10px;*/\n\n  /*border:1px solid #ccc;*/\n/*}*/\n/*h2 {*/\n  /*margin-bottom:15px;*/\n  /*color:#334D5C;*/\n/*}*/\n\n/*footer p{*/\n  /*text-align:center;*/\n/*}*/\n/*.space{*/\n  /*margin-left: 10px;*/\n/*}*/\n/*.top*/\n/*{*/\n  /*margin-top: 20px;*/\n/*}*/\n/*!*  landing page  *!*/\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse navbar-fixed-top\">\n  <div class=\"container\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\"\n              aria-expanded=\"false\" aria-controls=\"navbar\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" href=\"#\">&nbsp;</a>\n    </div>\n    <div id=\"navbar\" class=\"navbar-collapse collapse\">\n\n\n      <ul class=\"nav navbar-nav  navbar-right\">\n        <li *ngIf=\"!currentUser\"><a [routerLink]=\"['login']\">Login</a></li>\n        <li *ngIf=\"currentUser\"><a (click)=\"logout()\">Logout</a></li>\n        <li *ngIf=\"!currentUser\"><a [routerLink]=\"['register']\">Register</a></li>\n      </ul>\n    </div>\n  </div>\n</nav>\n\n<div class=\"jumbotron\">\n  <div class=\"container\">\n    <p>\n      Some content\n    </p>\n    <h2>Manage</h2>\n    <h1>Your Content</h1>\n  </div>\n</div>\n\n<div *ngIf=\"currentUser.admin\">\n  <div class=\"container\">\n    <ul class=\"list-group\">\n      <li class=\"list-group-item\">\n        <a>\n          Components\n        </a>\n        <a [routerLink]=\"['/component', 'new']\"\n           class=\"pull-right\">\n          <span class=\"glyphicon glyphicon-plus-sign\"></span>\n        </a>\n      </li>\n      <div *ngFor=\"let component of components\">\n        <li class=\"list-group-item\">\n          <a [routerLink]=\"['/component', component['_id'] ]\">\n            {{component['name']}}\n          </a>\n          <a [routerLink]=\"['/component', component['_id'], 'edit']\"\n             class=\"pull-right\">\n            <span class=\"glyphicon glyphicon-cog\"></span>\n          </a>\n\n        </li>\n      </div>\n    </ul>\n  </div>\n</div>\n\n<div *ngIf=\"!currentUser.admin\">\n  <div class=\"container\">\n    <ul class=\"list-group\">\n      <li class=\"list-group-item\">\n        <a>\n          Components\n        </a>\n      </li>\n      <div *ngFor=\"let component of components\">\n        <li class=\"list-group-item\">\n          <a [routerLink]=\"['/component', component['_id'] ]\">\n            {{component['name']}}\n          </a>\n        </li>\n      </div>\n    </ul>\n  </div>\n</div>\n\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <p class=\"align- text-center\">&copy; Norteastern University | College of Computer and Information Science</p>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_shared_service__ = __webpack_require__("../../../../../src/app/services/shared.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_component_service_client__ = __webpack_require__("../../../../../src/app/services/component.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomeComponent = (function () {
    function HomeComponent(router, route, sharedService, userService, componentService) {
        this.router = router;
        this.route = route;
        this.sharedService = sharedService;
        this.userService = userService;
        this.componentService = componentService;
        this.components = [{}];
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            console.log(_this.sharedService.user);
            _this.currentUser = _this.sharedService.user;
            _this.componentService.findAllComponent()
                .subscribe(function (data) {
                if (data) {
                    _this.components = data;
                    console.log(_this.components);
                }
            });
        });
    };
    HomeComponent.prototype.logout = function () {
        var _this = this;
        this.userService.logout()
            .subscribe(function (data) {
            _this.currentUser = undefined;
            _this.sharedService.user = undefined;
            _this.router.navigate(['/']);
        });
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_shared_service__["a" /* SharedService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__services_component_service_client__["a" /* ComponentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_component_service_client__["a" /* ComponentService */]) === "function" && _e || Object])
], HomeComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/module/module-edit/module-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "::ng-deep body {\n  padding-top: 70px;\n  padding-bottom: 70px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/module/module-edit/module-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse navbar-fixed-top\">\n  <div class=\"container-fluid\">\n      <!--tick mark-->\n      <div class=\"navbar-brand pull-right right-margin-fix\">\n        <a (click)=\"updateModule()\"\n           class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-ok-sign\"></span>\n        </a>\n      </div>\n      <!--tick mark-->\n      <div class=\"navbar-brand pull-left left-margin-fix\">\n        <a [routerLink]=\"['/component', componentId]\"\n           class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-chevron-left\"></span>\n        </a>\n      </div>\n      <!--heading on the nav bar-->\n      <p class=\"navbar-header pull-left\">\n        <a class=\"navbar-brand \">\n          <b>Edit Modules</b>\n        </a>\n      </p>\n    </div>\n</nav>\n\n<div class=\"container-fluid \">\n  <div class=\"form-group\">\n    <label for=\"moduleName\">\n      Name\n    </label>\n    <input [(ngModel)]=\"module['name']\"\n           name=\"moduleName\"\n           required\n           type=\"text\"\n           class=\"form-control mr-5\"\n           id=\"moduleName\"\n           placeholder=\"Module Name\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"moduleDesc\">\n      Description\n    </label>\n    <textarea [(ngModel)]=\"module['description']\"\n              name=\"moduleDesc\"\n              required\n              rows=\"5\"\n              class=\"form-control mr-5\"\n              id=\"moduleDesc\"\n              placeholder=\"Module Description\"></textarea>\n  </div>\n  <div class=\"form-group\">\n    <a class=\"btn btn-danger btn-block \"\n       (click)=\"deleteModule()\">\n      Delete\n    </a>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/module/module-edit/module-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModuleEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_shared_service__ = __webpack_require__("../../../../../src/app/services/shared.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_module_service_client__ = __webpack_require__("../../../../../src/app/services/module.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ModuleEditComponent = (function () {
    function ModuleEditComponent(router, route, sharedService, moduleService) {
        this.router = router;
        this.route = route;
        this.sharedService = sharedService;
        this.moduleService = moduleService;
        this.module = {};
    }
    ModuleEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.currentUser = _this.sharedService.user;
            _this.componentId = params['cid'];
            _this.moduleId = params['mid'];
            _this.moduleService.findModuleById(_this.moduleId)
                .subscribe(function (module) {
                _this.module = module;
            });
        });
    };
    ModuleEditComponent.prototype.updateModule = function () {
        var _this = this;
        this.moduleService.updateModule(this.moduleId, this.module)
            .subscribe(function (module) {
            _this.module = module;
            _this.router.navigate(['/component', _this.componentId]);
        });
    };
    ModuleEditComponent.prototype.deleteModule = function () {
        var _this = this;
        this.moduleService.deleteModule(this.moduleId)
            .subscribe(function (data) {
            if (data === 200) {
                _this.router.navigate(['/component', _this.componentId]);
            }
        });
    };
    return ModuleEditComponent;
}());
ModuleEditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-module-edit',
        template: __webpack_require__("../../../../../src/app/components/module/module-edit/module-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/module/module-edit/module-edit.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_shared_service__["a" /* SharedService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_module_service_client__["a" /* ModuleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_module_service_client__["a" /* ModuleService */]) === "function" && _d || Object])
], ModuleEditComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=module-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/module/module-new/module-new.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "::ng-deep body {\n  padding-top: 70px;\n  padding-bottom: 70px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/module/module-new/module-new.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse navbar-fixed-top\">\n  <div class=\"container-fluid\">\n      <!--tick mark-->\n      <div class=\"navbar-brand pull-right right-margin-fix\">\n        <a (click)=\"createModule()\"\n           class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-ok-sign\"></span>\n        </a>\n      </div>\n      <!--tick mark-->\n      <div class=\"navbar-brand pull-left left-margin-fix\">\n        <a [routerLink]=\"['/component', componentId]\"\n           class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-chevron-left\"></span>\n        </a>\n      </div>\n      <!--heading on the nav bar-->\n      <p class=\"navbar-header pull-left\">\n        <a class=\"navbar-brand \">\n          <b>New Module</b>\n        </a>\n      </p>\n    </div>\n</nav>\n\n<div class=\"container-fluid \">\n  <form #f=\"ngForm\">\n    <div class=\"form-group\">\n      <label for=\"moduleName\">\n        Name\n      </label>\n      <input ngModel=\"\"\n             name=\"moduleName\"\n             required\n             type=\"text\"\n             class=\"form-control mr-5\"\n             id=\"moduleName\"\n             placeholder=\"Module Name\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"moduleDesc\">\n        Description\n      </label>\n      <textarea ngModel=\"\"\n                name=\"moduleDesc\"\n                required\n                rows=\"5\"\n                class=\"form-control mr-5\"\n                id=\"moduleDesc\"\n                placeholder=\"Module Description\"></textarea>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/module/module-new/module-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModuleNewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_shared_service__ = __webpack_require__("../../../../../src/app/services/shared.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_module_service_client__ = __webpack_require__("../../../../../src/app/services/module.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ModuleNewComponent = (function () {
    function ModuleNewComponent(router, route, sharedService, moduleService) {
        this.router = router;
        this.route = route;
        this.sharedService = sharedService;
        this.moduleService = moduleService;
        this.module = {};
    }
    ModuleNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            console.log(_this.sharedService.user);
            _this.componentId = params['cid'];
            _this.currentUser = _this.sharedService.user;
        });
    };
    ModuleNewComponent.prototype.createModule = function () {
        var _this = this;
        this.module['name'] = this.newModuleForm.value.moduleName;
        this.module['description'] = this.newModuleForm.value.moduleDesc;
        this.moduleService.createModule(this.componentId, this.module)
            .subscribe(function (module) {
            _this.module = module;
            _this.router.navigate(['/component', _this.componentId]);
        });
    };
    return ModuleNewComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NgForm */]) === "function" && _a || Object)
], ModuleNewComponent.prototype, "newModuleForm", void 0);
ModuleNewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-module-new',
        template: __webpack_require__("../../../../../src/app/components/module/module-new/module-new.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/module/module-new/module-new.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_shared_service__["a" /* SharedService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__services_module_service_client__["a" /* ModuleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_module_service_client__["a" /* ModuleService */]) === "function" && _e || Object])
], ModuleNewComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=module-new.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/section/section-edit/section-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "::ng-deep body {\n  padding-top: 70px;\n  padding-bottom: 70px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/section/section-edit/section-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse navbar-fixed-top\">\n  <div class=\"container-fluid\">\n      <!--tick mark-->\n      <div class=\"navbar-brand pull-right right-margin-fix\">\n        <a (click)=\"updateSection()\"\n           class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-ok-sign\"></span>\n        </a>\n      </div>\n      <!--tick mark-->\n      <div class=\"navbar-brand pull-left left-margin-fix\">\n        <a [routerLink]=\"['/component', componentId]\"\n           class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-chevron-left\"></span>\n        </a>\n      </div>\n      <!--heading on the nav bar-->\n      <p class=\"navbar-header pull-left\">\n        <a class=\"navbar-brand \">\n          <b>Edit Sections</b>\n        </a>\n      </p>\n    </div>\n</nav>\n\n<div class=\"container-fluid \">\n  <div class=\"form-group\">\n    <label for=\"sectionName\">\n      Name\n    </label>\n    <input [(ngModel)]=\"section['name']\"\n           name=\"sectionName\"\n           required\n           type=\"text\"\n           class=\"form-control mr-5\"\n           id=\"sectionName\"\n           placeholder=\"Section Name\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"sectionDesc\">\n      Description\n    </label>\n    <textarea [(ngModel)]=\"section['description']\"\n              name=\"sectionDesc\"\n              required\n              rows=\"5\"\n              class=\"form-control mr-5\"\n              id=\"sectionDesc\"\n              placeholder=\"Section Description\"></textarea>\n  </div>\n  <div class=\"form-group\">\n    <a class=\"btn btn-danger btn-block \"\n       (click)=\"deleteSection()\">\n      Delete\n    </a>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/section/section-edit/section-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SectionEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_shared_service__ = __webpack_require__("../../../../../src/app/services/shared.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_module_service_client__ = __webpack_require__("../../../../../src/app/services/module.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_section_service_client__ = __webpack_require__("../../../../../src/app/services/section.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SectionEditComponent = (function () {
    function SectionEditComponent(router, route, sharedService, moduleService, sectionService) {
        this.router = router;
        this.route = route;
        this.sharedService = sharedService;
        this.moduleService = moduleService;
        this.sectionService = sectionService;
        this.section = {};
    }
    SectionEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.currentUser = _this.sharedService.user;
            _this.componentId = params['cid'];
            _this.moduleId = params['mid'];
            _this.sectionId = params['sid'];
            _this.sectionService.findSectionById(_this.sectionId)
                .subscribe(function (section) {
                _this.section = section;
            });
        });
    };
    SectionEditComponent.prototype.updateSection = function () {
        var _this = this;
        this.sectionService.updateSection(this.sectionId, this.section)
            .subscribe(function (section) {
            _this.section = section;
            _this.router.navigate(['/component', _this.componentId]);
        });
    };
    SectionEditComponent.prototype.deleteSection = function () {
        var _this = this;
        this.sectionService.deleteSection(this.sectionId)
            .subscribe(function (data) {
            if (data === 200) {
                _this.router.navigate(['/component', _this.componentId]);
            }
        });
    };
    return SectionEditComponent;
}());
SectionEditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-section-edit',
        template: __webpack_require__("../../../../../src/app/components/section/section-edit/section-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/section/section-edit/section-edit.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_shared_service__["a" /* SharedService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_module_service_client__["a" /* ModuleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_module_service_client__["a" /* ModuleService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__services_section_service_client__["a" /* SectionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_section_service_client__["a" /* SectionService */]) === "function" && _e || Object])
], SectionEditComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=section-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/section/section-new/section-new.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "::ng-deep body {\n  padding-top: 70px;\n  padding-bottom: 70px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/section/section-new/section-new.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse navbar-fixed-top\">\n  <div class=\"container-fluid\">\n      <!--tick mark-->\n      <div class=\"navbar-brand pull-right right-margin-fix\">\n        <a (click)=\"createSection()\"\n           class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-ok-sign\"></span>\n        </a>\n      </div>\n      <!--tick mark-->\n      <div class=\"navbar-brand pull-left left-margin-fix\">\n        <a [routerLink]=\"['/component', componentId]\"\n           class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-chevron-left\"></span>\n        </a>\n      </div>\n      <!--heading on the nav bar-->\n      <p class=\"navbar-header pull-left\">\n        <a class=\"navbar-brand \">\n          <b>New Section</b>\n        </a>\n      </p>\n    </div>\n</nav>\n\n<div class=\"container-fluid \">\n  <form #f=\"ngForm\">\n    <div class=\"form-group\">\n      <label for=\"sectionName\">\n        Name\n      </label>\n      <input ngModel=\"\"\n             name=\"sectionName\"\n             required\n             type=\"text\"\n             class=\"form-control mr-5\"\n             id=\"sectionName\"\n             placeholder=\"Section Name\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"sectionDesc\">\n        Description\n      </label>\n      <textarea ngModel=\"\"\n                name=\"sectionDesc\"\n                required\n                rows=\"5\"\n                class=\"form-control mr-5\"\n                id=\"sectionDesc\"\n                placeholder=\"Section Description\"></textarea>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/section/section-new/section-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SectionNewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_section_service_client__ = __webpack_require__("../../../../../src/app/services/section.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_shared_service__ = __webpack_require__("../../../../../src/app/services/shared.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SectionNewComponent = (function () {
    function SectionNewComponent(router, route, sharedService, sectionService) {
        this.router = router;
        this.route = route;
        this.sharedService = sharedService;
        this.sectionService = sectionService;
        this.section = {};
    }
    SectionNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            console.log(_this.sharedService.user);
            _this.componentId = params['cid'];
            _this.moduleId = params['mid'];
            _this.currentUser = _this.sharedService.user;
        });
    };
    SectionNewComponent.prototype.createSection = function () {
        var _this = this;
        this.section['name'] = this.newSectionForm.value.sectionName;
        this.section['description'] = this.newSectionForm.value.sectionDesc;
        this.sectionService.createSection(this.moduleId, this.section)
            .subscribe(function (section) {
            _this.section = section;
            _this.router.navigate(['/component', _this.componentId]);
        });
    };
    return SectionNewComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* NgForm */]) === "function" && _a || Object)
], SectionNewComponent.prototype, "newSectionForm", void 0);
SectionNewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-section-new',
        template: __webpack_require__("../../../../../src/app/components/section/section-new/section-new.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/section/section-new/section-new.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_shared_service__["a" /* SharedService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__services_section_service_client__["a" /* SectionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_section_service_client__["a" /* SectionService */]) === "function" && _e || Object])
], SectionNewComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=section-new.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/test/test.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/test/test.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n\n  <h1>Test</h1>\n\n  <div *ngIf=\"alertMessage\"\n       class=\"alert alert-danger\">\n    \"Failed to create\"\n  </div>\n\n  <div *ngIf=\"successMessage\"\n       class=\"alert alert-success\">\n    \"Succesfully created/deleted\"\n  </div>\n\n  <table class=\"table\">\n    <thead>\n    <tr>\n      <th>Test Message</th>\n      <th>&nbsp;</th>\n    </tr>\n\n\n    <tr>\n      <td>\n        <input [(ngModel)]=\"message\"\n               placeholder=\"message\"\n               class=\"form-control\"/>\n      </td>\n\n\n      <td>\n        <button (click)=\"createMessage()\"\n                class=\"btn btn-primary pull-right\">\n          <span class=\"glyphicon glyphicon-plus\"></span>\n        </button>\n      </td>\n    </tr>\n    </thead>\n\n\n    <tbody>\n    <tr *ngFor=\"let message of messages\">\n      <td>\n        {{message.message}}\n      </td>\n      <td>\n        <button (click)=\"deleteMessage(message._id)\"\n                class=\"btn btn-danger pull-right\">\n          <span class=\"glyphicon glyphicon-remove\"></span>\n        </button>\n      </td>\n    </tr>\n    </tbody>\n  </table>\n\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/components/test/test.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_test_service_client__ = __webpack_require__("../../../../../src/app/services/test.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TestComponent = (function () {
    function TestComponent(_testService) {
        this._testService = _testService;
        this.alertMessage = false;
        this.successMessage = false;
        this.messages = [];
    }
    TestComponent.prototype.ngOnInit = function () {
        this.findAllMessages();
    };
    TestComponent.prototype.findAllMessages = function () {
        var _this = this;
        return this._testService.findAllMessages()
            .subscribe(function (data) {
            _this.messages = data;
        });
    };
    TestComponent.prototype.createMessage = function () {
        var _this = this;
        return this._testService.createMessage(this.message)
            .subscribe(function (data) {
            _this.successMessage = true;
            _this.ngOnInit();
            _this.message = null;
        });
    };
    TestComponent.prototype.deleteMessage = function (messageId) {
        var _this = this;
        return this._testService.deleteMessage(messageId)
            .subscribe(function (data) {
            _this.successMessage = true;
            _this.ngOnInit();
        });
    };
    return TestComponent;
}());
TestComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-test',
        template: __webpack_require__("../../../../../src/app/components/test/test.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/test/test.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_test_service_client__["a" /* TestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_test_service_client__["a" /* TestService */]) === "function" && _a || Object])
], TestComponent);

var _a;
//# sourceMappingURL=test.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse navbar-fixed-top\">\n  <div class=\"container\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\"\n              aria-expanded=\"false\" aria-controls=\"navbar\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" href=\"#\">&nbsp;</a>\n    </div>\n    <div id=\"navbar\" class=\"navbar-collapse collapse\">\n\n\n      <ul class=\"nav navbar-nav  navbar-right\">\n        <li><a [routerLink]=\"['/login']\">Login</a></li>\n        <li><a [routerLink]=\"['/register']\">Register</a></li>\n      </ul>\n    </div>\n  </div>\n</nav>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-2\"></div>\n    <div class=\"col-md-8\">\n      <h1>LogIn</h1>\n      <div *ngIf=\"errorFlag\"\n           class=\"alert alert-danger\">\n        {{errorMsg}}\n      </div>\n      <form (ngSubmit)=\"login()\" #f=\"ngForm\">\n        <div class=\"form-group\">\n          <input name=\"email\"\n                 ngModel=\"\"\n                 required\n                 placeholder=\"email\"\n                 type=\"email\"\n                 class=\"form-control input-lg\"\n                 #username=\"ngModel\"/>\n        </div>\n        <div class=\"form-group\">\n          <input name=\"password\"\n                 ngModel=\"\"\n                 required\n                 placeholder=\"password\"\n                 type=\"password\"\n                 class=\"form-control input-lg\"\n                 #password=\"ngModel\"/>\n        </div>\n        <div class=\"form-group\">\n          <button type=\"submit\"\n                  class=\"btn btn-success btn-block btn-lg\"\n                  [disabled]=\"!f.valid\">\n            Login\n          </button>\n        </div>\n      </form>\n      <div class=\"form-group\">\n        <a href=\"/auth/facebook\" class=\"btn btn-block btn-social btn-facebook btn-lg\">\n          <span class=\"fa fa-facebook\"></span>\n          Sign in with Facebook\n        </a>\n      </div>\n    </div>\n    <div class=\"col-md-2\"></div>\n  </div>\n</div>\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <p class=\"align- text-center\">&copy; Norteastern University | College of Computer and Information Science</p>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/user/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_shared_service__ = __webpack_require__("../../../../../src/app/services/shared.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = (function () {
    function LoginComponent(userService, router, sharedService) {
        this.userService = userService;
        this.router = router;
        this.sharedService = sharedService;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.email = this.loginForm.value.email;
        this.password = this.loginForm.value.password;
        this.userService.login(this.email, this.password)
            .subscribe(function (user) {
            _this.errorFlag = false;
            _this.sharedService.user = user;
            _this.router.navigate(["/"]);
        }, function (error) {
            _this.errorFlag = true;
            _this.errorMsg = error;
        });
    };
    return LoginComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* NgForm */]) === "function" && _a || Object)
], LoginComponent.prototype, "loginForm", void 0);
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/components/user/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_shared_service__["a" /* SharedService */]) === "function" && _d || Object])
], LoginComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse navbar-fixed-top\">\n  <div class=\"container\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\"\n              aria-expanded=\"false\" aria-controls=\"navbar\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" href=\"#\">&nbsp;</a>\n    </div>\n    <div id=\"navbar\" class=\"navbar-collapse collapse\">\n\n\n      <ul class=\"nav navbar-nav  navbar-right\">\n        <li><a [routerLink]=\"['/login']\">Login</a></li>\n        <li><a [routerLink]=\"['/register']\">Register</a></li>\n      </ul>\n    </div>\n  </div>\n</nav>\n\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-2\"></div>\n    <div class=\"col-md-8\">\n      <h1>Register</h1>\n      <div *ngIf=\"errorFlag\"\n           class=\"alert alert-danger\">\n        {{errorMsg}}\n      </div>\n      <form (ngSubmit)=\"register()\" #f=\"ngForm\">\n        <div class=\"form-group\">\n          <input name=\"email\"\n                 ngModel=\"\"\n                 required\n                 placeholder=\"email\"\n                 type=\"email\"\n                 class=\"form-control input-lg\"\n                 #username=\"ngModel\"/>\n        </div>\n        <div class=\"form-group\">\n          <input name=\"password\"\n                 ngModel=\"\"\n                 required\n                 placeholder=\"Password\"\n                 type=\"password\"\n                 class=\"form-control input-lg\"\n                 #password=\"ngModel\"/>\n        </div>\n        <div class=\"form-group\">\n          <input name=\"verifyPassword\"\n                 ngModel=\"\"\n                 required\n                 placeholder=\"Verify Password\"\n                 type=\"password\"\n                 class=\"form-control input-lg\"\n                 #password=\"ngModel\"/>\n        </div>\n        <div class=\"form-group\">\n          <button type=\"submit\"\n                  class=\"btn btn-success btn-block btn-lg\"\n                  [disabled]=\"!f.valid\">\n            Register\n          </button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <p class=\"align- text-center\">&copy; Norteastern University | College of Computer and Information Science</p>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/user/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_shared_service__ = __webpack_require__("../../../../../src/app/services/shared.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = (function () {
    function RegisterComponent(userService, router, sharedService) {
        this.userService = userService;
        this.router = router;
        this.sharedService = sharedService;
        this.user = {};
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this.user['email'] = this.registrationForm.value.email;
        this.user['password'] = this.registrationForm.value.password;
        this.verifyPassword = this.registrationForm.value.verifyPassword;
        if (this.user['password'] !== this.verifyPassword) {
            this.errorFlag = true;
            this.errorMsg = 'Passwords are not matching!';
        }
        else {
            this.userService.register(this.user)
                .subscribe(function (user) {
                _this.user = user;
                if (_this.user) {
                    _this.sharedService.user = user;
                    _this.router.navigate(['/']);
                }
                else {
                    _this.errorFlag = true;
                    _this.errorMsg = 'Failed to create User!';
                }
            });
        }
    };
    return RegisterComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* NgForm */]) === "function" && _a || Object)
], RegisterComponent.prototype, "registrationForm", void 0);
RegisterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/app/components/user/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/register/register.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_shared_service__["a" /* SharedService */]) === "function" && _d || Object])
], RegisterComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-choose/widget-choose.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-choose/widget-choose.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse navbar-fixed-top\">\n  <div class=\"row container-fluid\">\n    <div class=\"col-sm-12 col-xs-12\">\n      <!--tick mark-->\n      <div class=\"navbar-brand pull-left left-margin-fix\">\n        <a [routerLink]=\"['/component', componentId]\"\n           class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-chevron-left\"></span>\n        </a>\n      </div>\n      <!--heading on the nav bar-->\n      <p class=\"navbar-header pull-left\">\n        <a class=\"navbar-brand \">\n          <b>Choose Widget</b>\n        </a>\n      </p>\n    </div>\n  </div>\n</nav>\n\n\n<div class=\"container-fluid\">\n\n  <ul class=\"list-group\">\n    <a [routerLink]=\"['/component', componentId, 'module', moduleId, 'section', sectionId, 'widget', 'new', 'heading']\"\n       class=\"list-group-item\">\n      Header\n    </a>\n    <a [routerLink]=\"['/component', componentId, 'module', moduleId, 'section', sectionId, 'widget', 'new', 'image']\"\n       class=\"list-group-item\">\n      Image\n    </a>\n    <a [routerLink]=\"['/component', componentId, 'module', moduleId, 'section', sectionId, 'widget', 'new', 'youtube']\"\n       class=\"list-group-item\">\n      Youtube\n    </a>\n    <a [routerLink]=\"['/component', componentId, 'module', moduleId, 'section', sectionId, 'widget', 'new', 'html']\"\n       class=\"list-group-item\">\n      Html\n    </a>\n    <a [routerLink]=\"['/component', componentId, 'module', moduleId, 'section', sectionId, 'widget', 'new', 'text']\"\n       class=\"list-group-item\">\n      Text\n    </a>\n  </ul>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-choose/widget-choose.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetChooseComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_shared_service__ = __webpack_require__("../../../../../src/app/services/shared.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WidgetChooseComponent = (function () {
    function WidgetChooseComponent(router, route, sharedService) {
        this.router = router;
        this.route = route;
        this.sharedService = sharedService;
    }
    WidgetChooseComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            console.log(_this.sharedService.user);
            _this.componentId = params['cid'];
            _this.moduleId = params['mid'];
            _this.sectionId = params['sid'];
            _this.currentUser = _this.sharedService.user;
        });
    };
    return WidgetChooseComponent;
}());
WidgetChooseComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-choose',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-choose/widget-choose.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-choose/widget-choose.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_shared_service__["a" /* SharedService */]) === "function" && _c || Object])
], WidgetChooseComponent);

var _a, _b, _c;
//# sourceMappingURL=widget-choose.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div [ngSwitch]=\"widget['type']\">\n\n  <div *ngSwitchCase=\"'HEADING'\">\n    <app-widget-heading></app-widget-heading>\n  </div>\n\n  <!--<div *ngSwitchCase=\"'IMAGE'\">-->\n    <!--<app-widget-image></app-widget-image>-->\n  <!--</div>-->\n\n  <div *ngSwitchCase=\"'YOUTUBE'\">\n    <app-widget-youtube></app-widget-youtube>\n  </div>\n\n  <div *ngSwitchCase=\"'HTML'\">\n    <app-widget-html></app-widget-html>\n  </div>\n\n  <div *ngSwitchCase=\"'TEXT'\">\n    <app-widget-text></app-widget-text>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_shared_service__ = __webpack_require__("../../../../../src/app/services/shared.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WidgetEditComponent = (function () {
    function WidgetEditComponent(widgetService, activatedRoutes, sharedService) {
        this.widgetService = widgetService;
        this.activatedRoutes = activatedRoutes;
        this.sharedService = sharedService;
        this.widget = {};
    }
    WidgetEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoutes.params.subscribe(function (params) {
            console.log(_this.sharedService.user);
            _this.componentId = params['cid'];
            _this.moduleId = params['mid'];
            _this.sectionId = params['sid'];
            _this.widgetId = params['wid'];
            _this.currentUser = _this.sharedService.user;
            _this.widgetService.findWidgetById(_this.widgetId)
                .subscribe(function (widget) {
                _this.widget = widget;
            });
        });
    };
    return WidgetEditComponent;
}());
WidgetEditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-edit',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_shared_service__["a" /* SharedService */]) === "function" && _c || Object])
], WidgetEditComponent);

var _a, _b, _c;
//# sourceMappingURL=widget-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-heading/widget-heading.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-heading/widget-heading.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"widgetEdit;then edit else new\"></div>\n<ng-template #edit>\n  <nav class=\"navbar navbar-inverse navbar-fixed-top\">\n    <div class=\"container-fluid\">\n      <!--tick mark-->\n      <div class=\"navbar-brand pull-right right-margin-fix\">\n        <a (click)=\"updateWidget()\"\n           class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-ok-sign\"></span>\n        </a>\n      </div>\n      <!--tick mark-->\n      <div class=\"navbar-brand pull-left left-margin-fix\">\n        <a [routerLink]=\"['/component', componentId]\"\n           class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-chevron-left\"></span>\n        </a>\n      </div>\n      <!--heading on the nav bar-->\n      <p class=\"navbar-header pull-left\">\n        <a class=\"navbar-brand \">\n          <b>Widget Edit</b>\n        </a>\n      </p>\n    </div>\n  </nav>\n</ng-template>\n<ng-template #new>\n  <nav class=\"navbar navbar-inverse navbar-fixed-top\">\n    <div class=\"container-fluid\">\n      <!--tick mark-->\n      <div class=\"navbar-brand pull-right right-margin-fix\">\n        <a (click)=\"createWidget()\"\n           class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-ok-sign\"></span>\n        </a>\n      </div>\n      <!--tick mark-->\n      <div class=\"navbar-brand pull-left left-margin-fix\">\n        <a [routerLink]=\"['/component', componentId]\"\n           class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-chevron-left\"></span>\n        </a>\n      </div>\n      <!--heading on the nav bar-->\n      <p class=\"navbar-header pull-left\">\n        <a class=\"navbar-brand \">\n          <b>New Widget</b>\n        </a>\n      </p>\n    </div>\n  </nav>\n</ng-template>\n\n<div class=\"container-fluid\">\n  <form>\n    <div class=\"form-group\">\n      <label for=\"textHeader\">\n        Text\n      </label>\n      <input [(ngModel)]=\"widget['text']\"\n             name=\"textHeader\"\n             required\n             type=\"text\"\n             class=\"form-control\"\n             id=\"textHeader\"\n             placeholder=\"Home Page\">\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"sizeHeader\">\n        Size\n      </label>\n      <input [(ngModel)]=\"widget['size']\"\n             required\n             name=\"sizeHeader\"\n             type=\"number\"\n             class=\"form-control\"\n             id=\"sizeHeader\"\n             placeholder=\"3\">\n    </div>\n\n    <div class=\"form-group\">\n      <a (click)=\"deleteWidget()\"\n         class=\"btn btn-danger btn-block \">\n        Delete\n      </a>\n    </div>\n  </form>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-heading/widget-heading.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetHeadingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_shared_service__ = __webpack_require__("../../../../../src/app/services/shared.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WidgetHeadingComponent = (function () {
    function WidgetHeadingComponent(widgetService, activatedRoutes, router, sharedService) {
        this.widgetService = widgetService;
        this.activatedRoutes = activatedRoutes;
        this.router = router;
        this.sharedService = sharedService;
        this.widget = {};
    }
    WidgetHeadingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoutes.params.subscribe(function (params) {
            console.log(_this.sharedService.user);
            _this.componentId = params['cid'];
            _this.moduleId = params['mid'];
            _this.sectionId = params['sid'];
            _this.widgetId = params['wid'];
            _this.widget['text'] = 'Home Page';
            _this.widget['size'] = '2';
            _this.currentUser = _this.sharedService.user;
            if (_this.widgetId) {
                _this.widgetService.findWidgetById(_this.widgetId)
                    .subscribe(function (widget) {
                    _this.widget = widget;
                    _this.widgetEdit = true;
                });
            }
        });
    };
    WidgetHeadingComponent.prototype.createWidget = function () {
        var _this = this;
        this.widget['type'] = 'HEADING';
        this.widgetService.createWidget(this.sectionId, this.widget)
            .subscribe(function (data) {
            if (data) {
                _this.widget = data;
                _this.router.navigate(['/component', _this.componentId]);
            }
        });
    };
    WidgetHeadingComponent.prototype.updateWidget = function () {
        var _this = this;
        this.widget['type'] = 'HEADING';
        this.widgetService.updateWidget(this.widgetId, this.widget)
            .subscribe(function (data) {
            if (data) {
                _this.widget = data;
                _this.router.navigate(['/component', _this.componentId]);
            }
        });
    };
    WidgetHeadingComponent.prototype.deleteWidget = function () {
        var _this = this;
        this.widgetService.deleteWidget(this.widgetId)
            .subscribe(function (data) {
            if (data === 200) {
                _this.router.navigate(['/component', _this.componentId]);
            }
        });
    };
    return WidgetHeadingComponent;
}());
WidgetHeadingComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-heading',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-heading/widget-heading.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-heading/widget-heading.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_shared_service__["a" /* SharedService */]) === "function" && _d || Object])
], WidgetHeadingComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=widget-heading.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-html/widget-html.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-html/widget-html.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"widgetEdit;then edit else new\"></div>\n<ng-template #edit>\n  <nav class=\"navbar navbar-inverse navbar-fixed-top\">\n    <div class=\"container-fluid\">\n      <!--tick mark-->\n      <div class=\"navbar-brand pull-right right-margin-fix\">\n        <a (click)=\"updateWidget()\"\n           class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-ok-sign\"></span>\n        </a>\n      </div>\n      <!--tick mark-->\n      <div class=\"navbar-brand pull-left left-margin-fix\">\n        <a [routerLink]=\"['/component', componentId]\"\n           class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-chevron-left\"></span>\n        </a>\n      </div>\n      <!--heading on the nav bar-->\n      <p class=\"navbar-header pull-left\">\n        <a class=\"navbar-brand \">\n          <b>Widget Edit</b>\n        </a>\n      </p>\n    </div>\n  </nav>\n</ng-template>\n<ng-template #new>\n  <nav class=\"navbar navbar-inverse navbar-fixed-top\">\n    <div class=\"container-fluid\">\n      <!--tick mark-->\n      <div class=\"navbar-brand pull-right right-margin-fix\">\n        <a (click)=\"createWidget()\"\n           class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-ok-sign\"></span>\n        </a>\n      </div>\n      <!--tick mark-->\n      <div class=\"navbar-brand pull-left left-margin-fix\">\n        <a [routerLink]=\"['/component', componentId]\"\n           class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-chevron-left\"></span>\n        </a>\n      </div>\n      <!--heading on the nav bar-->\n      <p class=\"navbar-header pull-left\">\n        <a class=\"navbar-brand \">\n          <b>New Widget</b>\n        </a>\n      </p>\n    </div>\n  </nav>\n</ng-template>\n\n<div class=\"container-fluid\">\n  <form>\n    <div class=\"form-group\">\n      <label for=\"textHtml\">\n        Text\n      </label>\n      <quill-editor [(ngModel)]=\"widget['text']\"\n                    name=\"textHtml\"\n                    id=\"textHtml\"></quill-editor>\n    </div>\n\n    <div class=\"form-group\">\n      <a (click)=\"deleteWidget()\"\n         class=\"btn btn-danger btn-block \">\n        Delete\n      </a>\n    </div>\n  </form>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-html/widget-html.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetHtmlComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_shared_service__ = __webpack_require__("../../../../../src/app/services/shared.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WidgetHtmlComponent = (function () {
    function WidgetHtmlComponent(widgetService, activatedRoutes, router, sharedService) {
        this.widgetService = widgetService;
        this.activatedRoutes = activatedRoutes;
        this.router = router;
        this.sharedService = sharedService;
        this.widget = {};
    }
    WidgetHtmlComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoutes.params.subscribe(function (params) {
            console.log(_this.sharedService.user);
            _this.componentId = params['cid'];
            _this.moduleId = params['mid'];
            _this.sectionId = params['sid'];
            _this.widgetId = params['wid'];
            _this.widget['text'] = '<p> Home Page</p>';
            _this.currentUser = _this.sharedService.user;
            if (_this.widgetId) {
                _this.widgetService.findWidgetById(_this.widgetId)
                    .subscribe(function (widget) {
                    _this.widget = widget;
                    _this.widgetEdit = true;
                });
            }
        });
    };
    WidgetHtmlComponent.prototype.createWidget = function () {
        var _this = this;
        this.widget['type'] = 'HTML';
        this.widgetService.createWidget(this.sectionId, this.widget)
            .subscribe(function (data) {
            if (data) {
                _this.widget = data;
                _this.router.navigate(['/component', _this.componentId]);
            }
        });
    };
    WidgetHtmlComponent.prototype.updateWidget = function () {
        var _this = this;
        this.widget['type'] = 'HTML';
        this.widgetService.updateWidget(this.widgetId, this.widget)
            .subscribe(function (data) {
            if (data) {
                _this.widget = data;
                _this.router.navigate(['/component', _this.componentId]);
            }
        });
    };
    WidgetHtmlComponent.prototype.deleteWidget = function () {
        var _this = this;
        this.widgetService.deleteWidget(this.widgetId)
            .subscribe(function (data) {
            if (data === 200) {
                _this.router.navigate(['/component', _this.componentId]);
            }
        });
    };
    return WidgetHtmlComponent;
}());
WidgetHtmlComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-html',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-html/widget-html.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-html/widget-html.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_shared_service__["a" /* SharedService */]) === "function" && _d || Object])
], WidgetHtmlComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=widget-html.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-text/widget-text.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-text/widget-text.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"widgetEdit;then edit else new\"></div>\n<ng-template #edit>\n  <nav class=\"navbar navbar-inverse navbar-fixed-top\">\n    <div class=\"container-fluid\">\n      <!--tick mark-->\n      <div class=\"navbar-brand pull-right right-margin-fix\">\n        <a (click)=\"updateWidget()\"\n           class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-ok-sign\"></span>\n        </a>\n      </div>\n      <!--tick mark-->\n      <div class=\"navbar-brand pull-left left-margin-fix\">\n        <a [routerLink]=\"['/component', componentId]\"\n           class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-chevron-left\"></span>\n        </a>\n      </div>\n      <!--heading on the nav bar-->\n      <p class=\"navbar-header pull-left\">\n        <a class=\"navbar-brand \">\n          <b>Widget Edit</b>\n        </a>\n      </p>\n    </div>\n  </nav>\n</ng-template>\n<ng-template #new>\n  <nav class=\"navbar navbar-inverse navbar-fixed-top\">\n    <div class=\"container-fluid\">\n      <!--tick mark-->\n      <div class=\"navbar-brand pull-right right-margin-fix\">\n        <a (click)=\"createWidget()\"\n           class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-ok-sign\"></span>\n        </a>\n      </div>\n      <!--tick mark-->\n      <div class=\"navbar-brand pull-left left-margin-fix\">\n        <a [routerLink]=\"['/component', componentId]\"\n           class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-chevron-left\"></span>\n        </a>\n      </div>\n      <!--heading on the nav bar-->\n      <p class=\"navbar-header pull-left\">\n        <a class=\"navbar-brand \">\n          <b>New Widget</b>\n        </a>\n      </p>\n    </div>\n  </nav>\n</ng-template>\n\n<div class=\"container-fluid\">\n  <form>\n    <div class=\"form-group\">\n      <label for=\"text\">\n        Text\n      </label>\n      <input [(ngModel)]=\"widget['text']\"\n             name=\"text\"\n             id=\"text\"\n             class=\"form-control\"\n             required />\n    </div>\n    <div class=\"form-group\">\n      <label for=\"row\">\n        Rows\n      </label>\n      <input [(ngModel)]=\"widget['rows']\"\n             name=\"row\"\n             id=\"row\"\n             class=\"form-control\"\n             type=\"number\"\n             required />\n    </div>\n    <div class=\"form-group\">\n      <label for=\"Name\">\n        Name\n      </label>\n      <input [(ngModel)]=\"widget['name']\"\n             type=\"text\"\n             class=\"form-control\"\n             id=\"Name\"\n             name=\"name\"\n             placeholder=\"Name\"\n             required />\n    </div>\n    <div class=\"form-group\">\n      <label for=\"placeholder\">\n        Placeholder\n      </label>\n      <input [(ngModel)]=\"widget['placeholder']\"\n             name=\"placeholder\"\n             id=\"placeholder\"\n             class=\"form-control\"\n             required/>\n    </div>\n    <div class=\"form-group\">\n      <div class=\"input-group\">\n        <input type=\"text\"\n               readonly\n               value=\"Formatted\"\n               class=\"form-control\"/>\n        <span class=\"input-group-addon\">\n            <input [(ngModel)]=\"widget['formatted']\"\n                   name=\"formatted\"\n                   type=\"checkbox\"/></span>\n      </div>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-text/widget-text.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetTextComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_shared_service__ = __webpack_require__("../../../../../src/app/services/shared.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WidgetTextComponent = (function () {
    function WidgetTextComponent(widgetService, activatedRoutes, router, sharedService) {
        this.widgetService = widgetService;
        this.activatedRoutes = activatedRoutes;
        this.router = router;
        this.sharedService = sharedService;
        this.widget = { 'name': '', 'type': 'TEXT', 'text': '', 'rows': '', 'placeholder': '', 'formatted': '' };
    }
    WidgetTextComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoutes.params.subscribe(function (params) {
            console.log(_this.sharedService.user);
            _this.componentId = params['cid'];
            _this.moduleId = params['mid'];
            _this.sectionId = params['sid'];
            _this.widgetId = params['wid'];
            _this.currentUser = _this.sharedService.user;
            if (_this.widgetId) {
                _this.widgetService.findWidgetById(_this.widgetId)
                    .subscribe(function (widget) {
                    _this.widget = widget;
                    _this.widgetEdit = true;
                });
            }
        });
    };
    WidgetTextComponent.prototype.createWidget = function () {
        var _this = this;
        this.widgetService.createWidget(this.sectionId, this.widget)
            .subscribe(function (data) {
            if (data) {
                _this.widget = data;
                _this.router.navigate(['/component', _this.componentId]);
            }
        });
    };
    WidgetTextComponent.prototype.updateWidget = function () {
        var _this = this;
        this.widgetService.updateWidget(this.widgetId, this.widget)
            .subscribe(function (data) {
            if (data) {
                _this.widget = data;
                _this.router.navigate(['/component', _this.componentId]);
            }
        });
    };
    WidgetTextComponent.prototype.deleteWidget = function () {
        var _this = this;
        this.widgetService.deleteWidget(this.widgetId)
            .subscribe(function (data) {
            if (data === 200) {
                _this.router.navigate(['/component', _this.componentId]);
            }
        });
    };
    return WidgetTextComponent;
}());
WidgetTextComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-text',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-text/widget-text.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-text/widget-text.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_shared_service__["a" /* SharedService */]) === "function" && _d || Object])
], WidgetTextComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=widget-text.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"widgetEdit;then edit else new\"></div>\n<ng-template #edit>\n  <nav class=\"navbar navbar-inverse navbar-fixed-top\">\n    <div class=\"container-fluid\">\n      <!--tick mark-->\n      <div class=\"navbar-brand pull-right right-margin-fix\">\n        <a (click)=\"updateWidget()\"\n           class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-ok-sign\"></span>\n        </a>\n      </div>\n      <!--tick mark-->\n      <div class=\"navbar-brand pull-left left-margin-fix\">\n        <a [routerLink]=\"['/component', componentId]\"\n           class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-chevron-left\"></span>\n        </a>\n      </div>\n      <!--heading on the nav bar-->\n      <p class=\"navbar-header pull-left\">\n        <a class=\"navbar-brand \">\n          <b>Widget Edit</b>\n        </a>\n      </p>\n    </div>\n  </nav>\n</ng-template>\n<ng-template #new>\n  <nav class=\"navbar navbar-inverse navbar-fixed-top\">\n    <div class=\"container-fluid\">\n      <!--tick mark-->\n      <div class=\"navbar-brand pull-right right-margin-fix\">\n        <a (click)=\"createWidget()\"\n           class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-ok-sign\"></span>\n        </a>\n      </div>\n      <!--tick mark-->\n      <div class=\"navbar-brand pull-left left-margin-fix\">\n        <a [routerLink]=\"['/component', componentId]\"\n           class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-chevron-left\"></span>\n        </a>\n      </div>\n      <!--heading on the nav bar-->\n      <p class=\"navbar-header pull-left\">\n        <a class=\"navbar-brand \">\n          <b>New Widget</b>\n        </a>\n      </p>\n    </div>\n  </nav>\n</ng-template>\n\n\n<div class=\"container-fluid\">\n  <form action=\"profile.html\" method=\"post\">\n    <div class=\"form-group\">\n      <label for=\"nameYoutube\">\n        Name\n      </label>\n      <input [(ngModel)]=\"widget['name']\"\n             name=\"nameYoutube\"\n             required\n             type=\"text\"\n             class=\"form-control\"\n             id=\"nameYoutube\"\n             placeholder=\"\">\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"textYoutube\">\n        Text\n      </label>\n      <input [(ngModel)]=\"widget['text']\"\n             name=\"textYoutube\"\n             required\n             type=\"text\"\n             class=\"form-control\"\n             id=\"textYoutube\"\n             placeholder=\"\">\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"urlYoutube\">\n        URL\n      </label>\n      <input [(ngModel)]=\"widget['url']\"\n             name=\"urlYoutube\"\n             required\n             type=\"text\"\n             class=\"form-control\"\n             id=\"urlYoutube\"\n             placeholder=\"https://www.youtube.com/watch?v=ue80QwXMRHg\">\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"widthYoutube\">\n        Width\n      </label>\n      <input [(ngModel)]=\"widget['width']\"\n             name=\"widthYoutube\"\n             required\n             type=\"text\"\n             class=\"form-control\"\n             id=\"widthYoutube\"\n             placeholder=\"\">\n    </div>\n\n    <div class=\"form-group\">\n      <a (click)=\"deleteWidget()\"\n         class=\"btn btn-danger btn-block \">\n        Delete\n      </a>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetYoutubeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_shared_service__ = __webpack_require__("../../../../../src/app/services/shared.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WidgetYoutubeComponent = (function () {
    function WidgetYoutubeComponent(widgetService, activatedRoutes, router, sharedService) {
        this.widgetService = widgetService;
        this.activatedRoutes = activatedRoutes;
        this.router = router;
        this.sharedService = sharedService;
        this.widget = {};
    }
    WidgetYoutubeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoutes.params.subscribe(function (params) {
            console.log(_this.sharedService.user);
            _this.componentId = params['cid'];
            _this.moduleId = params['mid'];
            _this.sectionId = params['sid'];
            _this.widgetId = params['wid'];
            _this.currentUser = _this.sharedService.user;
            if (_this.widgetId) {
                _this.widgetService.findWidgetById(_this.widgetId)
                    .subscribe(function (widget) {
                    _this.widget = widget;
                    _this.widgetEdit = true;
                });
            }
        });
    };
    WidgetYoutubeComponent.prototype.createWidget = function () {
        var _this = this;
        this.widget['type'] = 'YOUTUBE';
        this.widgetService.createWidget(this.sectionId, this.widget)
            .subscribe(function (data) {
            if (data) {
                _this.widget = data;
                _this.router.navigate(['/component', _this.componentId]);
            }
        });
    };
    WidgetYoutubeComponent.prototype.updateWidget = function () {
        var _this = this;
        this.widget['type'] = 'YOUTUBE';
        this.widgetService.updateWidget(this.widgetId, this.widget)
            .subscribe(function (data) {
            if (data) {
                _this.widget = data;
                _this.router.navigate(['/component', _this.componentId]);
            }
        });
    };
    WidgetYoutubeComponent.prototype.deleteWidget = function () {
        var _this = this;
        this.widgetService.deleteWidget(this.widgetId)
            .subscribe(function (data) {
            if (data === 200) {
                _this.router.navigate(['/component', _this.componentId]);
            }
        });
    };
    return WidgetYoutubeComponent;
}());
WidgetYoutubeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-youtube',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_shared_service__["a" /* SharedService */]) === "function" && _d || Object])
], WidgetYoutubeComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=widget-youtube.component.js.map

/***/ }),

/***/ "../../../../../src/app/directives/sortable.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SortableDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SortableDirective = (function () {
    function SortableDirective(el) {
        this.el = el;
        this.newIndexes = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    SortableDirective.prototype.ngAfterViewInit = function () {
        this.appSortable(this);
    };
    SortableDirective.prototype.appSortable = function (refe) {
        jQuery(this.el.nativeElement).sortable({
            axis: 'y',
            start: function (event, ui) {
                console.log('Old position: ' + ui.item.index());
                refe.initialIndex = ui.item.index();
            },
            stop: function (event, ui) {
                console.log('New position: ' + ui.item.index());
                refe.newIndexes.emit({
                    startIndex: refe.initialIndex,
                    endIndex: ui.item.index()
                });
            }
        });
    };
    return SortableDirective;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], SortableDirective.prototype, "newIndexes", void 0);
SortableDirective = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Directive */])({
        selector: '[appYSortable]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _a || Object])
], SortableDirective);

var _a;
//# sourceMappingURL=sortable.directive.js.map

/***/ }),

/***/ "../../../../../src/app/directives/xsortable.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return xSortableDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var xSortableDirective = (function () {
    function xSortableDirective(el) {
        this.el = el;
        this.newIndexes = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    xSortableDirective.prototype.ngAfterViewInit = function () {
        this.appSortable(this);
    };
    xSortableDirective.prototype.appSortable = function (refe) {
        jQuery(this.el.nativeElement).sortable({
            axis: 'x',
            start: function (event, ui) {
                console.log('Old position: ' + ui.item.index());
                refe.initialIndex = ui.item.index();
            },
            stop: function (event, ui) {
                console.log('New position: ' + ui.item.index());
                refe.newIndexes.emit({
                    startIndex: refe.initialIndex,
                    endIndex: ui.item.index()
                });
            }
        });
    };
    return xSortableDirective;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], xSortableDirective.prototype, "newIndexes", void 0);
xSortableDirective = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Directive */])({
        selector: '[appXSortable]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _a || Object])
], xSortableDirective);

var _a;
//# sourceMappingURL=xsortable.directive.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        return this.userService.loggedIn();
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__user_service_client__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=auth-guard.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/component.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// injecting service into component
var ComponentService = (function () {
    function ComponentService(http) {
        this.http = http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
    }
    ComponentService.prototype.findAllComponent = function () {
        var url = this.baseUrl + '/api/component';
        return this.http.get(url)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    ComponentService.prototype.createComponent = function (component) {
        var url = this.baseUrl + '/api/component';
        return this.http.post(url, component)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    ComponentService.prototype.findComponentById = function (componentId) {
        var url = this.baseUrl + '/api/component/' + componentId;
        return this.http.get(url)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    ComponentService.prototype.updateComponent = function (componentId, component) {
        var url = this.baseUrl + '/api/component/' + componentId;
        return this.http.put(url, component)
            .map(function (res) {
            var data = res.status;
            return data;
        });
    };
    ComponentService.prototype.deleteComponent = function (componentId) {
        var url = this.baseUrl + '/api/component/' + componentId;
        return this.http.delete(url)
            .map(function (res) {
            var data = res.status;
            return data;
        });
    };
    return ComponentService;
}());
ComponentService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]) === "function" && _a || Object])
], ComponentService);

var _a;
//# sourceMappingURL=component.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/module.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModuleService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// injecting service into module
var ModuleService = (function () {
    function ModuleService(http) {
        this.http = http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
    }
    ModuleService.prototype.createModule = function (componentId, module) {
        var url = this.baseUrl + '/api/component/' + componentId + '/module';
        return this.http.post(url, module)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    ModuleService.prototype.findModulesByComponentId = function (componentid) {
        var url = this.baseUrl + '/api/component/' + componentid + '/module';
        return this.http.get(url)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    ModuleService.prototype.findModuleById = function (moduleId) {
        var url = this.baseUrl + '/api/module/' + moduleId;
        return this.http.get(url)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    ModuleService.prototype.updateModule = function (moduleId, module) {
        var url = this.baseUrl + '/api/module/' + moduleId;
        return this.http.put(url, module)
            .map(function (res) {
            var data = res.status;
            return data;
        });
    };
    ModuleService.prototype.deleteModule = function (moduleId) {
        var url = this.baseUrl + '/api/module/' + moduleId;
        return this.http.delete(url)
            .map(function (res) {
            var data = res.status;
            return data;
        });
    };
    ModuleService.prototype.updateModulePosition = function (componentId, initial, final) {
        var url = this.baseUrl + '/api/component/' + componentId + '/module?initial='
            + initial + '&final=' + final;
        return this.http.put(url, null)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    return ModuleService;
}());
ModuleService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]) === "function" && _a || Object])
], ModuleService);

var _a;
//# sourceMappingURL=module.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/section.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SectionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// injecting service into module
var SectionService = (function () {
    function SectionService(http) {
        this.http = http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
    }
    SectionService.prototype.createSection = function (moduleId, section) {
        var url = this.baseUrl + '/api/module/' + moduleId + '/section';
        return this.http.post(url, section)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    SectionService.prototype.findSectionsByModuleId = function (moduleid) {
        var url = this.baseUrl + '/api/module/' + moduleid + '/section';
        return this.http.get(url)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    SectionService.prototype.findSectionById = function (sectionId) {
        var url = this.baseUrl + '/api/section/' + sectionId;
        return this.http.get(url)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    SectionService.prototype.updateSection = function (sectionId, section) {
        var url = this.baseUrl + '/api/section/' + sectionId;
        return this.http.put(url, section)
            .map(function (res) {
            var data = res.status;
            return data;
        });
    };
    SectionService.prototype.deleteSection = function (sectionId) {
        var url = this.baseUrl + '/api/section/' + sectionId;
        return this.http.delete(url)
            .map(function (res) {
            var data = res.status;
            return data;
        });
    };
    SectionService.prototype.updateSectionPosition = function (moduleId, initial, final) {
        var url = this.baseUrl + '/api/module/' + moduleId + '/section?initial='
            + initial + '&final=' + final;
        return this.http.put(url, null)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    return SectionService;
}());
SectionService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]) === "function" && _a || Object])
], SectionService);

var _a;
//# sourceMappingURL=section.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/shared.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SharedService = (function () {
    function SharedService() {
    }
    return SharedService;
}());
SharedService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
], SharedService);

//# sourceMappingURL=shared.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/test.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TestService = (function () {
    function TestService(_http) {
        this._http = _http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
    }
    TestService.prototype.findAllMessages = function () {
        console.log(this.baseUrl);
        return this._http.get(this.baseUrl + '/api/test')
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    TestService.prototype.createMessage = function (message) {
        var obj = {
            message: message
        };
        return this._http.post(this.baseUrl + '/api/test', obj)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    TestService.prototype.deleteMessage = function (messageId) {
        return this._http.delete(this.baseUrl + '/api/test/' + messageId)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    return TestService;
}());
TestService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], TestService);

var _a;
//# sourceMappingURL=test.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/user.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_shared_service__ = __webpack_require__("../../../../../src/app/services/shared.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// injecting service into module
var UserService = (function () {
    function UserService(http, sharedService, router) {
        this.http = http;
        this.sharedService = sharedService;
        this.router = router;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]();
    }
    UserService.prototype.login = function (username, password) {
        this.options.withCredentials = true; // jga
        var body = {
            username: username,
            password: password
        };
        return this.http.post(this.baseUrl + '/api/login', body, this.options)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    UserService.prototype.logout = function () {
        this.options.withCredentials = true;
        return this.http.post(this.baseUrl + '/api/logout', '', this.options)
            .map(function (res) {
            var data = res;
        });
    };
    UserService.prototype.register = function (user) {
        this.options.withCredentials = true;
        return this.http.post(this.baseUrl + '/api/register', user, this.options)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    UserService.prototype.loggedIn = function () {
        var _this = this;
        this.options.withCredentials = true;
        return this.http.post(this.baseUrl + '/api/loggedIn', '', this.options)
            .map(function (res) {
            var user = res.json();
            if (user !== 0) {
                _this.sharedService.user = user; // setting user so as to share with all components
                return true;
            }
            else {
                _this.router.navigate(['/login']);
                return false;
            }
        });
    };
    UserService.prototype.createUser = function (user) {
        var url = this.baseUrl + '/api/user';
        return this.http.post(url, user)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    UserService.prototype.findUserById = function (userId) {
        var url = this.baseUrl + '/api/user/' + userId;
        return this.http.get(url)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    UserService.prototype.findUserByUsername = function (username) {
        var url = this.baseUrl + '/api/user?userName=' + username;
        return this.http.get(url)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    UserService.prototype.updateUser = function (userId, user) {
        var url = this.baseUrl + '/api/user/' + userId;
        return this.http.put(url, user)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    UserService.prototype.deleteUser = function (userId) {
        var url = this.baseUrl + '/api/user/' + userId;
        return this.http.delete(url)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    return UserService;
}());
UserService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_shared_service__["a" /* SharedService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */]) === "function" && _c || Object])
], UserService);

var _a, _b, _c;
//# sourceMappingURL=user.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/widget.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// injecting service into module
var WidgetService = (function () {
    function WidgetService(http) {
        this.http = http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
    }
    WidgetService.prototype.createWidget = function (sectionId, widget) {
        var url = this.baseUrl + '/api/section/' + sectionId + '/widget';
        return this.http.post(url, widget)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    WidgetService.prototype.findWidgetsBySectionId = function (sectionId) {
        var url = this.baseUrl + '/api/section/' + sectionId + '/widget';
        return this.http.get(url)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    WidgetService.prototype.findWidgetById = function (widgetId) {
        var url = this.baseUrl + '/api/widget/' + widgetId;
        return this.http.get(url)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    WidgetService.prototype.updateWidget = function (widgetId, widget) {
        var url = this.baseUrl + '/api/widget/' + widgetId;
        return this.http.put(url, widget)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    WidgetService.prototype.deleteWidget = function (widgetId) {
        var url = this.baseUrl + '/api/widget/' + widgetId;
        return this.http.delete(url)
            .map(function (res) {
            var data = res.status;
            return data;
        });
    };
    WidgetService.prototype.updateWidgetPosition = function (sectionId, initial, final) {
        var url = this.baseUrl + '/api/section/' + sectionId + '/widget?initial='
            + initial + '&final=' + final;
        return this.http.put(url, null)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    return WidgetService;
}());
WidgetService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]) === "function" && _a || Object])
], WidgetService);

var _a;
//# sourceMappingURL=widget.service.client.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    baseUrl: ''
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map