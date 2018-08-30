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

module.exports = "\r\nh2 {\r\n\tcolor: #000;\r\n\tfont-size: 26px;\r\n\tfont-weight: 300;\r\n\ttext-align: center;\r\n\ttext-transform: uppercase;\r\n\tposition: relative;\r\n\tmargin: 30px 0 80px;\r\n}\r\nh2 b {\r\n\tcolor: #ffc000;\r\n}\r\nh2::after {\r\n\tcontent: \"\";\r\n\twidth: 100px;\r\n\tposition: absolute;\r\n\tmargin: 0 auto;\r\n\theight: 4px;\r\n\tbackground: rgba(0, 0, 0, 0.2);\r\n\tleft: 0;\r\n\tright: 0;\r\n\tbottom: -20px;\r\n}\r\n.carousel {\r\n\tmargin: 50px auto;\r\n\tpadding: 0 70px;\r\n}\r\n.carousel .item {\r\n\tmin-height: 330px;\r\n    text-align: center;\r\n\toverflow: hidden;\r\n}\r\n.carousel .item .img-box {\r\n\theight: 200px;\r\n\twidth: 100%;\r\n\tposition: relative;\r\n}\r\n.carousel .item img {\t\r\n\tmax-width: 100%;\r\n\tmax-height: 100%;\r\n\tdisplay: inline-block;\r\n\tposition: absolute;\r\n\tbottom: 0;\r\n\tmargin: 0 auto;\r\n\tleft: 0;\r\n\tright: 0;\r\n}\r\n.carousel .item h4 {\r\n\tfont-size: 18px;\r\n\tmargin: 10px 0;\r\n}\r\n.carousel .item .btn {\r\n\tcolor: #333;\r\n    border-radius: 0;\r\n    font-size: 11px;\r\n    text-transform: uppercase;\r\n    font-weight: bold;\r\n    background: none;\r\n    border: 1px solid #ccc;\r\n    padding: 5px 10px;\r\n    margin-top: 5px;\r\n    line-height: 16px;\r\n}\r\n.carousel .item .btn:hover, .carousel .item .btn:focus {\r\n\tcolor: #fff;\r\n\tbackground: #000;\r\n\tborder-color: #000;\r\n\t-webkit-box-shadow: none;\r\n\t        box-shadow: none;\r\n}\r\n.carousel .item .btn i {\r\n\tfont-size: 14px;\r\n    font-weight: bold;\r\n    margin-left: 5px;\r\n}\r\n.carousel .thumb-wrapper {\r\n\ttext-align: center;\r\n}\r\n.carousel .thumb-content {\r\n\tpadding: 15px;\r\n}\r\n.carousel .carousel-control {\r\n\theight: 100px;\r\n    width: 40px;\r\n    background: none;\r\n    margin: auto 0;\r\n    background: rgba(0, 0, 0, 0.2);\r\n}\r\n.carousel .carousel-control i {\r\n    font-size: 30px;\r\n    position: absolute;\r\n    top: 50%;\r\n    display: inline-block;\r\n    margin: -16px 0 0 0;\r\n    z-index: 5;\r\n    left: 0;\r\n    right: 0;\r\n    color: rgba(0, 0, 0, 0.8);\r\n    text-shadow: none;\r\n    font-weight: bold;\r\n}\r\n.carousel .item-price {\r\n\tfont-size: 13px;\r\n\tpadding: 2px 0;\r\n}\r\n.carousel .item-price strike {\r\n\tcolor: #999;\r\n\tmargin-right: 5px;\r\n}\r\n.carousel .item-price span {\r\n\tcolor: #86bd57;\r\n\tfont-size: 110%;\r\n}\r\n.carousel .carousel-control.left i {\r\n\tmargin-left: -3px;\r\n}\r\n.carousel .carousel-control.left i {\r\n\tmargin-right: -3px;\r\n}\r\n.carousel .carousel-indicators {\r\n\tbottom: -50px;\r\n}\r\n.carousel-indicators li, .carousel-indicators li.active {\r\n\twidth: 10px;\r\n\theight: 10px;\r\n\tmargin: 4px;\r\n\tborder-radius: 50%;\r\n\tborder-color: transparent;\r\n}\r\n.carousel-indicators li {\t\r\n\tbackground: rgba(0, 0, 0, 0.2);\r\n}\r\n.carousel-indicators li.active {\t\r\n\tbackground: rgba(0, 0, 0, 0.6);\r\n}\r\n.star-rating li {\r\n\tpadding: 0;\r\n}\r\n.star-rating i {\r\n\tfont-size: 14px;\r\n\tcolor: #ffc000;\r\n}"

/***/ }),

