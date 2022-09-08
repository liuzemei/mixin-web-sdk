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
exports.withdrawal = exports.removeAddress = exports.addAddress = exports.openTransfer = exports.openSnapshot = exports.checkIsPaid = exports.pay = void 0;
const http_1 = require("./http");
const utils_1 = require("./utils");
const pay = (payment) => {
    const { asset, amount, recipient } = payment;
    if (!asset || !amount || !recipient)
        throw new Error('asset, amount, recipient are required');
    (0, http_1.mixinSchema)('pay', payment);
};
exports.pay = pay;
const checkIsPaid = (p) => __awaiter(void 0, void 0, void 0, function* () { return (0, http_1.mixinRequest)('/payments', {}, 'post', p); });
exports.checkIsPaid = checkIsPaid;
const openSnapshot = (params) => {
    if (!params.trace && !params.snapshot_id)
        throw new Error('snapshot_id or trace is required');
    window.open(`mixin://snapshots${params.trace ? '?' + (0, utils_1.queryStringify)(params) : '/' + params.snapshot_id}`);
    if (params.trace)
        (0, http_1.mixinSchema)(`snapshots`, params);
    else if (params.snapshot_id)
        (0, http_1.mixinSchema)(`snapshots/${params.snapshot_id}`);
};
exports.openSnapshot = openSnapshot;
const openTransfer = (user_id) => (0, http_1.mixinSchema)(`transfer/${user_id}`);
exports.openTransfer = openTransfer;
const addAddress = (address) => {
    if (!address.asset || !address.destination)
        throw new Error('asset and destination is required');
    (0, http_1.mixinSchema)('address', address);
};
exports.addAddress = addAddress;
const removeAddress = (address) => {
    if (!address.address || !address.asset)
        throw new Error('address and asset is required');
    (0, http_1.mixinSchema)('address', Object.assign(Object.assign({}, address), { action: 'delete' }));
};
exports.removeAddress = removeAddress;
const withdrawal = (payment) => {
    const { address, asset, amount } = payment;
    if (!address || !asset || !amount)
        throw new Error('address, asset, amount are required');
    (0, http_1.mixinSchema)('withdraw', payment);
};
exports.withdrawal = withdrawal;
