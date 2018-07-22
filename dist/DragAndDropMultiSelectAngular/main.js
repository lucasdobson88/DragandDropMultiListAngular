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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div style=\"text-align:center\">\n  <h1 class=\"mb-3\">\n    Welcome to drag and drop lists!\n  </h1>\n</div>\n<app-list></app-list>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng2_dragula__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-dragula */ "./node_modules/ng2-dragula/dist/fesm5/ng2-dragula.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_list_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/list/list.component */ "./src/app/components/list/list.component.ts");
/* harmony import */ var _services_list_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/list-service */ "./src/app/services/list-service.ts");
/* harmony import */ var _components_add_item_add_item_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/add-item/add-item.component */ "./src/app/components/add-item/add-item.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_add_list_add_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/add-list/add-list.component */ "./src/app/components/add-list/add-list.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _components_list_list_component__WEBPACK_IMPORTED_MODULE_4__["ListComponent"],
                _components_add_item_add_item_component__WEBPACK_IMPORTED_MODULE_6__["AddItemComponent"],
                _components_add_list_add_list_component__WEBPACK_IMPORTED_MODULE_8__["AddListComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__["NavbarComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                ng2_dragula__WEBPACK_IMPORTED_MODULE_2__["DragulaModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"]
            ],
            providers: [_services_list_service__WEBPACK_IMPORTED_MODULE_5__["ListService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/add-item/add-item.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/add-item/add-item.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/add-item/add-item.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/add-item/add-item.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4>Add Item</h4>\n<div class=\"card card-body mb-3\">\n  <form (ngSubmit)=\"onSubmit()\">\n    <div class=\"form-group\">\n      <input type=\"text\" name=\"name\" [(ngModel)]=\"name\" placeholder=\"Name\" class=\"form-control\">\n    </div>\n    <input type=\"submit\" value=\"Add Item\" class=\"btn btn-light\" [disabled]=\"!this.name\">\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/components/add-item/add-item.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/add-item/add-item.component.ts ***!
  \***********************************************************/
/*! exports provided: AddItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddItemComponent", function() { return AddItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_list_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/list-service */ "./src/app/services/list-service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddItemComponent = /** @class */ (function () {
    function AddItemComponent(listService) {
        this.listService = listService;
    }
    AddItemComponent.prototype.ngOnInit = function () {
    };
    AddItemComponent.prototype.onSubmit = function () {
        // create the new item
        var newItem = {
            id: this.listService.generateId(),
            name: this.name
        };
        //add item to the array living on the service
        this.listService.addItem(newItem);
        this.clearState();
    };
    AddItemComponent.prototype.clearState = function () {
        this.id = null;
        this.name = null;
        this.listService.clearState();
    };
    AddItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-item',
            template: __webpack_require__(/*! ./add-item.component.html */ "./src/app/components/add-item/add-item.component.html"),
            styles: [__webpack_require__(/*! ./add-item.component.css */ "./src/app/components/add-item/add-item.component.css")]
        }),
        __metadata("design:paramtypes", [_services_list_service__WEBPACK_IMPORTED_MODULE_1__["ListService"]])
    ], AddItemComponent);
    return AddItemComponent;
}());



/***/ }),

/***/ "./src/app/components/add-list/add-list.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/add-list/add-list.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/add-list/add-list.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/add-list/add-list.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4>Add List</h4>\n<div class=\"card card-body mb-3\">\n  <form (ngSubmit)=\"onSubmit()\">\n    <div class=\"form-group\">\n      <input type=\"text\" name=\"name\" [(ngModel)]=\"name\" placeholder=\"Name\" class=\"form-control\">\n    </div>\n    <input type=\"submit\" value=\"Add List\" class=\"btn btn-light\" [disabled]=\"!this.name\">\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/components/add-list/add-list.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/add-list/add-list.component.ts ***!
  \***********************************************************/
/*! exports provided: AddListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddListComponent", function() { return AddListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_list_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/list-service */ "./src/app/services/list-service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddListComponent = /** @class */ (function () {
    function AddListComponent(listService) {
        this.listService = listService;
    }
    AddListComponent.prototype.ngOnInit = function () {
    };
    AddListComponent.prototype.onSubmit = function () {
        var newList = {
            id: this.listService.generateId(),
            name: this.name
        };
        this.listService.addList(newList);
        this.clearState();
    };
    AddListComponent.prototype.clearState = function () {
        this.id = null;
        this.name = null;
        this.listService.clearState();
    };
    AddListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-list',
            template: __webpack_require__(/*! ./add-list.component.html */ "./src/app/components/add-list/add-list.component.html"),
            styles: [__webpack_require__(/*! ./add-list.component.css */ "./src/app/components/add-list/add-list.component.css")]
        }),
        __metadata("design:paramtypes", [_services_list_service__WEBPACK_IMPORTED_MODULE_1__["ListService"]])
    ], AddListComponent);
    return AddListComponent;
}());



