"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mixin = void 0;
const asset = require("./asset");
const browser = require("./browser");
const http_1 = require("./http");
const message = require("./message");
const network = require("./network");
const user = require("./user");
const userWithToken = require("./userWithToken");
exports.Mixin = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({ mixinRequest: http_1.mixinRequest,
    mixinSchema: http_1.mixinSchema }, browser), message), asset), network), user), userWithToken);
exports.default = exports.Mixin;