/***/ "./src/app/ankle/ankle.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-md-12\">\r\n\t\t\t<h2>ankle <b>socks</b></h2>\r\n\t\t\t<div id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\" data-interval=\"0\">\r\n\t\t\t<!-- Carousel indicators -->\r\n\t\t\t<ol class=\"carousel-indicators\">\r\n\t\t\t\t<li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\"></li>\r\n\t\t\t\t<li data-target=\"#myCarousel\" data-slide-to=\"1\"></li>\r\n\t\t\t\t<li data-target=\"#myCarousel\" data-slide-to=\"2\"></li>\r\n\t\t\t</ol>   \r\n\t\t\t<!-- Wrapper for carousel items -->\r\n\t\t\t<div class=\"carousel-inner\">\r\n\t\t\t\t<div class=\"item carousel-item active\">\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-sm-3\">\r\n\t\t\t\t\t\t\t<div class=\"thumb-wrapper\">\r\n\t\t\t\t\t\t\t\t<div class=\"img-box zoom\">\r\n\t\t\t\t\t\t\t\t\t<img src=\"../assets/images/socks/ankle/ankle1.jpg\" class=\"img-responsive img-fluid\" alt=\"\">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<!-- <div class=\"thumb-content\">\r\n\t\t\t\t\t\t\t\t\t<h4>Apple iPad</h4>\r\n\t\t\t\t\t\t\t\t\t<p class=\"item-price\">$400.00 <span>$369.00</span></p>\r\n\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"btn btn-primary\">Add to Cart</a>\r\n\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t -->\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-sm-3\">\r\n\t\t\t\t\t\t\t<div class=\"thumb-wrapper\">\r\n\t\t\t\t\t\t\t\t<div class=\"img-box zoom\">\r\n\t\t\t\t\t\t\t\t\t<img src=\"../assets/images/socks/ankle/ankle2.jpg\" class=\"img-responsive img-fluid\" alt=\"\">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<!-- <div class=\"thumb-content\">\r\n\t\t\t\t\t\t\t\t\t<h4>Sony Headphone</h4>\r\n\t\t\t\t\t\t\t\t\t<p class=\"item-price\">$25.00 <span>$23.99</span></p>\r\n\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"btn btn-primary\">Add to Cart</a>\r\n\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t -->\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\t\t\r\n\t\t\t\t\t\t<div class=\"col-sm-3\">\r\n\t\t\t\t\t\t\t<div class=\"thumb-wrapper\">\r\n\t\t\t\t\t\t\t\t<div class=\"img-box zoom\">\r\n\t\t\t\t\t\t\t\t\t<img src=\"../assets/images/socks/ankle/ankle3.jpg\" class=\"img-responsive img-fluid\" alt=\"\">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<!-- <div class=\"thumb-content\">\r\n\t\t\t\t\t\t\t\t\t<h4>Macbook Air</h4>\r\n\t\t\t\t\t\t\t\t\t<p class=\"item-price\">$899.00<span>$649.00</span></p>\r\n\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"btn btn-primary\">Add to Cart</a>\r\n\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t -->\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t<div class=\"col-sm-3\">\r\n\t\t\t\t\t\t\t<div class=\"thumb-wrapper\">\r\n\t\t\t\t\t\t\t\t<div class=\"img-box zoom\">\r\n\t\t\t\t\t\t\t\t\t<img src=\"../assets/images/socks/ankle/ankle4.jpg\" class=\"img-responsive img-fluid\" alt=\"\">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<!-- <div class=\"thumb-content\">\r\n\t\t\t\t\t\t\t\t\t<h4>Nikon DSLR</h4>\r\n\t\t\t\t\t\t\t\t\t<p class=\"item-price\">$315.00<span>$250.00</span></p>\r\n\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"btn btn-primary\">Add to Cart</a>\r\n\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t -->\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"item carousel-item\">\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-sm-3\">\r\n\t\t\t\t\t\t\t<div class=\"thumb-wrapper\">\r\n\t\t\t\t\t\t\t\t<div class=\"img-box zoom\">\r\n\t\t\t\t\t\t\t\t\t<img src=\"../assets/images/socks/ankle/ankle5.jpg\" class=\"img-responsive img-fluid\" alt=\"\">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<!-- <div class=\"thumb-content\">\r\n\t\t\t\t\t\t\t\t\t<h4>Sony Play Station</h4>\r\n\t\t\t\t\t\t\t\t\t<p class=\"item-price\">$289.00 <span>$269.00</span></p>\r\n\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"btn btn-primary\">Add to Cart</a>\r\n\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t -->\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-sm-3\">\r\n\t\t\t\t\t\t\t<div class=\"thumb-wrapper\">\r\n\t\t\t\t\t\t\t\t<div class=\"img-box zoom\">\r\n\t\t\t\t\t\t\t\t\t<img src=\"../assets/images/socks/ankle/ankle6.jpg\" class=\"img-responsive img-fluid\" alt=\"\">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<!-- <div class=\"thumb-content\">\r\n\t\t\t\t\t\t\t\t\t<h4>Macbook Pro</h4>\r\n\t\t\t\t\t\t\t\t\t<p class=\"item-price\">$1099.00 <span>$869.00</span></p>\r\n\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"btn btn-primary\">Add to Cart</a>\r\n\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t -->\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-sm-3\">\r\n\t\t\t\t\t\t\t<div class=\"thumb-wrapper\">\r\n\t\t\t\t\t\t\t\t<div class=\"img-box zoom\">\r\n\t\t\t\t\t\t\t\t\t<img src=\"../assets/images/socks/ankle/ankle7.jpg\" class=\"img-responsive img-fluid\" alt=\"\">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<!-- <div class=\"thumb-content\">\r\n\t\t\t\t\t\t\t\t\t<h4>Bose Speaker</h4>\r\n\t\t\t\t\t\t\t\t\t<p class=\"item-price\">$109.00 <span>$99.00</span></p>\r\n\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"btn btn-primary\">Add to Cart</a>\r\n\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t -->\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-sm-3\">\r\n\t\t\t\t\t\t\t<div class=\"thumb-wrapper\">\r\n\t\t\t\t\t\t\t\t<div class=\"img-box zoom\">\r\n\t\t\t\t\t\t\t\t\t<img src=\"../assets/images/socks/ankle/ankle8.jpg\" class=\"img-responsive img-fluid\" alt=\"\">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<!-- <div class=\"thumb-content\">\r\n\t\t\t\t\t\t\t\t\t<h4>Samsung Galaxy S8</h4>\r\n\t\t\t\t\t\t\t\t\t<p class=\"item-price\">$599.00 <span>$569.00</span></p>\r\n\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"btn btn-primary\">Add to Cart</a>\r\n\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t -->\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\t\t\t\t\t\t\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"item carousel-item\">\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-sm-3\">\r\n\t\t\t\t\t\t\t<div class=\"thumb-wrapper\">\r\n\t\t\t\t\t\t\t\t<div class=\"img-box zoom\">\r\n\t\t\t\t\t\t\t\t\t<img src=\"../assets/images/socks/ankle/ankle9.jpg\" class=\"img-responsive img-fluid\" alt=\"\">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<!-- <div class=\"thumb-content\">\r\n\t\t\t\t\t\t\t\t\t<h4>Apple iPhone</h4>\r\n\t\t\t\t\t\t\t\t\t<p class=\"item-price\">$369.00 <span>$349.00</span></p>\r\n\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"btn btn-primary\">Add to Cart</a>\r\n\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t -->\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<!-- Carousel controls -->\r\n\t\t\t<a class=\"carousel-control left carousel-control-prev\" href=\"#myCarousel\" data-slide=\"prev\">\r\n\t\t\t\t<i class=\"fa fa-angle-left\"></i>\r\n\t\t\t</a>\r\n\t\t\t<a class=\"carousel-control right carousel-control-next\" href=\"#myCarousel\" data-slide=\"next\">\r\n\t\t\t\t<i class=\"fa fa-angle-right\"></i>\r\n\t\t\t</a>\r\n\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/ankle/ankle.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnkleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// changed some code for scroll to top issue


