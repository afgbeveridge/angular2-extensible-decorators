"use strict";
var sessionStorageAction_class_1 = require('./sessionStorageAction.class');
var decorator_common_1 = require('./decorator.common');
function SessionStorage(optionsOrPrefix) {
    function ensureConfigured(opts) {
        opts.factory =
            opts.factory ||
                (function (p, c) { return new sessionStorageAction_class_1.SessionStorageDelegatedPropertyAction(p, c); });
        return opts;
    }
    return decorator_common_1.AccessHandler(ensureConfigured(typeof optionsOrPrefix === "string" ?
        {
            storagePrefix: optionsOrPrefix,
            createToJsonOverride: true
        }
        : optionsOrPrefix));
}
exports.SessionStorage = SessionStorage;
//# sourceMappingURL=sessionStorage.decorator.js.map