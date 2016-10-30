"use strict";
function PersistentComponent(annotation) {
    return function (target) {
        var parentTarget = Object.getPrototypeOf(target.prototype).constructor;
        return target;
    };
}
exports.PersistentComponent = PersistentComponent;
;
//# sourceMappingURL=persistentComponent.decorator.js.map