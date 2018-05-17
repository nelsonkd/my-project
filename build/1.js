webpackJsonp([1],{

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewQuotePageModule", function() { return NewQuotePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__new_quote__ = __webpack_require__(298);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NewQuotePageModule = /** @class */ (function () {
    function NewQuotePageModule() {
    }
    NewQuotePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__new_quote__["a" /* NewQuotePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__new_quote__["a" /* NewQuotePage */]),
            ],
        })
    ], NewQuotePageModule);
    return NewQuotePageModule;
}());

//# sourceMappingURL=new-quote.module.js.map

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewQuotePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_address_model__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_line_item_model__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_zip_code_zip_code__ = __webpack_require__(198);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the NewQuotePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NewQuotePage = /** @class */ (function () {
    function NewQuotePage(navCtrl, navParams, zipCodeProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.zipCodeProvider = zipCodeProvider;
        this.origin = new __WEBPACK_IMPORTED_MODULE_2__models_address_model__["a" /* AddressModel */]();
        this.destination = new __WEBPACK_IMPORTED_MODULE_2__models_address_model__["a" /* AddressModel */]();
        this.lineItems = [];
        var li = new __WEBPACK_IMPORTED_MODULE_3__models_line_item_model__["a" /* LineItemModel */]();
        this.lineItems.push(li);
        this.origin.postalCode = '60606';
        this.destination.postalCode = '92126';
        this.zipCodeProvider.getCityByZipCode(this.origin.postalCode).subscribe(function (data) { console.log("DATA: " + JSON.stringify(data)); }, function (err) { console.log("ERROR: " + JSON.stringify(err)); }, function () { return console.log('Done loading zipcode'); });
        this.zipCodeProvider.getCityByZipCode(this.destination.postalCode).subscribe(function (data) { console.log("DATA: " + JSON.stringify(data)); }, function (err) { console.log("ERROR: " + JSON.stringify(err)); }, function () { return console.log('Done loading zipcode'); });
    }
    NewQuotePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NewQuotePage');
    };
    NewQuotePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-new-quote',template:/*ion-inline-start:"/Users/Ken/Projects/p44/pBlockDemo/src/pages/new-quote/new-quote.html"*/'<!--\n  Generated template for the NewQuotePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>New Quote</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div class="from-box">\n    <form (ngSubmit)="getQuote()" #registerForm="ngForm">\n      <ion-grid>\n          <ion-row>\n              <ion-col>\n                  <ion-item>\n                    <ion-label floating>Origin Postal Code</ion-label>\n                    <ion-input type="text" placeholder="Origin Postal Code" name="originPostalCode" [(ngModel)]="origin.postalCode" required></ion-input>\n                  </ion-item>\n              </ion-col>\n              <ion-col>\n                  <ion-item>\n                      <ion-label floating>Destination Postal Code</ion-label>\n                      <ion-input type="text" placeholder="Destination Postal Code" name="destinationPostalCode" [(ngModel)]="destination.postalCode" required></ion-input>\n                  </ion-item>\n              </ion-col>\n            </ion-row>\n            </ion-grid>\n      \n      <ion-row>\n        <ion-col class="signup-col">\n          <button ion-button class="submit-btn" full type="submit" [disabled]="!registerForm.form.valid">Get Quotes</button>\n        </ion-col>\n      </ion-row>\n      \n    </form>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/Ken/Projects/p44/pBlockDemo/src/pages/new-quote/new-quote.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__providers_zip_code_zip_code__["a" /* ZipCodeProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_zip_code_zip_code__["a" /* ZipCodeProvider */]) === "function" && _c || Object])
    ], NewQuotePage);
    return NewQuotePage;
    var _a, _b, _c;
}());

//# sourceMappingURL=new-quote.js.map

/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddressModel; });
var AddressModel = /** @class */ (function () {
    function AddressModel() {
        this.addressLines = [];
        this.county = 'US';
    }
    AddressModel.prototype.addAddressLine = function (item) {
        this.addressLines.push(item);
    };
    AddressModel.prototype.clearAddressLines = function () {
        this.addressLines = [];
    };
    return AddressModel;
}());

//# sourceMappingURL=address-model.js.map

/***/ }),

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LineItemModel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__package_dimension_model__ = __webpack_require__(301);

var LineItemModel = /** @class */ (function () {
    // nmfcItemCode: string;
    // nmfcSubCode: string;
    //  Need to create this.
    // hazmatDetail: HazmatModel[]
    function LineItemModel() {
        this.packageDimensions = [];
        this.freightClass = "70";
        this.packageType = "PLT";
        this.totalPackages = 1;
        this.totalPieces = 1;
        this.description = "TEST LINE ITEM";
        this.stackable = false;
        var pd = new __WEBPACK_IMPORTED_MODULE_0__package_dimension_model__["a" /* PackageDimensionModel */]();
        pd.height = 30;
        pd.width = 40;
        pd.length = 40;
        this.packageDimensions.push(pd);
    }
    return LineItemModel;
}());

//# sourceMappingURL=line-item-model.js.map

/***/ }),

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PackageDimensionModel; });
var PackageDimensionModel = /** @class */ (function () {
    function PackageDimensionModel() {
    }
    return PackageDimensionModel;
}());

//# sourceMappingURL=package-dimension-model.js.map

/***/ })

});
//# sourceMappingURL=1.js.map