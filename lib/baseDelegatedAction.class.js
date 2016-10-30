"use strict";
var BaseDelegatedPropertyAction = (function () {
    function BaseDelegatedPropertyAction(propertyKey, canonicalKey) {
        this.propertyKey = propertyKey;
        this.storageKey = canonicalKey;
    }
    BaseDelegatedPropertyAction.prototype.get = function () {
        return this.val;
    };
    BaseDelegatedPropertyAction.prototype.set = function (newValue) {
        this.val = newValue;
    };
    BaseDelegatedPropertyAction.prototype.preConditionsSatisfied = function () {
        return true;
    };
    return BaseDelegatedPropertyAction;
}());
exports.BaseDelegatedPropertyAction = BaseDelegatedPropertyAction;
//# sourceMappingURL=baseDelegatedAction.class.js.map