/***/ }),

/***/ "./src/app/components/list/list.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/list/list.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".list-group {\r\n    height: 500px;\r\n    overflow-y: scroll;\r\n}\r\n\r\n.list-container{\r\n    height: 500px;\r\n    overflow-y: scroll;\r\n}\r\n\r\n.list-container .list-group {\r\n    height: 100%;\r\n    overflow-y: hidden;\r\n    margin: 10px 0;\r\n}\r\n\r\n.colour-green-light{\r\n    background-color: #d6f5d6;\r\n}"

/***/ }),

/***/ "./src/app/components/list/list.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/list/list.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mb-3\">\n  <div class=\"row\">\n    <div class=\"col-md-4\">\n        <div class=\"card mb-3\">\n            <div class=\"card-header\">\n              Items\n            </div>\n            <div class=\"card-body\">\n                <ul class=\"list-group\" dragula=\"DRAGULA_FACTS\">\n                    <li (click)=\"toggleItemSelect(item)\" [class.colour-green-light]=\"selectedItemStyle[item.id]===true\" class=\"list-group-item\" *ngFor=\"let item of items\">\n                      <a>{{item.name}}</a>\n                    </li>\n                  </ul>\n            </div>\n          </div>\n    \n      <button class=\"btn btn-primary\" type=\"button\" (click)=\"generateItems()\">\n          Generate Items\n      </button>\n      <button class=\"btn btn-success\" type=\"button\" (click)=\"toggleForm()\">\n        Add Item\n    </button>\n    <button class=\"btn btn-danger\" type=\"button\" (click)=\"removeSelectedItems()\">\n      Remove Items\n   </button>\n    </div>\n    <div class=\"col-md-8\">\n        <div class=\"card mb-3\">\n            <div class=\"card-header\">\n              List\n            </div>\n            <div class=\"card-body\">\n                <div class=\"list-container\">\n\n                    <div *ngFor=\"let list of lists\" class=\"card mb-3\" (click)=\"toggleListSelect(list)\" [class.colour-green-light]=\"selectedListStyle[list.id]===true\">\n                        <div class=\"card-body\">\n                            <ul class=\"list-group mb-3\" dragula=\"DRAGULA_FACTS\">\n                                {{list.name}}\n                            </ul> \n                        </div>\n                      </div>\n                       \n                </div>\n            </div>\n          </div>\n    \n      <button class=\"btn btn-success\" type=\"button\" (click)=\"toggleListForm()\">\n        Add List\n    </button>\n    <button class=\"btn btn-danger\" type=\"button\" (click)=\"removeSelectedLists()\">\n      Remove Lists\n   </button>\n    </div>\n  </div>\n</div>\n<div class=\"container\">\n    <app-add-item *ngIf=\"itemFormOpen\"></app-add-item>\n    <app-add-list *ngIf=\"listFormOpen\"></app-add-list>\n</div>\n"

/***/ }),

