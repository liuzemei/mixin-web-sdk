"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.openCodeModal = exports.openAppHomePage = exports.openConversation = exports.openUserModal = exports.toAuthPage = void 0;
const http_1 = require("./http");
const utils_1 = require("./utils");
const AUTH = {
    phone: 'PHONE:READ',
    profile: 'PROFILE:READ',
    contacts: 'CONTACTS:READ',
    assets: 'ASSETS:READ',
    snapshots: 'SNAPSHOTS:READ',
    messages: 'MESSAGES:REPRESENT',
};
const toAuthPage = (params) => {
    let { client_id, scope: _scope, state = '', return_to = '', useCDN } = params || {};
    if (!client_id)
        throw new Error('client_id is required');
    if (!_scope)
        _scope = { profile: true };
    let url = useCDN ? 'https://mixin-www.zeromesh.net/oauth/authorize' : 'https://mixin.one/oauth/authorize';
    let scope = Object.keys(_scope)
        .map(s => AUTH[s])
        .join('+');
    location.href = url + (0, utils_1.queryStringify)({ client_id, scope, state, return_to });
};
exports.toAuthPage = toAuthPage;
const openUserModal = (user_id) => (0, http_1.mixinSchema)(`users/${user_id}`);
exports.openUserModal = openUserModal;
const openConversation = (conversation_id, user) => (0, http_1.mixinSchema)(`conversations/${conversation_id}`, { user });
exports.openConversation = openConversation;
const openAppHomePage = (app_id, params, action = 'open') => (0, http_1.mixinSchema)(`apps/${app_id}`, Object.assign({ action }, params));
exports.openAppHomePage = openAppHomePage;
const openCodeModal = (code_id) => (0, http_1.mixinSchema)(`codes/${code_id}`);
exports.openCodeModal = openCodeModal;
