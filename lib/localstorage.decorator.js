"use strict";
var localStorageAction_class_1 = require('./localStorageAction.class');
var decorator_common_1 = require('./decorator.common');
function LocalStorage(optionsOrPrefix) {
    function ensureConfigured(opts) {
        opts.factory =
            opts.factory ||
                (function (p, c) { return new localStorageAction_class_1.LocalStorageDelegatedPropertyAction(p, c); });
        return opts;
    }
    return decorator_common_1.AccessHandler(ensureConfigured(typeof optionsOrPrefix === "string" ?
        {
            storagePrefix: optionsOrPrefix,
            createToJsonOverride: true
        }
        : optionsOrPrefix));
}
exports.LocalStorage = LocalStorage;
//# sourceMappingURL=localstorage.decorator.js.map