var AnkleComponent = /** @class */ (function () {
    function AnkleComponent(router) {
        this.router = router;
    }
    AnkleComponent.prototype.ngOnInit = function () {
        this.router.events.subscribe(function (evt) {
            if (!(evt instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* NavigationEnd */])) {
                return;
            }
            window.scrollTo(0, 0);
        });
    };
    AnkleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-ankle',
            template: __webpack_require__("./src/app/ankle/ankle.component.html"),
            styles: [__webpack_require__("./src/app/ankle/ankle.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__towel_towel_component__ = __webpack_require__("./src/app/towel/towel.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var appRoutes = [{ path: '', component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_3__about_about_component__["a" /* AboutComponent */] },
    { path: 'contact', component: __WEBPACK_IMPORTED_MODULE_4__contact_contact_component__["a" /* ContactComponent */] },
    { path: 'uniform', component: __WEBPACK_IMPORTED_MODULE_6__uniform_uniform_component__["a" /* UniformComponent */] },
    { path: 'premium', component: __WEBPACK_IMPORTED_MODULE_7__premium_premium_component__["a" /* PremiumComponent */] },
    { path: 'ankle', component: __WEBPACK_IMPORTED_MODULE_5__ankle_ankle_component__["a" /* AnkleComponent */] },
    { path: 'kids', component: __WEBPACK_IMPORTED_MODULE_8__kids_kids_component__["a" /* KidsComponent */] },
    { path: 'womens', component: __WEBPACK_IMPORTED_MODULE_9__womens_womens_component__["a" /* WomensComponent */] },
    { path: 'mens', component: __WEBPACK_IMPORTED_MODULE_10__mens_mens_component__["a" /* MensComponent */] },
    { path: 'towel', component: __WEBPACK_IMPORTED_MODULE_11__towel_towel_component__["a" /* TowelComponent */] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(appRoutes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n.row {\r\n    margin-left: 0px;\r\n    margin-right: 0px;\r\n    }\r\n\r\n  \r\n.btn{\r\n    border-radius: 25px;\r\n}\r\n\r\n  \r\nunform{\r\n    background-color: #78404A;\r\n\r\n}\r\n\r\n  \r\nfooter {\r\n   \r\n    background-color: #f7f7f7;\r\n}\r\n\r\n  \r\n.active{\r\n    color:red;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container justify-content-center\" detect-scroll (onScroll)=\"handleScroll($event)\" [bottomOffset]=\"1700\" [topOffset]=\"300\">\n\n<!-- BR industries logo and description  -->\n\n<div class=\"\">\n\n       <a class=\"nav-link nav-item display-4 text-dark\"  routerLink=\"/home\">      <h3 class=\"\" style=\"color:#0b519b\">BR-industries</h3>\n         </a>\n</div>\n                  \n\n                  <!-- BR industries logo and description ends  -->\n\n<!-- navbar start-->\n\n\n\n<ul class=\"nav\">\n  <li class=\"nav-item\" >\n    <a class=\"nav-link animates\" [ngClass]=\"{active:clicked=='home'}\" (click)=\"onclick('home')\" routerLink=\"/home\"> <strong>Home</strong></a>\n  </li>\n  <li class=\"nav-item\">\n    <a class=\"nav-link animates\" [ngClass]=\"{active:clicked=='about'}\" (click)=\"onclick('about')\" routerLink=\"/about\"><strong>About</strong></a>\n  </li>\n  <li class=\"nav-item\">\n    <a class=\"nav-link animates\" [ngClass]=\"{active:clicked=='contact'}\" (click)=\"onclick('contact')\" routerLink=\"/contact\"><strong>Contact</strong></a>\n  </li>\n  \n</ul>\n\n   <!-- navbar end -->\n       <div class=\"animates\" [ngClass]=\"{fadeInUp:clicked!='x'}\" style=\"margin-top:30px; margin-bottom:30px;\">\n          <router-outlet ></router-outlet>\n       </div>\n   \n      \n    \n   \n\n\n<!-- footer start--> \n\n\n\n\n</div>\n\n\n<footer class=\"bd-footer text-muted animates \"  [ngClass]=\"{fadeInUp:scrolled=='yes'}\">\n    <div class=\"container p-3 p-md-5\">\n        <h3>B.R Industries</h3> <br>\n        <p>Bawana Industrial Area, Delhi, India</p>\n     \n      <p>Designed and built with all the love in the world by <a href=\"\">Ayush</a>.</p>\n    </div>\n  </footer>"

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
        this.clicked = selected;
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

module.exports = "\r\n<div class=\"row\">\r\n<div class=\"col\">\r\n  <!-- Card -->\r\n<div class=\"card\">\r\n\r\n    <!-- Card image -->\r\n    <div class=\"view overlay\">\r\n      <img class=\"card-img-top\" src=\"../assets/images/uncle.jpg\" alt=\"Card image cap\">\r\n      <a  routerLink=\"/contact\">\r\n        <div class=\"mask waves-effect waves-light rgba-white-slight\"></div>\r\n      </a>\r\n    </div>\r\n  \r\n    <!-- Card content -->\r\n    <div class=\"card-body\">\r\n  \r\n      <!-- Title -->\r\n      <h4 class=\"card-title\">From the owner's desk</h4>\r\n      <!-- Text -->\r\n      <p class=\"card-text\">We are always commited to give the best experience to our consumers. We are happy to share smiles, </p>\r\n      <!-- Button -->\r\n      <a routerLink=\"/contact\" class=\"btn btn-primary\">Button</a>\r\n  \r\n    </div>\r\n  \r\n  </div>\r\n  <!-- Card -->\r\n\r\n</div>\r\n\r\n\r\n\r\n\r\n<div class=\"col-sm-4\">\r\n<div class=\"card text-white bg-info mb-3\" style=\"max-width: 18rem;\">\r\n    <div class=\"card-header\">Meet us</div>\r\n    <div class=\"card-body\">\r\n      <h5 class=\"card-title\">factory address</h5>\r\n      <p class=\"card-text\" style=\"color:white;\">M-108, sector-3, DSIC industrial Area , Bawana, Delhi-39</p>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n\r\n<div class=\"col-sm-4\">\r\n  <div class=\"card bg-light mb-3\" style=\"max-width: 18rem;\">\r\n    <div class=\"card-header\">contact us</div>\r\n    <div class=\"card-body\">\r\n      <h5 class=\"card-title\">cell number: 9311177709</h5>\r\n      <p class=\"card-text\">e-mail: goelrakesh14@gmail.com</p>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n\r\n</div>"

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

module.exports = ".col-6,.col-12{\r\n    padding:2px 2px 2px 2px;\r\n}\r\n.img-fluid{ \r\n    border-radius:8px;\r\n    \r\n}\r\nrow1.img-fluid{ \r\n    border-radius:8px;\r\n    height:30vmin; \r\n}\r\n.row1.col-12{\r\n    position: relative;\r\n    text-align: center;\r\n    color: white;\r\n}\r\n/* Bottom left text */\r\n.leftOwn{\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n    color:white;\r\n    font-size: 5vmin;\r\n    font-weight: bolder;\r\n\r\n}\r\n.fadeInUp{\r\n    visibility:visible;\r\n}\r\n.jumbotron{\r\n    border-radius:8px;\r\n}\r\n.parallax { \r\n    /* The image used */\r\n    \r\n\r\n    /* Set a specific height */\r\n    height: 500px; \r\n\r\n    /* Create the parallax scrolling effect */\r\n    background-attachment: fixed;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"parallax\" style=\"background-image: url('../assets/images/home_back23.jpg');\"></div>\r\n\r\n\r\n\r\n<div detect-scroll (onScroll)=\"handleScroll($event)\" [bottomOffset]=\"700\" [topOffset]=\"100\">\r\n    <div class=\"jumbotron shadow-none text-center\">\r\n        <h1 class=\"display-4\">A place for Great Quality Socks</h1>\r\n        <p class=\"lead\">We sell socks of all qualities with the brand name Great Hops</p>\r\n       \r\n      </div>\r\n\r\n\r\n      \r\n<h3 style=\"font-family: 'Roboto', sans-serif;font-weight: 300; color:#0b519b; text-align:center;\">Our Products</h3>\r\n\r\n\r\n<div class=\"row animates \" [ngClass]=\"{fadeInUp:scrolled=='yes'}\"><div class=\"col-12\"><a>\r\n    <img class=\"img-fluid\" routerLink=\"/uniform\" src=\"../assets/images/uniform.jpg\" style=\"margin-top:30px; margin-bottom:30px; \"></a>\r\n    </div></div>\r\n\r\n\r\n<div class=\"row animates\" [ngClass]=\"{fadeInUp:scrolled=='yes'}\"  >\r\n    <div class=\"col-sm-4 col-xs-4 col-6\"> <div class=\"view overlay\"><a routerLink=\"/womens\"> <img  class=\"img-fluid\" src=\".//assets/images/ladies.jpg\" alt=\"\"> <div class=\"mask waves-effect  waves-light rgba-black-light white-text\" style=\"font-size:2rem;\">women's socks</div> </a></div></div>\r\n    <div class=\"col-sm-4 col-xs-4 col-6\"> <div class=\"view overlay\"><a routerLink=\"/mens\"> <img  class=\"img-fluid\" src=\".//assets/images/mens.jpg\" alt=\"\"> <div class=\"mask waves-effect  waves-light rgba-black-light white-text\" style=\"font-size:2rem;\">men's socks</div> </a></div></div>\r\n    <div class=\"col-sm-4 col-xs-4 col-12\"> <div class=\"view overlay\"><a routerLink=\"/kids\"> <img  class=\"img-fluid\" src=\".//assets/images/kids.jpg\" alt=\"\"> <div class=\"mask waves-effect  waves-light rgba-black-light white-text\" style=\"font-size:2rem;\">kids socks</div> </a></div></div>\r\n</div>\r\n<div class=\"row animates \" [ngClass]=\"{fadeInUp:scrolled=='yes'}\">\r\n    <div class=\"col-sm-4 col-xs-4 col-6\"> <div class=\"view overlay\"><a routerLink=\"/premium\"> <img  class=\"img-fluid\" src=\".//assets/images/premium.jpg\" alt=\"\"> <div class=\"mask waves-effect  waves-light rgba-black-light white-text\" style=\"font-size:2rem;\">premium socks</div> </a></div></div>\r\n    <div class=\"col-sm-4 col-xs-4 col-6\"> <div class=\"view overlay\"><a routerLink=\"/towel\"> <img  class=\"img-fluid\" src=\".//assets/images/towel.jpg\" alt=\"\"> <div class=\"mask waves-effect  waves-light rgba-black-light white-text\" style=\"font-size:2rem;\">towel socks</div> </a></div></div>\r\n    <div class=\"col-sm-4 col-xs-4 col-12\"> <div class=\"view overlay\"><a routerLink=\"/ankle\"> <img  class=\"img-fluid\" src=\".//assets/images/ankle.jpg\" alt=\"\"> <div class=\"mask waves-effect  waves-light rgba-black-light white-text\" style=\"font-size:2rem;\">ankle socks</div> </a></div></div>\r\n</div>\r\n\r\n\r\n\r\n</div>\r\n\r\n\r\n"

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

module.exports = "\r\nh2 {\r\n\tcolor: #000;\r\n\tfont-size: 26px;\r\n\tfont-weight: 300;\r\n\ttext-align: center;\r\n\ttext-transform: uppercase;\r\n\tposition: relative;\r\n\tmargin: 30px 0 80px;\r\n}\r\nh2 b {\r\n\tcolor: #ffc000;\r\n}\r\nh2::after {\r\n\tcontent: \"\";\r\n\twidth: 100px;\r\n\tposition: absolute;\r\n\tmargin: 0 auto;\r\n\theight: 4px;\r\n\tbackground: rgba(0, 0, 0, 0.2);\r\n\tleft: 0;\r\n\tright: 0;\r\n\tbottom: -20px;\r\n}\r\n.carousel {\r\n\tmargin: 50px auto;\r\n\tpadding: 0 70px;\r\n}\r\n.carousel .item {\r\n\tmin-height: 330px;\r\n    text-align: center;\r\n\toverflow: hidden;\r\n}\r\n.carousel .item .img-box {\r\n\theight: 200px;\r\n\twidth: 100%;\r\n\tposition: relative;\r\n}\r\n.carousel .item img {\t\r\n\tmax-width: 100%;\r\n\tmax-height: 100%;\r\n\tdisplay: inline-block;\r\n\tposition: absolute;\r\n\tbottom: 0;\r\n\tmargin: 0 auto;\r\n\tleft: 0;\r\n\tright: 0;\r\n}\r\n.carousel .item h4 {\r\n\tfont-size: 18px;\r\n\tmargin: 10px 0;\r\n}\r\n.carousel .item .btn {\r\n\tcolor: #333;\r\n    border-radius: 0;\r\n    font-size: 11px;\r\n    text-transform: uppercase;\r\n    font-weight: bold;\r\n    background: none;\r\n    border: 1px solid #ccc;\r\n    padding: 5px 10px;\r\n    margin-top: 5px;\r\n    line-height: 16px;\r\n}\r\n.carousel .item .btn:hover, .carousel .item .btn:focus {\r\n\tcolor: #fff;\r\n\tbackground: #000;\r\n\tborder-color: #000;\r\n\t-webkit-box-shadow: none;\r\n\t        box-shadow: none;\r\n}\r\n.carousel .item .btn i {\r\n\tfont-size: 14px;\r\n    font-weight: bold;\r\n    margin-left: 5px;\r\n}\r\n.carousel .thumb-wrapper {\r\n\ttext-align: center;\r\n}\r\n.carousel .thumb-content {\r\n\tpadding: 15px;\r\n}\r\n.carousel .carousel-control {\r\n\theight: 100px;\r\n    width: 40px;\r\n    background: none;\r\n    margin: auto 0;\r\n    background: rgba(0, 0, 0, 0.2);\r\n}\r\n.carousel .carousel-control i {\r\n    font-size: 30px;\r\n    position: absolute;\r\n    top: 50%;\r\n    display: inline-block;\r\n    margin: -16px 0 0 0;\r\n    z-index: 5;\r\n    left: 0;\r\n    right: 0;\r\n    color: rgba(0, 0, 0, 0.8);\r\n    text-shadow: none;\r\n    font-weight: bold;\r\n}\r\n.carousel .item-price {\r\n\tfont-size: 13px;\r\n\tpadding: 2px 0;\r\n}\r\n.carousel .item-price strike {\r\n\tcolor: #999;\r\n\tmargin-right: 5px;\r\n}\r\n.carousel .item-price span {\r\n\tcolor: #86bd57;\r\n\tfont-size: 110%;\r\n}\r\n.carousel .carousel-control.left i {\r\n\tmargin-left: -3px;\r\n}\r\n.carousel .carousel-control.left i {\r\n\tmargin-right: -3px;\r\n}\r\n.carousel .carousel-indicators {\r\n\tbottom: -50px;\r\n}\r\n.carousel-indicators li, .carousel-indicators li.active {\r\n\twidth: 10px;\r\n\theight: 10px;\r\n\tmargin: 4px;\r\n\tborder-radius: 50%;\r\n\tborder-color: transparent;\r\n}\r\n.carousel-indicators li {\t\r\n\tbackground: rgba(0, 0, 0, 0.2);\r\n}\r\n.carousel-indicators li.active {\t\r\n\tbackground: rgba(0, 0, 0, 0.6);\r\n}\r\n.star-rating li {\r\n\tpadding: 0;\r\n}\r\n.star-rating i {\r\n\tfont-size: 14px;\r\n\tcolor: #ffc000;\r\n}"

/***/ }),

/***/ "./src/app/kids/kids.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<div class=\"row\">\n\t\t<div class=\"col-md-12\">\n\t\t\t<h2>kids <b>socks</b></h2>\n\t\t\t<div id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\" data-interval=\"0\">\n\t\t\t<!-- Carousel indicators -->\n\t\t\t<ol class=\"carousel-indicators\">\n\t\t\t\t<li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\"></li>\n\t\t\t\t<!-- <li data-target=\"#myCarousel\" data-slide-to=\"1\"></li>\n\t\t\t\t<li data-target=\"#myCarousel\" data-slide-to=\"2\"></li> -->\n\t\t\t</ol>   \n\t\t\t<!-- Wrapper for carousel items -->\n\t\t\t<div class=\"carousel-inner\">\n\t\t\t\t<div class=\"item carousel-item active\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-3\">\n\t\t\t\t\t\t\t<div class=\"thumb-wrapper\">\n\t\t\t\t\t\t\t\t<div class=\"img-box zoom\">\n\t\t\t\t\t\t\t\t\t<img src=\"../assets/images/socks/kids/kids1.jpg\" class=\"img-responsive img-fluid\" alt=\"\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<!-- <div class=\"thumb-content\">\n\t\t\t\t\t\t\t\t\t<h4>Apple iPad</h4>\n\t\t\t\t\t\t\t\t\t<p class=\"item-price\">$400.00 <span>$369.00</span></p>\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"btn btn-primary\">Add to Cart</a>\n\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t -->\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-3\">\n\t\t\t\t\t\t\t<div class=\"thumb-wrapper\">\n\t\t\t\t\t\t\t\t<div class=\"img-box zoom\">\n\t\t\t\t\t\t\t\t\t<img src=\"../assets/images/socks/kids/kids2.jpg\" class=\"img-responsive img-fluid\" alt=\"\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<!-- <div class=\"thumb-content\">\n\t\t\t\t\t\t\t\t\t<h4>Sony Headphone</h4>\n\t\t\t\t\t\t\t\t\t<p class=\"item-price\">$25.00 <span>$23.99</span></p>\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"btn btn-primary\">Add to Cart</a>\n\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t -->\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\t\t\n\t\t\t\t\t\t<div class=\"col-sm-3\">\n\t\t\t\t\t\t\t<div class=\"thumb-wrapper\">\n\t\t\t\t\t\t\t\t<div class=\"img-box zoom\">\n\t\t\t\t\t\t\t\t\t<img src=\"../assets/images/socks/kids/kids3.jpg\" class=\"img-responsive img-fluid\" alt=\"\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<!-- <div class=\"thumb-content\">\n\t\t\t\t\t\t\t\t\t<h4>Macbook Air</h4>\n\t\t\t\t\t\t\t\t\t<p class=\"item-price\">$899.00<span>$649.00</span></p>\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"btn btn-primary\">Add to Cart</a>\n\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t -->\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t<div class=\"col-sm-3\">\n\t\t\t\t\t\t\t<div class=\"thumb-wrapper\">\n\t\t\t\t\t\t\t\t<div class=\"img-box zoom\">\n\t\t\t\t\t\t\t\t\t<img src=\"../assets/images/socks/kids/kids4.jpg\" class=\"img-responsive img-fluid\" alt=\"\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<!-- <div class=\"thumb-content\">\n\t\t\t\t\t\t\t\t\t<h4>Nikon DSLR</h4>\n\t\t\t\t\t\t\t\t\t<p class=\"item-price\">$315.00<span>$250.00</span></p>\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"btn btn-primary\">Add to Cart</a>\n\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t -->\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\n\t\t\t</div>\n\t\t\t<!-- Carousel controls -->\n\t\t\t<a class=\"carousel-control left carousel-control-prev\" href=\"#myCarousel\" data-slide=\"prev\">\n\t\t\t\t<i class=\"fa fa-angle-left\"></i>\n\t\t\t</a>\n\t\t\t<a class=\"carousel-control right carousel-control-next\" href=\"#myCarousel\" data-slide=\"next\">\n\t\t\t\t<i class=\"fa fa-angle-right\"></i>\n\t\t\t</a>\n\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n"

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

module.exports = "\r\nh2 {\r\n\tcolor: #000;\r\n\tfont-size: 26px;\r\n\tfont-weight: 300;\r\n\ttext-align: center;\r\n\ttext-transform: uppercase;\r\n\tposition: relative;\r\n\tmargin: 30px 0 80px;\r\n}\r\nh2 b {\r\n\tcolor: #ffc000;\r\n}\r\nh2::after {\r\n\tcontent: \"\";\r\n\twidth: 100px;\r\n\tposition: absolute;\r\n\tmargin: 0 auto;\r\n\theight: 4px;\r\n\tbackground: rgba(0, 0, 0, 0.2);\r\n\tleft: 0;\r\n\tright: 0;\r\n\tbottom: -20px;\r\n}\r\n.carousel {\r\n\tmargin: 50px auto;\r\n\tpadding: 0 70px;\r\n}\r\n.carousel .item {\r\n\tmin-height: 330px;\r\n    text-align: center;\r\n\toverflow: hidden;\r\n}\r\n.carousel .item .img-box {\r\n\theight: 200px;\r\n\twidth: 100%;\r\n\tposition: relative;\r\n}\r\n.carousel .item img {\t\r\n\tmax-width: 100%;\r\n\tmax-height: 100%;\r\n\tdisplay: inline-block;\r\n\tposition: absolute;\r\n\tbottom: 0;\r\n\tmargin: 0 auto;\r\n\tleft: 0;\r\n\tright: 0;\r\n}\r\n.carousel .item h4 {\r\n\tfont-size: 18px;\r\n\tmargin: 10px 0;\r\n}\r\n.carousel .item .btn {\r\n\tcolor: #333;\r\n    border-radius: 0;\r\n    font-size: 11px;\r\n    text-transform: uppercase;\r\n    font-weight: bold;\r\n    background: none;\r\n    border: 1px solid #ccc;\r\n    padding: 5px 10px;\r\n    margin-top: 5px;\r\n    line-height: 16px;\r\n}\r\n.carousel .item .btn:hover, .carousel .item .btn:focus {\r\n\tcolor: #fff;\r\n\tbackground: #000;\r\n\tborder-color: #000;\r\n\t-webkit-box-shadow: none;\r\n\t        box-shadow: none;\r\n}\r\n.carousel .item .btn i {\r\n\tfont-size: 14px;\r\n    font-weight: bold;\r\n    margin-left: 5px;\r\n}\r\n.carousel .thumb-wrapper {\r\n\ttext-align: center;\r\n}\r\n.carousel .thumb-content {\r\n\tpadding: 15px;\r\n}\r\n.carousel .carousel-control {\r\n\theight: 100px;\r\n    width: 40px;\r\n    background: none;\r\n    margin: auto 0;\r\n    background: rgba(0, 0, 0, 0.2);\r\n}\r\n.carousel .carousel-control i {\r\n    font-size: 30px;\r\n    position: absolute;\r\n    top: 50%;\r\n    display: inline-block;\r\n    margin: -16px 0 0 0;\r\n    z-index: 5;\r\n    left: 0;\r\n    right: 0;\r\n    color: rgba(0, 0, 0, 0.8);\r\n    text-shadow: none;\r\n    font-weight: bold;\r\n}\r\n.carousel .item-price {\r\n\tfont-size: 13px;\r\n\tpadding: 2px 0;\r\n}\r\n.carousel .item-price strike {\r\n\tcolor: #999;\r\n\tmargin-right: 5px;\r\n}\r\n.carousel .item-price span {\r\n\tcolor: #86bd57;\r\n\tfont-size: 110%;\r\n}\r\n.carousel .carousel-control.left i {\r\n\tmargin-left: -3px;\r\n}\r\n.carousel .carousel-control.left i {\r\n\tmargin-right: -3px;\r\n}\r\n.carousel .carousel-indicators {\r\n\tbottom: -50px;\r\n}\r\n.carousel-indicators li, .carousel-indicators li.active {\r\n\twidth: 10px;\r\n\theight: 10px;\r\n\tmargin: 4px;\r\n\tborder-radius: 50%;\r\n\tborder-color: transparent;\r\n}\r\n.carousel-indicators li {\t\r\n\tbackground: rgba(0, 0, 0, 0.2);\r\n}\r\n.carousel-indicators li.active {\t\r\n\tbackground: rgba(0, 0, 0, 0.6);\r\n}\r\n.star-rating li {\r\n\tpadding: 0;\r\n}\r\n.star-rating i {\r\n\tfont-size: 14px;\r\n\tcolor: #ffc000;\r\n}"

/***/ }),

/***/ "./src/app/premium/premium.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<div class=\"row\">\n\t\t<div class=\"col-md-12\">\n\t\t\t<h2>premium <b>socks</b></h2>\n\t\t\t<div id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\" data-interval=\"0\">\n\t\t\t<!-- Carousel indicators -->\n\t\t\t<ol class=\"carousel-indicators\">\n\t\t\t\t<li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\"></li>\n\t\t\t\t<li data-target=\"#myCarousel\" data-slide-to=\"1\"></li>\n\t\t\t\t<li data-target=\"#myCarousel\" data-slide-to=\"2\"></li>\n\t\t\t</ol>   \n\t\t\t<!-- Wrapper for carousel items -->\n\t\t\t<div class=\"carousel-inner\">\n\t\t\t\t<div class=\"item carousel-item active\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-3\">\n\t\t\t\t\t\t\t<div class=\"thumb-wrapper\">\n\t\t\t\t\t\t\t\t<div class=\"img-box zoom\">\n\t\t\t\t\t\t\t\t\t<img src=\"../assets/images/socks/premium/premium1.jpg\" class=\"img-responsive img-fluid\" alt=\"\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<!-- <div class=\"thumb-content\">\n\t\t\t\t\t\t\t\t\t<h4>Apple iPad</h4>\n\t\t\t\t\t\t\t\t\t<p class=\"item-price\">$400.00 <span>$369.00</span></p>\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"btn btn-primary\">Add to Cart</a>\n\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t -->\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-3\">\n\t\t\t\t\t\t\t<div class=\"thumb-wrapper\">\n\t\t\t\t\t\t\t\t<div class=\"img-box zoom\">\n\t\t\t\t\t\t\t\t\t<img src=\"../assets/images/socks/premium/premium2.jpg\" class=\"img-responsive img-fluid\" alt=\"\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<!-- <div class=\"thumb-content\">\n\t\t\t\t\t\t\t\t\t<h4>Sony Headphone</h4>\n\t\t\t\t\t\t\t\t\t<p class=\"item-price\">$25.00 <span>$23.99</span></p>\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"btn btn-primary\">Add to Cart</a>\n\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t -->\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\t\t\n\t\t\t\t\t\t<div class=\"col-sm-3\">\n\t\t\t\t\t\t\t<div class=\"thumb-wrapper\">\n\t\t\t\t\t\t\t\t<div class=\"img-box zoom\">\n\t\t\t\t\t\t\t\t\t<img src=\"../assets/images/socks/premium/premium3.jpg\" class=\"img-responsive img-fluid\" alt=\"\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<!-- <div class=\"thumb-content\">\n\t\t\t\t\t\t\t\t\t<h4>Macbook Air</h4>\n\t\t\t\t\t\t\t\t\t<p class=\"item-price\">$899.00<span>$649.00</span></p>\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"btn btn-primary\">Add to Cart</a>\n\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t -->\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t<div class=\"col-sm-3\">\n\t\t\t\t\t\t\t<div class=\"thumb-wrapper\">\n\t\t\t\t\t\t\t\t<div class=\"img-box zoom\">\n\t\t\t\t\t\t\t\t\t<img src=\"../assets/images/socks/premium/premium4.jpg\" class=\"img-responsive img-fluid\" alt=\"\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<!-- <div class=\"thumb-content\">\n\t\t\t\t\t\t\t\t\t<h4>Nikon DSLR</h4>\n\t\t\t\t\t\t\t\t\t<p class=\"item-price\">$315.00<span>$250.00</span></p>\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"btn btn-primary\">Add to Cart</a>\n\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t -->\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"item carousel-item\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-3\">\n\t\t\t\t\t\t\t<div class=\"thumb-wrapper\">\n\t\t\t\t\t\t\t\t<div class=\"img-box zoom\">\n\t\t\t\t\t\t\t\t\t<img src=\"../assets/images/socks/premium/premium5.jpg\" class=\"img-responsive img-fluid\" alt=\"\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<!-- <div class=\"thumb-content\">\n\t\t\t\t\t\t\t\t\t<h4>Sony Play Station</h4>\n\t\t\t\t\t\t\t\t\t<p class=\"item-price\">$289.00 <span>$269.00</span></p>\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"btn btn-primary\">Add to Cart</a>\n\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t -->\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-3\">\n\t\t\t\t\t\t\t<div class=\"thumb-wrapper\">\n\t\t\t\t\t\t\t\t<div class=\"img-box zoom\">\n\t\t\t\t\t\t\t\t\t<img src=\"../assets/images/socks/premium/premium6.jpg\" class=\"img-responsive img-fluid\" alt=\"\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<!-- <div class=\"thumb-content\">\n\t\t\t\t\t\t\t\t\t<h4>Macbook Pro</h4>\n\t\t\t\t\t\t\t\t\t<p class=\"item-price\">$1099.00 <span>$869.00</span></p>\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"btn btn-primary\">Add to Cart</a>\n\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t -->\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\n\t\t\t</div>\n\t\t\t<!-- Carousel controls -->\n\t\t\t<a class=\"carousel-control left carousel-control-prev\" href=\"#myCarousel\" data-slide=\"prev\">\n\t\t\t\t<i class=\"fa fa-angle-left\"></i>\n\t\t\t</a>\n\t\t\t<a class=\"carousel-control right carousel-control-next\" href=\"#myCarousel\" data-slide=\"next\">\n\t\t\t\t<i class=\"fa fa-angle-right\"></i>\n\t\t\t</a>\n\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n"

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

module.exports = "\r\nh2 {\r\n\tcolor: #000;\r\n\tfont-size: 26px;\r\n\tfont-weight: 300;\r\n\ttext-align: center;\r\n\ttext-transform: uppercase;\r\n\tposition: relative;\r\n\tmargin: 30px 0 80px;\r\n}\r\nh2 b {\r\n\tcolor: #ffc000;\r\n}\r\nh2::after {\r\n\tcontent: \"\";\r\n\twidth: 100px;\r\n\tposition: absolute;\r\n\tmargin: 0 auto;\r\n\theight: 4px;\r\n\tbackground: rgba(0, 0, 0, 0.2);\r\n\tleft: 0;\r\n\tright: 0;\r\n\tbottom: -20px;\r\n}\r\n.carousel {\r\n\tmargin: 50px auto;\r\n\tpadding: 0 70px;\r\n}\r\n.carousel .item {\r\n\tmin-height: 330px;\r\n    text-align: center;\r\n\toverflow: hidden;\r\n}\r\n.carousel .item .img-box {\r\n\theight: 200px;\r\n\twidth: 100%;\r\n\tposition: relative;\r\n}\r\n.carousel .item img {\t\r\n\tmax-width: 100%;\r\n\tmax-height: 100%;\r\n\tdisplay: inline-block;\r\n\tposition: absolute;\r\n\tbottom: 0;\r\n\tmargin: 0 auto;\r\n\tleft: 0;\r\n\tright: 0;\r\n}\r\n.carousel .item h4 {\r\n\tfont-size: 18px;\r\n\tmargin: 10px 0;\r\n}\r\n.carousel .item .btn {\r\n\tcolor: #333;\r\n    border-radius: 0;\r\n    font-size: 11px;\r\n    text-transform: uppercase;\r\n    font-weight: bold;\r\n    background: none;\r\n    border: 1px solid #ccc;\r\n    padding: 5px 10px;\r\n    margin-top: 5px;\r\n    line-height: 16px;\r\n}\r\n.carousel .item .btn:hover, .carousel .item .btn:focus {\r\n\tcolor: #fff;\r\n\tbackground: #000;\r\n\tborder-color: #000;\r\n\t-webkit-box-shadow: none;\r\n\t        box-shadow: none;\r\n}\r\n.carousel .item .btn i {\r\n\tfont-size: 14px;\r\n    font-weight: bold;\r\n    margin-left: 5px;\r\n}\r\n.carousel .thumb-wrapper {\r\n\ttext-align: center;\r\n}\r\n.carousel .thumb-content {\r\n\tpadding: 15px;\r\n}\r\n.carousel .carousel-control {\r\n\theight: 100px;\r\n    width: 40px;\r\n    background: none;\r\n    margin: auto 0;\r\n    background: rgba(0, 0, 0, 0.2);\r\n}\r\n.carousel .carousel-control i {\r\n    font-size: 30px;\r\n    position: absolute;\r\n    top: 50%;\r\n    display: inline-block;\r\n    margin: -16px 0 0 0;\r\n    z-index: 5;\r\n    left: 0;\r\n    right: 0;\r\n    color: rgba(0, 0, 0, 0.8);\r\n    text-shadow: none;\r\n    font-weight: bold;\r\n}\r\n.carousel .item-price {\r\n\tfont-size: 13px;\r\n\tpadding: 2px 0;\r\n}\r\n.carousel .item-price strike {\r\n\tcolor: #999;\r\n\tmargin-right: 5px;\r\n}\r\n.carousel .item-price span {\r\n\tcolor: #86bd57;\r\n\tfont-size: 110%;\r\n}\r\n.carousel .carousel-control.left i {\r\n\tmargin-left: -3px;\r\n}\r\n.carousel .carousel-control.left i {\r\n\tmargin-right: -3px;\r\n}\r\n.carousel .carousel-indicators {\r\n\tbottom: -50px;\r\n}\r\n.carousel-indicators li, .carousel-indicators li.active {\r\n\twidth: 10px;\r\n\theight: 10px;\r\n\tmargin: 4px;\r\n\tborder-radius: 50%;\r\n\tborder-color: transparent;\r\n}\r\n.carousel-indicators li {\t\r\n\tbackground: rgba(0, 0, 0, 0.2);\r\n}\r\n.carousel-indicators li.active {\t\r\n\tbackground: rgba(0, 0, 0, 0.6);\r\n}\r\n.star-rating li {\r\n\tpadding: 0;\r\n}\r\n.star-rating i {\r\n\tfont-size: 14px;\r\n\tcolor: #ffc000;\r\n}"

/***/ }),

/***/ "./src/app/towel/towel.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<div class=\"row\">\n\t\t<div class=\"col-md-12\">\n\t\t\t<h2>towel <b>socks</b></h2>\n\t\t\t<div id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\" data-interval=\"0\">\n\t\t\t<!-- Carousel indicators -->\n\t\t\t<ol class=\"carousel-indicators\">\n\t\t\t\t<li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\"></li>\n\t\t\t\t<!-- <li data-target=\"#myCarousel\" data-slide-to=\"1\"></li>\n\t\t\t\t<li data-target=\"#myCarousel\" data-slide-to=\"2\"></li> -->\n\t\t\t</ol>   \n\t\t\t<!-- Wrapper for carousel items -->\n\t\t\t<div class=\"carousel-inner\">\n\t\t\t\t<div class=\"item carousel-item active\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-3\">\n\t\t\t\t\t\t\t<div class=\"thumb-wrapper\">\n\t\t\t\t\t\t\t\t<div class=\"img-box zoom\">\n\t\t\t\t\t\t\t\t\t<img src=\"../assets/images/socks/towel/towel1.jpg\" class=\"img-responsive img-fluid\" alt=\"\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<!-- <div class=\"thumb-content\">\n\t\t\t\t\t\t\t\t\t<h4>Apple iPad</h4>\n\t\t\t\t\t\t\t\t\t<p class=\"item-price\">$400.00 <span>$369.00</span></p>\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"btn btn-primary\">Add to Cart</a>\n\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t -->\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-3\">\n\t\t\t\t\t\t\t<div class=\"thumb-wrapper\">\n\t\t\t\t\t\t\t\t<div class=\"img-box zoom\">\n\t\t\t\t\t\t\t\t\t<img src=\"../assets/images/socks/towel/towel2.jpg\" class=\"img-responsive img-fluid\" alt=\"\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<!-- <div class=\"thumb-content\">\n\t\t\t\t\t\t\t\t\t<h4>Sony Headphone</h4>\n\t\t\t\t\t\t\t\t\t<p class=\"item-price\">$25.00 <span>$23.99</span></p>\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"btn btn-primary\">Add to Cart</a>\n\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t -->\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\t\t\n\t\t\t\t\t\t<div class=\"col-sm-3\">\n\t\t\t\t\t\t\t<div class=\"thumb-wrapper\">\n\t\t\t\t\t\t\t\t<div class=\"img-box zoom\">\n\t\t\t\t\t\t\t\t\t<img src=\"../assets/images/socks/towel/towel3.jpg\" class=\"img-responsive img-fluid\" alt=\"\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<!-- <div class=\"thumb-content\">\n\t\t\t\t\t\t\t\t\t<h4>Macbook Air</h4>\n\t\t\t\t\t\t\t\t\t<p class=\"item-price\">$899.00<span>$649.00</span></p>\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"btn btn-primary\">Add to Cart</a>\n\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t -->\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\t\n\t\t\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\n\t\t\t\t\n\t\t\t</div>\n\t\t\t<!-- Carousel controls -->\n\t\t\t<a class=\"carousel-control left carousel-control-prev\" href=\"#myCarousel\" data-slide=\"prev\">\n\t\t\t\t<i class=\"fa fa-angle-left\"></i>\n\t\t\t</a>\n\t\t\t<a class=\"carousel-control right carousel-control-next\" href=\"#myCarousel\" data-slide=\"next\">\n\t\t\t\t<i class=\"fa fa-angle-right\"></i>\n\t\t\t</a>\n\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n"

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

module.exports = "\r\nh2 {\r\n\tcolor: #000;\r\n\tfont-size: 26px;\r\n\tfont-weight: 300;\r\n\ttext-align: center;\r\n\ttext-transform: uppercase;\r\n\tposition: relative;\r\n\tmargin: 30px 0 80px;\r\n}\r\nh2 b {\r\n\tcolor: #ffc000;\r\n}\r\nh2::after {\r\n\tcontent: \"\";\r\n\twidth: 100px;\r\n\tposition: absolute;\r\n\tmargin: 0 auto;\r\n\theight: 4px;\r\n\tbackground: rgba(0, 0, 0, 0.2);\r\n\tleft: 0;\r\n\tright: 0;\r\n\tbottom: -20px;\r\n}\r\n.carousel {\r\n\tmargin: 50px auto;\r\n\tpadding: 0 70px;\r\n}\r\n.carousel .item {\r\n\tmin-height: 330px;\r\n    text-align: center;\r\n\toverflow: hidden;\r\n}\r\n.carousel .item .img-box {\r\n\theight: 200px;\r\n\twidth: 100%;\r\n\tposition: relative;\r\n}\r\n.carousel .item img {\t\r\n\tmax-width: 100%;\r\n\tmax-height: 100%;\r\n\tdisplay: inline-block;\r\n\tposition: absolute;\r\n\tbottom: 0;\r\n\tmargin: 0 auto;\r\n\tleft: 0;\r\n\tright: 0;\r\n}\r\n.carousel .item h4 {\r\n\tfont-size: 18px;\r\n\tmargin: 10px 0;\r\n}\r\n.carousel .item .btn {\r\n\tcolor: #333;\r\n    border-radius: 0;\r\n    font-size: 11px;\r\n    text-transform: uppercase;\r\n    font-weight: bold;\r\n    background: none;\r\n    border: 1px solid #ccc;\r\n    padding: 5px 10px;\r\n    margin-top: 5px;\r\n    line-height: 16px;\r\n}\r\n.carousel .item .btn:hover, .carousel .item .btn:focus {\r\n\tcolor: #fff;\r\n\tbackground: #000;\r\n\tborder-color: #000;\r\n\t-webkit-box-shadow: none;\r\n\t        box-shadow: none;\r\n}\r\n.carousel .item .btn i {\r\n\tfont-size: 14px;\r\n    font-weight: bold;\r\n    margin-left: 5px;\r\n}\r\n.carousel .thumb-wrapper {\r\n\ttext-align: center;\r\n}\r\n.carousel .thumb-content {\r\n\tpadding: 15px;\r\n}\r\n.carousel .carousel-control {\r\n\theight: 100px;\r\n    width: 40px;\r\n    background: none;\r\n    margin: auto 0;\r\n    background: rgba(0, 0, 0, 0.2);\r\n}\r\n.carousel .carousel-control i {\r\n    font-size: 30px;\r\n    position: absolute;\r\n    top: 50%;\r\n    display: inline-block;\r\n    margin: -16px 0 0 0;\r\n    z-index: 5;\r\n    left: 0;\r\n    right: 0;\r\n    color: rgba(0, 0, 0, 0.8);\r\n    text-shadow: none;\r\n    font-weight: bold;\r\n}\r\n.carousel .item-price {\r\n\tfont-size: 13px;\r\n\tpadding: 2px 0;\r\n}\r\n.carousel .item-price strike {\r\n\tcolor: #999;\r\n\tmargin-right: 5px;\r\n}\r\n.carousel .item-price span {\r\n\tcolor: #86bd57;\r\n\tfont-size: 110%;\r\n}\r\n.carousel .carousel-control.left i {\r\n\tmargin-left: -3px;\r\n}\r\n.carousel .carousel-control.left i {\r\n\tmargin-right: -3px;\r\n}\r\n.carousel .carousel-indicators {\r\n\tbottom: -50px;\r\n}\r\n.carousel-indicators li, .carousel-indicators li.active {\r\n\twidth: 10px;\r\n\theight: 10px;\r\n\tmargin: 4px;\r\n\tborder-radius: 50%;\r\n\tborder-color: transparent;\r\n}\r\n.carousel-indicators li {\t\r\n\tbackground: rgba(0, 0, 0, 0.2);\r\n}\r\n.carousel-indicators li.active {\t\r\n\tbackground: rgba(0, 0, 0, 0.6);\r\n}\r\n.star-rating li {\r\n\tpadding: 0;\r\n}\r\n.star-rating i {\r\n\tfont-size: 14px;\r\n\tcolor: #ffc000;\r\n}"

/***/ }),

