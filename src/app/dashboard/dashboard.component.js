"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var auth_service_1 = require('../auth.service');
var DashboardComponent = (function () {
    function DashboardComponent(auth) {
        this.auth = auth;
        this.userProfile = JSON.parse(localStorage.getItem('profile'));
    }
    DashboardComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'dashboard',
            providers: [auth_service_1.Auth],
            template: "\n            <div id=\"dashboard\">\n                <h1 *ngIf=\"!auth.authenticated()\">Welcome, guest!</h1>\n                <h1 *ngIf=\"auth.authenticated()\">Welcome back, {{auth.userProfile.nickname}}!</h1>\n                <p>Begin your adventure by searching or selecting one of your saved favorites.</p>\n             <br />\n             <h3>Today's Most Liked:</h3>\n             </div>\n             ",
        }), 
        __metadata('design:paramtypes', [auth_service_1.Auth])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map