import { BaseDelegatedPropertyAction } from './baseDelegatedAction.class';
export declare class LocalStorageDelegatedPropertyAction extends BaseDelegatedPropertyAction {
    constructor(propertyKey: string, canonicalKey: string);
    set(newValue: any): void;
    preConditionsSatisfied(): boolean;
    private read();
    private write(val);
}