/***/ "./src/app/components/list/list.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/list/list.component.ts ***!
  \***************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_list_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/list-service */ "./src/app/services/list-service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListComponent = /** @class */ (function () {
    function ListComponent(listService) {
        this.listService = listService;
        this.selectedItemStyle = [];
        this.itemFormOpen = false;
        this.selectedListStyle = [];
        this.listFormOpen = false;
    }
    ListComponent.prototype.ngOnInit = function () {
        var _this = this;
        //initialise the arrays that are used.
        this.selectedItems = [];
        this.listService.initEmptyArrayOfItems().subscribe(function (items) {
            _this.items = items;
        });
        this.selectedLists = [];
        this.listService.initEmptyArrayOfLists().subscribe(function (lists) {
            _this.lists = lists;
        });
    };
    // generate all the items to show to the user
    ListComponent.prototype.generateItems = function () {
        var _this = this;
        this.listService.generateItems().subscribe(function (items) {
            _this.items = items;
        });
    };
    ListComponent.prototype.toggleItemSelect = function (item) {
        var _this = this;
        var isFound = false;
        //Check if item exists in selected list, if so, remove
        this.selectedItems.forEach(function (cur, index) {
            if (item.id === cur.id) {
                _this.selectedItemStyle[item.id] = false;
                _this.selectedItems.splice(index, 1);
                isFound = true;
            }
        });
        if (!isFound) {
            // If we get to here, Add item to selectedList
            this.selectedItemStyle[item.id] = true;
            this.selectedItems.push(item);
        }
    };
    ListComponent.prototype.toggleForm = function () {
        this.itemFormOpen = !this.itemFormOpen;
    };
    // remove all the items that have been selected
    ListComponent.prototype.removeSelectedItems = function () {
        var _this = this;
        this.selectedItems.forEach(function (item) {
            _this.listService.removeItem(item);
        });
        this.selectedItems = [];
    };
    ListComponent.prototype.toggleListForm = function () {
        this.listFormOpen = !this.listFormOpen;
    };
    // removes all lists that have been selected
    ListComponent.prototype.removeSelectedLists = function () {
        var _this = this;
        this.selectedLists.forEach(function (list) {
            _this.listService.removeList(list);
        });
        this.selectedLists = [];
    };
    ListComponent.prototype.toggleListSelect = function (list) {
        var _this = this;
        var isFound = false;
        //Check if list exists in selected list, if so, remove
        this.selectedLists.forEach(function (cur, index) {
            if (list.id === cur.id) {
                _this.selectedListStyle[list.id] = false;
                _this.selectedLists.splice(index, 1);
                isFound = true;
            }
        });
        if (!isFound) {
            // If we get to here, Add list to selectedList
            this.selectedListStyle[list.id] = true;
            this.selectedLists.push(list);
        }
    };
    ListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! ./list.component.html */ "./src/app/components/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.css */ "./src/app/components/list/list.component.css")]
        }),
        __metadata("design:paramtypes", [_services_list_service__WEBPACK_IMPORTED_MODULE_1__["ListService"]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-dark bg-dark mb-3\">\n    <div class=\"container\">\n      <a href=\"/\" class=\"navbar-brand\">Drag and Drop</a>\n    </div>\n</nav>"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/services/list-service.ts":
/*!******************************************!*\
  !*** ./src/app/services/list-service.ts ***!
  \******************************************/
/*! exports provided: ListService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListService", function() { return ListService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/BehaviorSubject */ "./node_modules/rxjs-compat/_esm5/BehaviorSubject.js");
/* harmony import */ var rxjs_observable_of__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/observable/of */ "./node_modules/rxjs-compat/_esm5/observable/of.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListService = /** @class */ (function () {
    function ListService() {
        this.stateSource = new rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](true);
        this.stateClear = this.stateSource.asObservable();
        this.items = [];
        this.lists = [];
    }
    // functions for items
    ListService.prototype.initEmptyArrayOfItems = function () {
        return Object(rxjs_observable_of__WEBPACK_IMPORTED_MODULE_2__["of"])(this.items);
    };
    // generates all the items to show to the user, allowing components to observe the array: items
    ListService.prototype.generateItems = function () {
        this.items = [];
        for (var i = 0; i < 1000; i++) {
            var item = {
                id: this.generateId(),
                name: "list item " + (i + 1)
            };
            this.items.push(item);
        }
        return Object(rxjs_observable_of__WEBPACK_IMPORTED_MODULE_2__["of"])(this.items);
    };
    // generates a random id. Used so when users create new items, there is no need to track the ids
    ListService.prototype.generateId = function () {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    };
    ListService.prototype.addItem = function (item) {
        this.items.push(item);
    };
    ListService.prototype.removeItem = function (item) {
        var _this = this;
        this.items.forEach(function (cur, index) {
            if (item.id === cur.id) {
                _this.items.splice(index, 1);
            }
        });
    };
    ListService.prototype.clearState = function () {
        this.stateSource.next(true);
    };
    // functions for lists
    ListService.prototype.initEmptyArrayOfLists = function () {
        return Object(rxjs_observable_of__WEBPACK_IMPORTED_MODULE_2__["of"])(this.lists);
    };
    ListService.prototype.addList = function (list) {
        this.lists.push(list);
    };
    ListService.prototype.removeList = function (list) {
        var _this = this;
        this.lists.forEach(function (cur, index) {
            if (list.id === cur.id) {
                _this.lists.splice(index, 1);
            }
        });
    };
    ListService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ListService);
    return ListService;
}());



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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\learn\DragAndDropMultiSelectAngular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map