/***/ "./src/app/uniform/uniform.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-md-12\">\r\n\t\t\t<h2>uniform <b>socks</b></h2>\r\n\t\t\t<div id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\" data-interval=\"0\">\r\n\t\t\t<!-- Carousel indicators -->\r\n\t\t\t<ol class=\"carousel-indicators\">\r\n\t\t\t\t<li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\"></li>\r\n\t\t\t\t\r\n\t\t\t</ol>   \r\n\t\t\t<!-- Wrapper for carousel items -->\r\n\t\t\t<div class=\"carousel-inner\">\r\n\t\t\t\t<div class=\"item carousel-item active\">\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-sm-3\">\r\n\t\t\t\t\t\t\t<div class=\"thumb-wrapper\">\r\n\t\t\t\t\t\t\t\t<div class=\"img-box zoom\">\r\n\t\t\t\t\t\t\t\t\t<img src=\"../assets/images/socks/uniform/uniform1.jpg\" class=\"img-responsive img-fluid\" alt=\"\">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<!-- <div class=\"thumb-content\">\r\n\t\t\t\t\t\t\t\t\t<h4>Apple iPad</h4>\r\n\t\t\t\t\t\t\t\t\t<p class=\"item-price\">$400.00 <span>$369.00</span></p>\r\n\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"btn btn-primary\">Add to Cart</a>\r\n\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t -->\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-sm-3\">\r\n\t\t\t\t\t\t\t<div class=\"thumb-wrapper\">\r\n\t\t\t\t\t\t\t\t<div class=\"img-box zoom\">\r\n\t\t\t\t\t\t\t\t\t<img src=\"../assets/images/socks/uniform/uniform2.jpg\" class=\"img-responsive img-fluid\" alt=\"\">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<!-- <div class=\"thumb-content\">\r\n\t\t\t\t\t\t\t\t\t<h4>Sony Headphone</h4>\r\n\t\t\t\t\t\t\t\t\t<p class=\"item-price\">$25.00 <span>$23.99</span></p>\r\n\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"btn btn-primary\">Add to Cart</a>\r\n\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t -->\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\t\t\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t\r\n\t\t\t</div>\r\n\t\t\t<!-- Carousel controls -->\r\n\t\t\t<a class=\"carousel-control left carousel-control-prev\" href=\"#myCarousel\" data-slide=\"prev\">\r\n\t\t\t\t<i class=\"fa fa-angle-left\"></i>\r\n\t\t\t</a>\r\n\t\t\t<a class=\"carousel-control right carousel-control-next\" href=\"#myCarousel\" data-slide=\"next\">\r\n\t\t\t\t<i class=\"fa fa-angle-right\"></i>\r\n\t\t\t</a>\r\n\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n"

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

