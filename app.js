var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var angular2_1 = require('angular2/angular2');
var _ = require('lodash');
var moment = require('moment');
var numeral = require('numeral');
var AppComponent = (function () {
    function AppComponent() {
        this.firstName = 'T';
        this.lastName = 'N';
        this.numeralValue = 1000000;
        this.momentValue = '2015-11-01';
    }
    Object.defineProperty(AppComponent.prototype, "fullName", {
        get: function () {
            if (!_.isEmpty(this.firstName) && !_.isEmpty(this.lastName)) {
                return this.firstName + " " + this.lastName;
            }
            else {
                return 'Input both of name fields.';
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppComponent.prototype, "formattedNumeralValue", {
        get: function () {
            return numeral(this.numeralValue).format('0,0.000');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppComponent.prototype, "formattedMomentValue", {
        get: function () {
            return moment(this.momentValue).format('MMMM Do YYYY, h:mm:ss a');
        },
        enumerable: true,
        configurable: true
    });
    AppComponent = __decorate([
        angular2_1.Component({
            selector: 'my-app',
            template: "\n      <h1>My First Angular 2 App</h1>      \n      <hr>\n      <h2>{{fullName}}</h2>\n      <div><input type=\"text\" [(ng-model)]=\"firstName\" /></div>\n      <div><input type=\"text\" [(ng-model)]=\"lastName\" /></div>\n      <hr>\n      <h2>{{formattedNumeralValue}}</h2>\n      <div><input type=\"text\" [(ng-model)]=\"numeralValue\" /></div>\n      <hr>\n      <h2>{{formattedMomentValue}}</h2>\n      <div><input type=\"text\" [(ng-model)]=\"momentValue\" /></div>\n    "
        })
    ], AppComponent);
    return AppComponent;
})();
angular2_1.bootstrap(AppComponent);
