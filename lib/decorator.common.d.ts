import { AccessorOptions } from './accessorOptions.interface';
export declare function PropertyInterceptor(options: AccessorOptions): (target: Object, key?: string) => void;
export declare function AccessHandler(options: AccessorOptions): (target: Object, key?: string) => void;
