"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var baseDelegatedAction_class_1 = require('./baseDelegatedAction.class');
var LocalStorageDelegatedPropertyAction = (function (_super) {
    __extends(LocalStorageDelegatedPropertyAction, _super);
    function LocalStorageDelegatedPropertyAction(propertyKey, canonicalKey) {
        _super.call(this, propertyKey, canonicalKey);
        this.val = JSON.parse(this.read());
    }
    LocalStorageDelegatedPropertyAction.prototype.set = function (newValue) {
        this.write(JSON.stringify(newValue));
        _super.prototype.set.call(this, newValue);
    };
    LocalStorageDelegatedPropertyAction.prototype.preConditionsSatisfied = function () {
        return window.localStorage && true;
    };
    LocalStorageDelegatedPropertyAction.prototype.read = function () {
        return localStorage.getItem(this.storageKey) || null;
    };
    LocalStorageDelegatedPropertyAction.prototype.write = function (val) {
        localStorage.setItem(this.storageKey, val);
    };
    return LocalStorageDelegatedPropertyAction;
}(baseDelegatedAction_class_1.BaseDelegatedPropertyAction));
exports.LocalStorageDelegatedPropertyAction = LocalStorageDelegatedPropertyAction;
//# sourceMappingURL=localStorageAction.class.js.map