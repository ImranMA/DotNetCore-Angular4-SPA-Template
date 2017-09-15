"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var app_component_1 = require("./components/app/app.component");
var additem_component_1 = require("./components/items/additem.component");
var ItemList_component_1 = require("./components/items/ItemList.component");
var navmenu_component_1 = require("./components/nav/navmenu.component");
var appRoutes = [
    {
        path: 'itemlist', component: ItemList_component_1.ItemListComponent
    },
    {
        path: 'additem', component: additem_component_1.AddItemComponent
    },
    { path: '**', redirectTo: 'home/index' },
    {
        path: '', redirectTo: 'home/index', pathMatch: 'full'
    }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule,
            router_1.RouterModule.forRoot(appRoutes)
        ],
        declarations: [app_component_1.AppComponent, navmenu_component_1.NavMenuComponent, ItemList_component_1.ItemListComponent, additem_component_1.AddItemComponent],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map