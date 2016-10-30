"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var baseDelegatedAction_class_1 = require('./baseDelegatedAction.class');
var SessionStorageDelegatedPropertyAction = (function (_super) {
    __extends(SessionStorageDelegatedPropertyAction, _super);
    function SessionStorageDelegatedPropertyAction(propertyKey, canonicalKey) {
        _super.call(this, propertyKey, canonicalKey);
        this.val = JSON.parse(this.read());
    }
    SessionStorageDelegatedPropertyAction.prototype.set = function (newValue) {
        this.write(JSON.stringify(newValue));
        _super.prototype.set.call(this, newValue);
    };
    SessionStorageDelegatedPropertyAction.prototype.preConditionsSatisfied = function () {
        return window.sessionStorage && true;
    };
    SessionStorageDelegatedPropertyAction.prototype.read = function () {
        return sessionStorage.getItem(this.storageKey) || null;
    };
    SessionStorageDelegatedPropertyAction.prototype.write = function (val) {
        sessionStorage.setItem(this.storageKey, val);
    };
    return SessionStorageDelegatedPropertyAction;
}(baseDelegatedAction_class_1.BaseDelegatedPropertyAction));
exports.SessionStorageDelegatedPropertyAction = SessionStorageDelegatedPropertyAction;
//# sourceMappingURL=sessionStorageAction.class.js.map