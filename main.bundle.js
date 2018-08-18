webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n\n<div class=\"row\">\n  <div class=\"col-sm-8 \">\n<img class=\"img-fluid\" style=\" border-radius:15px;\" src=\"../assets/images/about.jpg\" alt=\"\"> </div>\n<div class=\"col-sm -4\"><p>we are the makers of fine socks using hi tech computerised machines. \n  we look towards making designs beyond the convention and always ready for new challenges.\n  we work day and night for producing best quality experience for customers. <br>\n  we have been in this business since 1993 and still adapting the future ready techniques.\n  <br>\n  no matter who you are ,whether customer, supplier, retailer or a manufaturer, We invite you to join us and be a part of this experience \n</p></div>"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-about',
            template: __webpack_require__("./src/app/about/about.component.html"),
            styles: [__webpack_require__("./src/app/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/ankle/ankle.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/ankle/ankle.component.html":
/***/ (function(module, exports) {

module.exports = "<p>working</p>"

/***/ }),

/***/ "./src/app/ankle/ankle.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnkleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AnkleComponent = /** @class */ (function () {
    function AnkleComponent() {
    }
    AnkleComponent.prototype.ngOnInit = function () {
    };
    AnkleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-ankle',
            template: __webpack_require__("./src/app/ankle/ankle.component.html"),
            styles: [__webpack_require__("./src/app/ankle/ankle.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AnkleComponent);
    return AnkleComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__about_about_component__ = __webpack_require__("./src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__contact_contact_component__ = __webpack_require__("./src/app/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ankle_ankle_component__ = __webpack_require__("./src/app/ankle/ankle.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__uniform_uniform_component__ = __webpack_require__("./src/app/uniform/uniform.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__premium_premium_component__ = __webpack_require__("./src/app/premium/premium.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__kids_kids_component__ = __webpack_require__("./src/app/kids/kids.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__womens_womens_component__ = __webpack_require__("./src/app/womens/womens.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__mens_mens_component__ = __webpack_require__("./src/app/mens/mens.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var appRoutes = [{ path: 'home', component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_3__about_about_component__["a" /* AboutComponent */] },
    { path: 'contact', component: __WEBPACK_IMPORTED_MODULE_4__contact_contact_component__["a" /* ContactComponent */] },
    { path: 'uniform', component: __WEBPACK_IMPORTED_MODULE_6__uniform_uniform_component__["a" /* UniformComponent */] },
    { path: 'premium', component: __WEBPACK_IMPORTED_MODULE_7__premium_premium_component__["a" /* PremiumComponent */] },
    { path: 'ankle', component: __WEBPACK_IMPORTED_MODULE_5__ankle_ankle_component__["a" /* AnkleComponent */] },
    { path: 'kids', component: __WEBPACK_IMPORTED_MODULE_8__kids_kids_component__["a" /* KidsComponent */] },
    { path: 'womens', component: __WEBPACK_IMPORTED_MODULE_9__womens_womens_component__["a" /* WomensComponent */] },
    { path: 'mens', component: __WEBPACK_IMPORTED_MODULE_10__mens_mens_component__["a" /* MensComponent */] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(appRoutes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n.row {\r\n    margin-left: 0px;\r\n    margin-right: 0px;\r\n    }\r\n\r\n  \r\n.btn{\r\n    border-radius: 25px;\r\n}\r\n\r\n  \r\nunform{\r\n    background-color: #78404A;\r\n\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container justify-content-center text-center\" detect-scroll (onScroll)=\"handleScroll($event)\" [bottomOffset]=\"1700\" [topOffset]=\"300\">\n\n<!-- BR industries logo and description  -->\n\n<div class=\"text-center\">\n\n       <a class=\"nav-link nav-item display-4 text-dark\"  routerLink=\"/home\">      <h3 class=\"col-3\" style=\"color:#176776\">BR-industries</h3>\n         </a>\n</div>\n              \n\n                  <!-- BR industries logo and description ends  -->\n\n<!-- navbar start-->\n\n\n<nav   class=\"navbar navbar-expand-lg navbar-light animated\" [ngClass]=\"{fadeInUp:scrolled=='yes'}\" >\n    \n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse justify-content-center\" id=\"navbarNav\">\n      <ul class=\"navbar-nav \">\n        <li class=\"nav-item \">\n          <a class=\"nav-link animated\" [ngClass]=\"{bounce:clicked=='home'}\" (click)=\"onclick('home')\" routerLink=\"/home\"> <strong>Home</strong></a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link animated\" [ngClass]=\"{bounce:clicked=='about'}\" (click)=\"onclick('about')\" routerLink=\"/about\"><strong>About</strong></a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link animated\" [ngClass]=\"{bounce:clicked=='contact'}\" (click)=\"onclick('contact')\" routerLink=\"/contact\"><strong>Contact</strong></a>\n        </li>\n        \n      </ul>\n    </div>\n  </nav>\n\n\n   <!-- navbar end -->\n       <div class=\"animated\" [ngClass]=\"{fadeInUp:clicked!='x'}\" style=\"margin-top:30px; margin-bottom:30px;\">\n          <router-outlet ></router-outlet>\n       </div>\n   \n      \n    \n   \n\n\n<!-- footer start--> \n\n  <div class=\"jumbotron footer text-left animated\" [ngClass]=\"{fadeInUp:scrolled=='yes'}\" >\n  <h3>B.R Industires</h3> <br>\n  <p>Shastri Nagar,Delhi,India</p>\n</div>\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.clicked = "x";
        this.scrolled = 'no';
    }
    AppComponent.prototype.onclick = function (selected) {
        var _this = this;
        this.clicked = selected;
        setTimeout(function () { _this.clicked = 'x'; }, 1000);
    };
    AppComponent.prototype.handleScroll = function (event) {
        if (event.isReachingBottom) {
            this.scrolled = 'yes';
        }
        if (event.isReachingTop) {
            this.scrolled = 'no';
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], AppComponent.prototype, "clicked", void 0);
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")],
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__about_about_component__ = __webpack_require__("./src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__contact_contact_component__ = __webpack_require__("./src/app/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__back_directive__ = __webpack_require__("./src/app/back.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__uniform_uniform_component__ = __webpack_require__("./src/app/uniform/uniform.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__premium_premium_component__ = __webpack_require__("./src/app/premium/premium.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ankle_ankle_component__ = __webpack_require__("./src/app/ankle/ankle.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__kids_kids_component__ = __webpack_require__("./src/app/kids/kids.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__mens_mens_component__ = __webpack_require__("./src/app/mens/mens.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__womens_womens_component__ = __webpack_require__("./src/app/womens/womens.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ngx_scroll_event__ = __webpack_require__("./node_modules/ngx-scroll-event/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ngx_scroll_event___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_ngx_scroll_event__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__towel_towel_component__ = __webpack_require__("./src/app/towel/towel.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_4__about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_5__contact_contact_component__["a" /* ContactComponent */],
                __WEBPACK_IMPORTED_MODULE_7__back_directive__["a" /* BackDirective */],
                __WEBPACK_IMPORTED_MODULE_8__uniform_uniform_component__["a" /* UniformComponent */],
                __WEBPACK_IMPORTED_MODULE_9__premium_premium_component__["a" /* PremiumComponent */],
                __WEBPACK_IMPORTED_MODULE_10__ankle_ankle_component__["a" /* AnkleComponent */],
                __WEBPACK_IMPORTED_MODULE_11__kids_kids_component__["a" /* KidsComponent */],
                __WEBPACK_IMPORTED_MODULE_12__mens_mens_component__["a" /* MensComponent */],
                __WEBPACK_IMPORTED_MODULE_13__womens_womens_component__["a" /* WomensComponent */],
                __WEBPACK_IMPORTED_MODULE_15__towel_towel_component__["a" /* TowelComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_6__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_14_ngx_scroll_event__["ScrollEventModule"],
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/back.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BackDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BackDirective = /** @class */ (function () {
    function BackDirective(elref, renderer) {
        this.elref = elref;
        this.renderer = renderer;
    }
    BackDirective.prototype.ngOnInit = function () {
        this.renderer.setStyle(this.elref.nativeElement, 'background-image', 'url(../assets/images/texture2.jpg)');
        // this.renderer.setStyle(this.elref.nativeElement,'background-repeat','repeat-y');
    };
    BackDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[appBack]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"]])
    ], BackDirective);
    return BackDirective;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  contact works!\n</p>\n"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__("./src/app/contact/contact.component.html"),
            styles: [__webpack_require__("./src/app/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ".col-6,.col-12{\r\n    padding:2px 2px 2px 2px;\r\n}\r\n.img-fluid{ border:1px solid blue;\r\n    border-radius:15px;\r\n    \r\n}\r\nrow1.img-fluid{ border:1px solid blue;\r\n    border-radius:15px;\r\n    height:30vmin; width:100%;\r\n}\r\n.row1.col-12{\r\n    position: relative;\r\n    text-align: center;\r\n    color: white;\r\n}\r\n/* Bottom left text */\r\n.leftOwn{\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n    color:white;\r\n    font-size: 5vmin;\r\n    font-weight: bolder;\r\n\r\n}\r\n.fadeInUp{\r\n    visibility:visible;\r\n}"

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div detect-scroll (onScroll)=\"handleScroll($event)\" [bottomOffset]=\"1700\" [topOffset]=\"300\">\r\n\r\n\r\n<div class=\"row row1 \" ><div class=\"col-12\">\r\n<img class=\"img-fluid\" src=\".//assets/images/socks3.jpg\" style=\"margin-top:30px; margin-bottom:30px;  \">\r\n<p class=\"leftOwn \" ><em>select the best socks</em></p>\r\n</div></div>\r\n\r\n<p style=\"font-family: 'Roboto', sans-serif; font-size:10vmin; color:#017177; text-align:left;\">Our Products</p>\r\n\r\n<div *ngIf=\"scrolled=='yes'\">\r\n<div class=\"row animated \" [ngClass]=\"{fadeInUp:scrolled=='yes'}\"  >\r\n    <div class=\"col-sm-4 col-xs-4 col-6\"><a><img routerLink=\"/kids\" class=\"img-fluid\" src=\".//assets/images/socks3.jpg\" alt=\"\"></a></div>\r\n    <div class=\"col-sm-4 col-xs-4 col-6\"><a><img class=\"img-fluid\" src=\".//assets/images/socks3.jpg\" alt=\"\"></a></div>\r\n    <div class=\"col-sm-4 col-xs-4 col-12\"><a><img class=\"img-fluid\" src=\".//assets/images/socks3.jpg\" alt=\"\"></a></div>\r\n</div>\r\n<div class=\"row animated \" [ngClass]=\"{fadeInUp:scrolled=='yes'}\"  >\r\n    <div class=\"col-sm-4 col-xs-4 col-6\"><p>Ladies socks</p></div>\r\n    <div class=\"col-sm-4 col-xs-4 col-6\"><p>Men's socks</p></div>\r\n    <div class=\"col-sm-4 col-xs-4 col-12\"><p>Kid's socks</p></div>\r\n</div>\r\n<div class=\"row animated \" [ngClass]=\"{fadeInUp:scrolled=='yes'}\">\r\n    <div class=\"col-sm-4 col-xs-4 col-6\"><a><img class=\"img-fluid\" src=\".//assets/images/socks3.jpg\" alt=\"\"></a></div>\r\n    <div class=\"col-sm-4 col-xs-4 col-6\"><a><img class=\"img-fluid\" src=\".//assets/images/socks3.jpg\" alt=\"\"></a></div>\r\n    <div class=\"col-sm-4 col-xs-4 col-12\"><a><img class=\"img-fluid\" src=\".//assets/images/socks3.jpg\" alt=\"\"></a></div>\r\n</div>\r\n<div class=\"row animated \" [ngClass]=\"{fadeInUp:scrolled=='yes'}\"  >\r\n    <div class=\"col-sm-4 col-xs-4 col-6\"><p>Ankle socks</p></div>\r\n    <div class=\"col-sm-4 col-xs-4 col-6\"><p>Premium socks</p></div>\r\n    <div class=\"col-sm-4 col-xs-4 col-12\"><p>Towel socks</p></div>\r\n</div>\r\n</div>\r\n\r\n<div *ngIf=\"scrolled=='yes'\">\r\n<div class=\"row animated \" [ngClass]=\"{fadeInUp:scrolled=='yes'}\"><div class=\"col-12\">\r\n    <img class=\"img-fluid\" src=\".//assets/images/socks3.jpg\" style=\"margin-top:30px; margin-bottom:30px; \">\r\n    </div></div>\r\n</div>\r\n\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.scrolled = "no";
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.handleScroll = function (event) {
        if (event.isReachingBottom) {
            this.scrolled = 'yes';
        }
        if (event.isReachingTop) {
            this.scrolled = 'no';
        }
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/kids/kids.component.css":
/***/ (function(module, exports) {

module.exports = "div.h6{\r\n    line-height: 50px;\r\n}\r\nh6{\r\n    font-size:5vmin;\r\n}\r\n"

/***/ }),

/***/ "./src/app/kids/kids.component.html":
/***/ (function(module, exports) {

module.exports = "<img src=\"../assets/images/uniform_symbol.jpg\" style=\" z-index:100; position:absolute; right:14vw; margin-top:-27px; height:auto; width:8vw;\"  >\n\n\n<div class=\"row\" >\n  <div class=\"col-xs-6\"><img style=\"border-radius:15px;\n    height:auto; width:80%;\" src=\"../assets/images/socks3.jpg\"></div>\n  \n  \n  \n  \n  \n    <div class=\"col-xs-6\" style=\"margin-left:30px;\"> \n\n    <div class=\"row \">\n      <h6 style=\"color:#176776;\">fabric</h6></div>\n      <div class=\"row\">\n      <h3>Cotton</h3>\n    </div>\n    <div class=\"row\"><h6 style=\"color:#176776;\">price:</h6></div>\n    <div class=\"row\">\n      <h2>Rs. 98 per pair </h2></div>\n      <div class=\"row\">\n    <h4>Rs. 9000 per 100 pair</h4></div>\n    <div class=\"row\"><h6 style=\"color:#176776;\">Call/whatsapp for order or  any queries:</h6></div>\n    <div class=\"row\">\n      <h2>+919873512345</h2></div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/kids/kids.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KidsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var KidsComponent = /** @class */ (function () {
    function KidsComponent() {
    }
    KidsComponent.prototype.ngOnInit = function () {
    };
    KidsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-kids',
            template: __webpack_require__("./src/app/kids/kids.component.html"),
            styles: [__webpack_require__("./src/app/kids/kids.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], KidsComponent);
    return KidsComponent;
}());



/***/ }),

/***/ "./src/app/mens/mens.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/mens/mens.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  mens works!\n</p>\n"

/***/ }),

/***/ "./src/app/mens/mens.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MensComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MensComponent = /** @class */ (function () {
    function MensComponent() {
    }
    MensComponent.prototype.ngOnInit = function () {
    };
    MensComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-mens',
            template: __webpack_require__("./src/app/mens/mens.component.html"),
            styles: [__webpack_require__("./src/app/mens/mens.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MensComponent);
    return MensComponent;
}());



/***/ }),

/***/ "./src/app/premium/premium.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/premium/premium.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  premium works!\n</p>\n"

/***/ }),

/***/ "./src/app/premium/premium.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PremiumComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PremiumComponent = /** @class */ (function () {
    function PremiumComponent() {
    }
    PremiumComponent.prototype.ngOnInit = function () {
    };
    PremiumComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-premium',
            template: __webpack_require__("./src/app/premium/premium.component.html"),
            styles: [__webpack_require__("./src/app/premium/premium.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PremiumComponent);
    return PremiumComponent;
}());



/***/ }),

/***/ "./src/app/towel/towel.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/towel/towel.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  towel works!\n</p>\n"

/***/ }),

/***/ "./src/app/towel/towel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TowelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TowelComponent = /** @class */ (function () {
    function TowelComponent() {
    }
    TowelComponent.prototype.ngOnInit = function () {
    };
    TowelComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-towel',
            template: __webpack_require__("./src/app/towel/towel.component.html"),
            styles: [__webpack_require__("./src/app/towel/towel.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TowelComponent);
    return TowelComponent;
}());



/***/ }),

/***/ "./src/app/uniform/uniform.component.css":
/***/ (function(module, exports) {

module.exports = ".image { \r\n    position: relative; \r\n    width: 100%; /* for IE 6 */\r\n }\r\n \r\n .image2 { \r\n    position: absolute; \r\n    height:400px;\r\n    width:150px;\r\n    top: 0; \r\n    right: 60px; \r\n     \r\n }\r\n"

/***/ }),

/***/ "./src/app/uniform/uniform.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container animated fadeInUp \"   style=\" border-radius: 25px; height:800px;  -webkit-animation-duration: 0.6s;\">\n\n\n<div class=\"row\">\n    <div class=\"col\">\n        <div class=\"card\" >\n            <img class=\"card-img-top\" src=\" ../assets/images/socks3.jpg\" alt=\"Card image cap\">\n            <div class=\"card-body\">\n              <p class=\"card-text\">socks</p>\n            </div>\n          </div>\n    </div>\n    <div class=\"col\">\n        <div class=\"card\" >\n            <img class=\"card-img-top\" src=\" ../assets/images/socks3.jpg\" alt=\"Card image cap\">\n            <div class=\"card-body\">\n              <p class=\"card-text\">socks</p>\n            </div>\n          </div>\n    </div>\n    <div class=\"col\">\n        <div class=\"card\" >\n            <img class=\"card-img-top\" src=\" ../assets/images/socks3.jpg\" alt=\"Card image cap\">\n            <div class=\"card-body\">\n              <p class=\"card-text\">socks</p>\n            </div>\n          </div>\n    </div>\n</div>\n<div class=\"row\">\n    <div class=\"col\">\n        <div class=\"card\" >\n            <img class=\"card-img-top\" src=\" ../assets/images/socks3.jpg\" alt=\"Card image cap\">\n            <div class=\"card-body\">\n              <p class=\"card-text\">socks</p>\n            </div>\n          </div>\n    </div>\n    <div class=\"col\">\n        <div class=\"card\" >\n            <img class=\"card-img-top\" src=\" ../assets/images/socks3.jpg\" alt=\"Card image cap\">\n            <div class=\"card-body\">\n              <p class=\"card-text\">socks</p>\n            </div>\n          </div>\n    </div>\n    <div class=\"col\">\n        <div class=\"card\" >\n            <img class=\"card-img-top\" src=\" ../assets/images/socks3.jpg\" alt=\"Card image cap\">\n            <div class=\"card-body\">\n              <p class=\"card-text\">socks</p>\n            </div>\n          </div>\n    </div>\n</div>\n<div class=\"row\">\n    <div class=\"col\">\n        <div class=\"card\" >\n            <img class=\"card-img-top\" src=\" ../assets/images/socks3.jpg\" alt=\"Card image cap\">\n            <div class=\"card-body\">\n              <p class=\"card-text\">socks</p>\n            </div>\n          </div>\n    </div>\n    <div class=\"col\">\n        <div class=\"card\" >\n            <img class=\"card-img-top\" src=\" ../assets/images/socks3.jpg\" alt=\"Card image cap\">\n            <div class=\"card-body\">\n              <p class=\"card-text\">socks</p>\n            </div>\n          </div>\n    </div>\n    <div class=\"col\">\n        <div class=\"card\" >\n            <img class=\"card-img-top\" src=\" ../assets/images/socks3.jpg\" alt=\"Card image cap\">\n            <div class=\"card-body\">\n              <p class=\"card-text\">socks</p>\n            </div>\n          </div>\n    </div>\n</div>\n\n</div>"

/***/ }),

/***/ "./src/app/uniform/uniform.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UniformComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UniformComponent = /** @class */ (function () {
    function UniformComponent() {
    }
    UniformComponent.prototype.ngOnInit = function () {
    };
    UniformComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-uniform',
            template: __webpack_require__("./src/app/uniform/uniform.component.html"),
            styles: [__webpack_require__("./src/app/uniform/uniform.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UniformComponent);
    return UniformComponent;
}());



/***/ }),

/***/ "./src/app/womens/womens.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/womens/womens.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  womens works!\n</p>\n"

/***/ }),

/***/ "./src/app/womens/womens.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WomensComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WomensComponent = /** @class */ (function () {
    function WomensComponent() {
    }
    WomensComponent.prototype.ngOnInit = function () {
    };
    WomensComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-womens',
            template: __webpack_require__("./src/app/womens/womens.component.html"),
            styles: [__webpack_require__("./src/app/womens/womens.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WomensComponent);
    return WomensComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map