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
exports.openAppHomePage = exports.openConversation = exports.openUserModal = exports.toAuthPage = void 0;
var http_1 = require("./http");
var utils_1 = require("./utils");
var AUTH = {
    phone: 'PHONE:READ',
    profile: 'PROFILE:READ',
    contacts: 'CONTACTS:READ',
    assets: 'ASSETS:READ',
    snapshots: 'SNAPSHOTS:READ',
    messages: 'MESSAGES:REPRESENT'
};
var toAuthPage = function (params) {
    var _a = params || {}, client_id = _a.client_id, _scope = _a.scope, _b = _a.state, state = _b === void 0 ? '' : _b, _c = _a.return_to, return_to = _c === void 0 ? '' : _c;
    if (!client_id)
        throw new Error('client_id is required');
    if (!_scope)
        _scope = { profile: true };
    var url = 'https://mixin-www.zeromesh.net/oauth/authorize?';
    var scope = Object.keys(_scope).map(function (s) { return AUTH[s]; }).join('+');
    location.href = url + (0, utils_1.queryStringify)({ client_id: client_id, scope: scope, state: state, return_to: return_to });
};
exports.toAuthPage = toAuthPage;
var openUserModal = function (user_id) {
    return (0, http_1.mixinSchema)("users/" + user_id);
};
exports.openUserModal = openUserModal;
var openConversation = function (conversation_id, user) {
    return (0, http_1.mixinSchema)("conversations/" + conversation_id, { user: user });
};
exports.openConversation = openConversation;
var openAppHomePage = function (app_id, params, action) {
    if (action === void 0) { action = 'open'; }
    return (0, http_1.mixinSchema)("apps/" + app_id, __assign({ action: action }, params));
};
exports.openAppHomePage = openAppHomePage;
