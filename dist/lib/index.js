"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mixin = void 0;
var asset = require("./asset");
var browser = require("./browser");
var client_1 = require("./client");
var http_1 = require("./http");
var message = require("./message");
var network = require("./network");
var user = require("./user");
exports.Mixin = __assign(__assign(__assign(__assign(__assign({ Client: client_1.Client, mixinRequest: http_1.mixinRequest, mixinSchema: http_1.mixinSchema }, browser), message), asset), network), user);
exports.default = exports.Mixin;
