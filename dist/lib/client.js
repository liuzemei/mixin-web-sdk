"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
var http_1 = require("./http");
var Client = /** @class */ (function () {
    function Client(token) {
        this.request = (0, http_1.request)(token);
    }
    Client.prototype.readAssets = function () {
        return this.request("/assets");
    };
    Client.prototype.readAsset = function (id) {
        return this.request("/assets/" + id);
    };
    Client.prototype.readFriends = function () {
        return this.request("/friends");
    };
    Client.prototype.readBlockingUser = function () {
        return this.request("/blocking_users");
    };
    Client.prototype.readSnapshots = function () {
        return this.request("/snapshots");
    };
    Client.prototype.readSnapshot = function (id) {
        return this.request("/snapshots/" + id);
    };
    Client.prototype.readConversation = function (id) {
        return this.request("/conversations/" + id);
    };
    return Client;
}());
exports.Client = Client;