module.exports = "\r\nh2 {\r\n\tcolor: #000;\r\n\tfont-size: 26px;\r\n\tfont-weight: 300;\r\n\ttext-align: center;\r\n\ttext-transform: uppercase;\r\n\tposition: relative;\r\n\tmargin: 30px 0 80px;\r\n}\r\nh2 b {\r\n\tcolor: #ffc000;\r\n}\r\nh2::after {\r\n\tcontent: \"\";\r\n\twidth: 100px;\r\n\tposition: absolute;\r\n\tmargin: 0 auto;\r\n\theight: 4px;\r\n\tbackground: rgba(0, 0, 0, 0.2);\r\n\tleft: 0;\r\n\tright: 0;\r\n\tbottom: -20px;\r\n}\r\n.carousel {\r\n\tmargin: 50px auto;\r\n\tpadding: 0 70px;\r\n}\r\n.carousel .item {\r\n\tmin-height: 330px;\r\n    text-align: center;\r\n\toverflow: hidden;\r\n}\r\n.carousel .item .img-box {\r\n\theight: 200px;\r\n\twidth: 100%;\r\n\tposition: relative;\r\n}\r\n.carousel .item img {\t\r\n\tmax-width: 100%;\r\n\tmax-height: 100%;\r\n\tdisplay: inline-block;\r\n\tposition: absolute;\r\n\tbottom: 0;\r\n\tmargin: 0 auto;\r\n\tleft: 0;\r\n\tright: 0;\r\n}\r\n.carousel .item h4 {\r\n\tfont-size: 18px;\r\n\tmargin: 10px 0;\r\n}\r\n.carousel .item .btn {\r\n\tcolor: #333;\r\n    border-radius: 0;\r\n    font-size: 11px;\r\n    text-transform: uppercase;\r\n    font-weight: bold;\r\n    background: none;\r\n    border: 1px solid #ccc;\r\n    padding: 5px 10px;\r\n    margin-top: 5px;\r\n    line-height: 16px;\r\n}\r\n.carousel .item .btn:hover, .carousel .item .btn:focus {\r\n\tcolor: #fff;\r\n\tbackground: #000;\r\n\tborder-color: #000;\r\n\t-webkit-box-shadow: none;\r\n\t        box-shadow: none;\r\n}\r\n.carousel .item .btn i {\r\n\tfont-size: 14px;\r\n    font-weight: bold;\r\n    margin-left: 5px;\r\n}\r\n.carousel .thumb-wrapper {\r\n\ttext-align: center;\r\n}\r\n.carousel .thumb-content {\r\n\tpadding: 15px;\r\n}\r\n.carousel .carousel-control {\r\n\theight: 100px;\r\n    width: 40px;\r\n    background: none;\r\n    margin: auto 0;\r\n    background: rgba(0, 0, 0, 0.2);\r\n}\r\n.carousel .carousel-control i {\r\n    font-size: 30px;\r\n    position: absolute;\r\n    top: 50%;\r\n    display: inline-block;\r\n    margin: -16px 0 0 0;\r\n    z-index: 5;\r\n    left: 0;\r\n    right: 0;\r\n    color: rgba(0, 0, 0, 0.8);\r\n    text-shadow: none;\r\n    font-weight: bold;\r\n}\r\n.carousel .item-price {\r\n\tfont-size: 13px;\r\n\tpadding: 2px 0;\r\n}\r\n.carousel .item-price strike {\r\n\tcolor: #999;\r\n\tmargin-right: 5px;\r\n}\r\n.carousel .item-price span {\r\n\tcolor: #86bd57;\r\n\tfont-size: 110%;\r\n}\r\n.carousel .carousel-control.left i {\r\n\tmargin-left: -3px;\r\n}\r\n.carousel .carousel-control.left i {\r\n\tmargin-right: -3px;\r\n}\r\n.carousel .carousel-indicators {\r\n\tbottom: -50px;\r\n}\r\n.carousel-indicators li, .carousel-indicators li.active {\r\n\twidth: 10px;\r\n\theight: 10px;\r\n\tmargin: 4px;\r\n\tborder-radius: 50%;\r\n\tborder-color: transparent;\r\n}\r\n.carousel-indicators li {\t\r\n\tbackground: rgba(0, 0, 0, 0.2);\r\n}\r\n.carousel-indicators li.active {\t\r\n\tbackground: rgba(0, 0, 0, 0.6);\r\n}\r\n.star-rating li {\r\n\tpadding: 0;\r\n}\r\n.star-rating i {\r\n\tfont-size: 14px;\r\n\tcolor: #ffc000;\r\n}"

