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
exports.readConversation = exports.readSnapshot = exports.readSnapshots = exports.readBlockingUser = exports.readFriends = exports.readAsset = exports.readAssets = void 0;
const http_1 = require("./http");
const readAssets = (token) => __awaiter(void 0, void 0, void 0, function* () { return (0, http_1.request)(token)('/assets'); });
exports.readAssets = readAssets;
const readAsset = (token, id) => __awaiter(void 0, void 0, void 0, function* () { return (0, http_1.request)(token)(`/assets/${id}`); });
exports.readAsset = readAsset;
const readFriends = (token) => __awaiter(void 0, void 0, void 0, function* () { return (0, http_1.request)(token)('/friends'); });
exports.readFriends = readFriends;
const readBlockingUser = (token) => __awaiter(void 0, void 0, void 0, function* () { return (0, http_1.request)(token)('/blocking_users'); });
exports.readBlockingUser = readBlockingUser;
const readSnapshots = (token) => __awaiter(void 0, void 0, void 0, function* () { return (0, http_1.request)(token)('/snapshots'); });
exports.readSnapshots = readSnapshots;
const readSnapshot = (token, id) => __awaiter(void 0, void 0, void 0, function* () { return (0, http_1.request)(token)(`/snapshots/${id}`); });
exports.readSnapshot = readSnapshot;
const readConversation = (token, id) => __awaiter(void 0, void 0, void 0, function* () { return (0, http_1.request)(token)(`/conversations/${id}`); });
exports.readConversation = readConversation;
