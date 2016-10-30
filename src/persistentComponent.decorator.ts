
export function PersistentComponent(annotation: any) {
    return function (target: any) {
        var parentTarget = Object.getPrototypeOf(target.prototype).constructor;
        return target;
    };
};