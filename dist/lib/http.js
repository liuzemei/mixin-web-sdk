"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mixinSchema = exports.mixinRequest = exports.request = void 0;
const utils_1 = require("./utils");
const hostURL = ['https://mixin-api.zeromesh.net', 'https://api.mixin.one'];
const request = (token) => {
    return (url, params = {}, method = 'get', data = {}) => __awaiter(void 0, void 0, void 0, function* () {
        const p = (0, utils_1.queryStringify)(params);
        const init = {
            method,
            body: undefined,
            headers: new Headers({
                'Content-Type': 'application/json',
                Authorization: token ? `Bearer ${token}` : '',
            }),
        };
        if (method.toUpperCase() !== 'GET')
            init.body = JSON.stringify(data);
        const resp = yield fetch(hostURL[0] + url + p, init);
        const res = yield resp.json();
        return res.data || res.error;
    });
};
exports.request = request;
exports.mixinRequest = (0, exports.request)();
const mixinSchema = (url, params = '') => {
    if (typeof params === 'object')
        params = (0, utils_1.queryStringify)(params);
    window.open(`mixin://${url}${params}`);
};
exports.mixinSchema = mixinSchema;