/***/ }),

/***/ "./src/app/womens/womens.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<div class=\"row\">\n\t\t<div class=\"col-md-12\">\n\t\t\t<h2>womens <b>socks</b></h2>\n\t\t\t<div id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\" data-interval=\"0\">\n\t\t\t<!-- Carousel indicators -->\n\t\t\t<ol class=\"carousel-indicators\">\n\t\t\t\t<li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\"></li>\n\t\t\t\t<li data-target=\"#myCarousel\" data-slide-to=\"1\"></li>\n\t\t\t\t<!-- <li data-target=\"#myCarousel\" data-slide-to=\"2\"></li> -->\n\t\t\t</ol>   \n\t\t\t<!-- Wrapper for carousel items -->\n\t\t\t<div class=\"carousel-inner\">\n\t\t\t\t<div class=\"item carousel-item active\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-3\">\n\t\t\t\t\t\t\t<div class=\"thumb-wrapper\">\n\t\t\t\t\t\t\t\t<div class=\"img-box zoom\">\n\t\t\t\t\t\t\t\t\t<img src=\"../assets/images/socks/womens/womens1.jpg\" class=\"img-responsive img-fluid\" alt=\"\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<!-- <div class=\"thumb-content\">\n\t\t\t\t\t\t\t\t\t<h4>Apple iPad</h4>\n\t\t\t\t\t\t\t\t\t<p class=\"item-price\">$400.00 <span>$369.00</span></p>\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"btn btn-primary\">Add to Cart</a>\n\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t -->\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-3\">\n\t\t\t\t\t\t\t<div class=\"thumb-wrapper\">\n\t\t\t\t\t\t\t\t<div class=\"img-box zoom\">\n\t\t\t\t\t\t\t\t\t<img src=\"../assets/images/socks/womens/womens2.jpg\" class=\"img-responsive img-fluid\" alt=\"\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<!-- <div class=\"thumb-content\">\n\t\t\t\t\t\t\t\t\t<h4>Sony Headphone</h4>\n\t\t\t\t\t\t\t\t\t<p class=\"item-price\">$25.00 <span>$23.99</span></p>\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"btn btn-primary\">Add to Cart</a>\n\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t -->\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\t\t\n\t\t\t\t\t\t<div class=\"col-sm-3\">\n\t\t\t\t\t\t\t<div class=\"thumb-wrapper\">\n\t\t\t\t\t\t\t\t<div class=\"img-box zoom\">\n\t\t\t\t\t\t\t\t\t<img src=\"../assets/images/socks/womens/womens3.jpg\" class=\"img-responsive img-fluid\" alt=\"\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<!-- <div class=\"thumb-content\">\n\t\t\t\t\t\t\t\t\t<h4>Macbook Air</h4>\n\t\t\t\t\t\t\t\t\t<p class=\"item-price\">$899.00<span>$649.00</span></p>\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"btn btn-primary\">Add to Cart</a>\n\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t -->\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t<div class=\"col-sm-3\">\n\t\t\t\t\t\t\t<div class=\"thumb-wrapper\">\n\t\t\t\t\t\t\t\t<div class=\"img-box zoom\">\n\t\t\t\t\t\t\t\t\t<img src=\"../assets/images/socks/womens/womens4.jpg\" class=\"img-responsive img-fluid\" alt=\"\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<!-- <div class=\"thumb-content\">\n\t\t\t\t\t\t\t\t\t<h4>Nikon DSLR</h4>\n\t\t\t\t\t\t\t\t\t<p class=\"item-price\">$315.00<span>$250.00</span></p>\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"btn btn-primary\">Add to Cart</a>\n\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t -->\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"item carousel-item\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-3\">\n\t\t\t\t\t\t\t<div class=\"thumb-wrapper\">\n\t\t\t\t\t\t\t\t<div class=\"img-box zoom\">\n\t\t\t\t\t\t\t\t\t<img src=\"../assets/images/socks/womens/womens5.jpg\" class=\"img-responsive img-fluid\" alt=\"\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<!-- <div class=\"thumb-content\">\n\t\t\t\t\t\t\t\t\t<h4>Sony Play Station</h4>\n\t\t\t\t\t\t\t\t\t<p class=\"item-price\">$289.00 <span>$269.00</span></p>\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"btn btn-primary\">Add to Cart</a>\n\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t -->\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-3\">\n\t\t\t\t\t\t\t<div class=\"thumb-wrapper\">\n\t\t\t\t\t\t\t\t<div class=\"img-box zoom\">\n\t\t\t\t\t\t\t\t\t<img src=\"../assets/images/socks/womens/womens6.jpg\" class=\"img-responsive img-fluid\" alt=\"\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<!-- <div class=\"thumb-content\">\n\t\t\t\t\t\t\t\t\t<h4>Macbook Pro</h4>\n\t\t\t\t\t\t\t\t\t<p class=\"item-price\">$1099.00 <span>$869.00</span></p>\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"btn btn-primary\">Add to Cart</a>\n\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t -->\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\n\t\t\t</div>\n\t\t\t<!-- Carousel controls -->\n\t\t\t<a class=\"carousel-control left carousel-control-prev\" href=\"#myCarousel\" data-slide=\"prev\">\n\t\t\t\t<i class=\"fa fa-angle-left\"></i>\n\t\t\t</a>\n\t\t\t<a class=\"carousel-control right carousel-control-next\" href=\"#myCarousel\" data-slide=\"next\">\n\t\t\t\t<i class=\"fa fa-angle-right\"></i>\n\t\t\t</a>\n\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n"

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