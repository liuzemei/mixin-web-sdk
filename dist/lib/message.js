"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sharePostToFriend = exports.shareLiveToFriend = exports.shareAppCardToFriend = exports.shareContactToFriend = exports.shareImageToFriend = exports.shareTextToFriend = void 0;
var http_1 = require("./http");
var utils_1 = require("./utils");
var shareMsg = function (category, data) {
    return (0, http_1.mixinSchema)('send', { category: category, data: getEncodeData(data) });
};
/**
* @description 分享一段文字 给稍后在客户端内指定的会话
* @param text 分享的文字
*/
var shareTextToFriend = function (text) { return shareMsg('text', { text: text }); };
exports.shareTextToFriend = shareTextToFriend;
/**
* @description 分享一张图片 给稍后在客户端内指定的会话
* @param url 要分享的图片的链接
*/
var shareImageToFriend = function (url) { return shareMsg('image', url); };
exports.shareImageToFriend = shareImageToFriend;
/**
* @description 分享一个联系人 给稍后在客户端内指定的会话
* @param user_id 要分享的联系人 user_id
*/
var shareContactToFriend = function (user_id) { return shareMsg('contact', { user_id: user_id }); };
exports.shareContactToFriend = shareContactToFriend;
/**
* @description 分享一个应用卡片 给稍后在客户端内指定的会话
* @param appCard 分享的应用卡片
*/
var shareAppCardToFriend = function (appCard) { return shareMsg('app_card', appCard); };
exports.shareAppCardToFriend = shareAppCardToFriend;
/**
* @description 分享一个直播 给稍后在客户端内指定的会话
* @param liveCard 分享的直播卡片
*/
var shareLiveToFriend = function (liveCard) { return shareMsg('live', liveCard); };
exports.shareLiveToFriend = shareLiveToFriend;
/**
* @description 分享一个支持 md 的文章 给稍后在客户端内指定的会话
* @param post markdown 格式的文章
*/
var sharePostToFriend = function (post) { return shareMsg('post', post); };
exports.sharePostToFriend = sharePostToFriend;
function getEncodeData(data) {
    if (typeof data === 'object')
        data = JSON.stringify(data);
    return encodeURIComponent((0, utils_1.base64encode)(data));
}
