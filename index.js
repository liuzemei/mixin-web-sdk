"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mixin = void 0;
const asset = require("./lib/asset");
const browser = require("./lib/browser");
const http_1 = require("./lib/http");
const message = require("./lib/message");
const network = require("./lib/network");
const user = require("./lib/user");
const userWithToken = require("./lib/userWithToken");
exports.Mixin = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({ mixinRequest: http_1.mixinRequest,
    mixinSchema: http_1.mixinSchema }, browser), message), asset), network), user), userWithToken);
exports.default = exports.Mixin;
