"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sharePostToFriend = exports.shareLiveToFriend = exports.shareAppCardToFriend = exports.shareContactToFriend = exports.shareImageToFriend = exports.shareTextToFriend = void 0;
const http_1 = require("./http");
const utils_1 = require("./utils");
const shareMsg = (category, data) => (0, http_1.mixinSchema)('send', { category, data: getEncodeData(data) });
/**
 * @description 分享一段文字 给稍后在客户端内指定的会话
 * @param text 分享的文字
 */
const shareTextToFriend = (text) => shareMsg('text', { text });
exports.shareTextToFriend = shareTextToFriend;
/**
 * @description 分享一张图片 给稍后在客户端内指定的会话
 * @param url 要分享的图片的链接
 */
const shareImageToFriend = (url) => shareMsg('image', url);
exports.shareImageToFriend = shareImageToFriend;
/**
 * @description 分享一个联系人 给稍后在客户端内指定的会话
 * @param user_id 要分享的联系人 user_id
 */
const shareContactToFriend = (user_id) => shareMsg('contact', { user_id });
exports.shareContactToFriend = shareContactToFriend;
/**
 * @description 分享一个应用卡片 给稍后在客户端内指定的会话
 * @param appCard 分享的应用卡片
 */
const shareAppCardToFriend = (appCard) => shareMsg('app_card', appCard);
exports.shareAppCardToFriend = shareAppCardToFriend;
/**
 * @description 分享一个直播 给稍后在客户端内指定的会话
 * @param liveCard 分享的直播卡片
 */
const shareLiveToFriend = (liveCard) => shareMsg('live', liveCard);
exports.shareLiveToFriend = shareLiveToFriend;
/**
 * @description 分享一个支持 md 的文章 给稍后在客户端内指定的会话
 * @param post markdown 格式的文章
 */
const sharePostToFriend = (post) => shareMsg('post', post);
exports.sharePostToFriend = sharePostToFriend;
function getEncodeData(data) {
    if (typeof data === 'object')
        data = JSON.stringify(data);
    return encodeURIComponent((0, utils_1.base64encode)(data));
}
