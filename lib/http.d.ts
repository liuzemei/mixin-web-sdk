export declare const request: (token?: string) => (url: string, params?: Object, method?: string, data?: Object) => Promise<any>;
export declare const mixinRequest: (url: string, params?: Object, method?: string, data?: Object) => Promise<any>;
export declare const mixinSchema: (url: string, params?: Object | string) => void;
