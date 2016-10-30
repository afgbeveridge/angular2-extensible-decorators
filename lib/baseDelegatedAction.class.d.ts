import { DelegatedPropertyAction } from './delegatedPropertyAction.interface';
export declare class BaseDelegatedPropertyAction implements DelegatedPropertyAction {
    storageKey: string;
    propertyKey: string;
    protected val: any;
    constructor(propertyKey: string, canonicalKey: string);
    get(): any;
    set(newValue: any): void;
    preConditionsSatisfied(): boolean;
}
