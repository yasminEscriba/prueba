(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<header>\n\n    <mat-toolbar color=\"primary1\">\n        <span class=\"title-center1\"> \n      Ruleta de Interbank\n      </span>\n    </mat-toolbar>\n    <mat-toolbar color=\"primary2\">\n      <span class=\"title-center2\"> \n    www.ruleta.com\n    </span>\n  </mat-toolbar>\n  \n  <mat-toolbar color=\"primary\">\n      <span class=\"title-center\"> \n    Ruleta de Interbank\n    </span>\n  </mat-toolbar>\n</header>\n<body>\n<div align=\"center\">\n<p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p>\n  <span class=\"parrafo\"> \n    ¡Tienes 1 giro disponible!\n    </span>\n\n    <div class='section content'>\n      <img class='illustration' src='assets/images/Ruleta_on.svg' style='max-width: 300px'/>\n    </div>\n\n    <p><span class=\"parrafo\"> Detalle de premios en ruleta</span></p>\n    <div class=\"btns-premios\">\n      <a href=\"javascript:;\"  mat-button (click)=\"openDialog(1)\">\n        <img src=\"assets/images/Bot├│n_10.svg\" />\n      </a>\n      <a href=\"javascript:;\"  mat-button (click)=\"openDialog(2)\">\n        <img src=\"assets/images/bot_n_800.svg\" />\n      </a>\n      <a href=\"javascript:;\"  mat-button (click)=\"openDialog(3)\">\n        <img src=\"assets/images/Bot├│n_1000.svg\" />\n      </a>\n      <a href=\"javascript:;\"  mat-button (click)=\"openDialog(5)\">\n        <img src=\"assets/images/Bot├│n_fastfood.svg\" />\n      </a>\n      <a href=\"javascript:;\"  mat-button (click)=\"openDialog(4)\">\n        <img src=\"assets/images/Bot├│n_taxis.svg\" />\n      </a>\n      <a href=\"javascript:;\"  mat-button (click)=\"openDialog(2)\">\n        <img src=\"assets/images/Bot├│n_tiendas.svg\" />\n      </a>\n    </div>\n    \n  \n  \n  \n\n    <p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p>\n\n    <p>\n        <a href=\"javascript:;\"  mat-button (click)=\"openDialog(2)\">\n            <span class=\"parrafo1\"> ¿Cómo funciona la ruleta?</span>\n          </a>\n      \n      </p>\n  \n  </div>\n  </body>\n\n\n\n\n\n\n\n\n<footer></footer>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "abe-header nav {\n  width: 100%; }\n\n@media (min-width: 576px) {\n  abe-header nav {\n    width: 80%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFx5Z2VzY3JpYmFcXGFuZ3VsYXItYm9vdHN0cmFwLWV4YW1wbGUvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUVJLFdBQVcsRUFBQTs7QUFHYjtFQUxGO0lBT00sVUFBVSxFQUFBLEVBQ1giLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi9zdHlsZXMtdmFyaWFibGVzJztcclxuXHJcbmFiZS1oZWFkZXIge1xyXG4gIG5hdiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IG1hcC1nZXQoJGdyaWQtYnJlYWtwb2ludHMsIHNtKSkge1xyXG4gICAgbmF2IHtcclxuICAgICAgd2lkdGg6IDgwJTtcclxuICAgIH1cclxuICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent, DialogDataExampleDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogDataExampleDialog", function() { return DialogDataExampleDialog; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var AppComponent = /** @class */ (function () {
    function AppComponent(dialog) {
        this.dialog = dialog;
    }
    AppComponent.prototype.openDialog = function (nro) {
        this.dialog.open(DialogDataExampleDialog, {
            data: {
                vista: nro
            },
            height: '500px',
            width: '600px',
        });
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'abe-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], AppComponent);
    return AppComponent;
}());

var DialogDataExampleDialog = /** @class */ (function () {
    function DialogDataExampleDialog(data) {
        this.data = data;
    }
    DialogDataExampleDialog = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'dialog-data',
            template: __webpack_require__(/*! ./dialog.component.html */ "./src/app/dialog.component.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], DialogDataExampleDialog);
    return DialogDataExampleDialog;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _app_component__WEBPACK_IMPORTED_MODULE_6__["DialogDataExampleDialog"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"]
            ],
            entryComponents: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["DialogDataExampleDialog"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/dialog.component.html":
/*!***************************************!*\
  !*** ./src/app/dialog.component.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div mat-dialog-content>\r\n  <div *ngIf=\"data.vista == 1\">\r\n    \r\n      <p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p>\r\n      \r\n      <div   align=\"center\" style=\"height:500px\">\r\n        <p>&nbsp;</p>\r\n        \r\n          <img class='illustration' src='assets/images/Premio_10.svg' style='max-width: 150px'/>\r\n           <div id=bloque>\r\n              <p></p>\r\n            </div>\r\n          <p><span class=\"parrafo2\"> 1000 opciones extra de ganar </span>\r\n              <br /> <span class=\"parrafo2\">el sorteo del departamento, viaje y auto</span></p>  \r\n              \r\n              <div  class=\"center-div\">\r\n              <mat-dialog-actions>\r\n                <button  mat-button mat-dialog-close >Entendido</button> \r\n              </mat-dialog-actions> </div> \r\n      </div>\r\n      \r\n            \r\n    </div>\r\n  \r\n  <div *ngIf=\"data.vista == 2\">\r\n    <p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p>\r\n      \r\n      <div   align=\"center\" style=\"height:500px\">\r\n        <p>&nbsp;</p>\r\n        \r\n          <img class='illustration' src='assets/images/Premio_800.svg' style='max-width: 150px'/>\r\n           <div id=bloque>\r\n              <p></p>\r\n            </div>\r\n          <p><span class=\"parrafo2\"> 800 opciones extra de ganar </span>\r\n              <br /> <span class=\"parrafo2\">el sorteo del departamento, viaje y auto</span></p>  \r\n              \r\n              <div  class=\"center-div\">\r\n              <mat-dialog-actions>\r\n                <button   mat-button mat-dialog-close >Entendido</button> \r\n              </mat-dialog-actions> </div> \r\n      </div>\r\n  </div>\r\n\r\n  <div *ngIf=\"data.vista == 3\">\r\n    <p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p>\r\n      \r\n      <div   align=\"center\" style=\"height:500px\">\r\n        <p>&nbsp;</p>\r\n        \r\n          <img class='illustration' src='assets/images/Premio_1000.svg' style='max-width: 150px'/>\r\n           <div id=bloque>\r\n              <p></p>\r\n            </div>\r\n          <p><span class=\"parrafo2\"> 1000 opciones extra de ganar </span>\r\n              <br /> <span class=\"parrafo2\">el sorteo del departamento, viaje y auto</span></p>  \r\n              \r\n              <div  class=\"center-div\">\r\n              <mat-dialog-actions>\r\n                <button   mat-button mat-dialog-close >Entendido</button> \r\n              </mat-dialog-actions> </div> \r\n      </div>\r\n\r\n\r\n      <div *ngIf=\"data.vista == 4\">\r\n        <p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p>\r\n          \r\n          <div   align=\"center\" style=\"height:500px\">\r\n            <p>&nbsp;</p>\r\n            \r\n              <img class='illustration' src='assets/images/Premio_1000.svg' style='max-width: 150px'/>\r\n               <div id=bloque>\r\n                  <p></p>\r\n                </div>\r\n              <p><span class=\"parrafo2\"> 1000 opciones extra de ganar </span>\r\n                  <br /> <span class=\"parrafo2\">el sorteo del departamento, viaje y auto</span></p>  \r\n                  \r\n                  <div  class=\"center-div\">\r\n                  <mat-dialog-actions>\r\n                    <button   mat-button mat-dialog-close >Entendido</button> \r\n                  </mat-dialog-actions> </div> \r\n          </div>\r\n      \r\n\r\n\r\n</div>"

/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\ygescriba\angular-bootstrap-example\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map