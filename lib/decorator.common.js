"use strict";
function PropertyInterceptor(options) {
    return AccessHandler(options);
}
exports.PropertyInterceptor = PropertyInterceptor;
function AccessHandler(options) {
    return function (target, key) {
        function makeKey(key) {
            return (options.storagePrefix || '') + '/' + key;
        }
        var privateName = '$__' + key, storeKey = makeKey(key);
        var handler = options.factory(key, storeKey);
        if (handler.preConditionsSatisfied()) {
            target[privateName] = handler;
            Object.defineProperty(target, key, {
                get: function () {
                    return this[privateName].get();
                },
                set: function (newVal) {
                    this[privateName].set(newVal);
                },
                enumerable: true,
                configurable: true
            });
            var notedKey_1 = target[privateName].constructor.name + '_notedKeys', jsonOverride = 'toJSON';
            target[notedKey_1] = target[notedKey_1] || [];
            target[notedKey_1].push(key);
            options.factory(notedKey_1, makeKey(notedKey_1)).set(target[notedKey_1]);
            if (options.createToJsonOverride && !target.hasOwnProperty(jsonOverride)) {
                target[jsonOverride] = function () {
                    var knownKeys = Array(target[notedKey_1]);
                    var result = { _notedKeys: knownKeys };
                    knownKeys.forEach(function (x) { return result[x] = target[x]; });
                    return result;
                };
            }
        }
    };
}
exports.AccessHandler = AccessHandler;
//# sourceMappingURL=decorator.common.js.map