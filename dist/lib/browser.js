"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.audiosPlayList = exports.checkMixinVersionBiggerThanTarget = exports.changeTheme = exports.getTheme = exports.getConversationID = exports.getMixinVersion = exports.getVersion = exports.isImmersive = exports.enviroment = exports.getContext = void 0;
/**
 * @description 获取当前页面的环境是否为 Mixin 的环境
 * 如果不是，则返回 undefined
 * 如果是，则返回相应的 Context 信息
 * @returns {MixinContext | undefined}
 */
var getContext = function () {
    var ctx;
    if (window.webkit &&
        window.webkit.messageHandlers &&
        window.webkit.messageHandlers.MixinContext) {
        ctx = JSON.parse(prompt('MixinContext.getContext()'));
        ctx.platform = ctx.platform || 'iOS';
    }
    else if (window.MixinContext &&
        typeof window.MixinContext.getContext === 'function') {
        ctx = JSON.parse(window.MixinContext.getContext());
        ctx.platform = ctx.platform || 'Android';
    }
    return ctx;
};
exports.getContext = getContext;
/**
 * @description 获取当前页面的环境是否为 mixin 环境
 * 如果不是的话，则返回 ''
 * 如果是的话，会返回相应的环境变量
 * @returns {string} '' or 'iOS' or 'Android' or 'Desktop'
 */
var enviroment = function () { var _a; return ((_a = (0, exports.getContext)()) === null || _a === void 0 ? void 0 : _a.platform) || ''; };
exports.enviroment = enviroment;
/**
 * @description 检查当前页面是否开启了沉浸式模式，
 * 即使后台开启了沉浸式模式，在非 mixin 环境内也不会生效。
 * 如果期望在非 mixin 环境下自定义一些样式，可以使用此方法
 * @returns {boolean}
 */
var isImmersive = function () { var _a; return ((_a = (0, exports.getContext)()) === null || _a === void 0 ? void 0 : _a.immersive) || false; };
exports.isImmersive = isImmersive;
/**
 * @description 获取当前客户端的版本号
 * @returns 版本号 如：0.31.1
 */
var getVersion = function () { var _a; return ((_a = (0, exports.getContext)()) === null || _a === void 0 ? void 0 : _a.app_version) || ''; };
exports.getVersion = getVersion;
var reg = /Mixin\/([0-9]+)\.([0-9]+)\.([0-9]+)/;
/**
 * @description 获取当前客户端 Mixin 的版本号
 * @returns 版本号 如： 0.31.1
 */
var getMixinVersion = function () {
    var _a = navigator.userAgent.match(reg) || [], _ = _a[0], a = _a[1], b = _a[2], c = _a[3];
    return [a, b, c].join('.');
};
exports.getMixinVersion = getMixinVersion;
/**
 * @description 获取当前会话的conversation_id
 * @returns conversation_id
 */
var getConversationID = function () { var _a; return ((_a = (0, exports.getContext)()) === null || _a === void 0 ? void 0 : _a.conversation_id) || ''; };
exports.getConversationID = getConversationID;
/**
 * @description 获取当前主题颜色
 * @returns 当前主题色值 如 #ffffff
 */
var getTheme = function () {
    var metas = document.getElementsByTagName('meta');
    for (var i = 0; i < metas.length; i++)
        if (metas[i].name === 'theme-color') {
            return metas[i].content || '';
        }
};
exports.getTheme = getTheme;
/**
 * @description 改变当前页面的主题色
 * @param theme 要改变的颜色 如 #9d00ff
 */
var changeTheme = function (theme) {
    var head = document.getElementsByTagName('head')[0];
    var metas = document.getElementsByTagName('meta');
    for (var i = 0; i < metas.length; i++)
        if (metas[i].name === 'theme-color') {
            head.removeChild(metas[i]);
            break;
        }
    var meta = document.createElement('meta');
    meta.name = 'theme-color';
    meta.content = theme;
    head.appendChild(meta);
    var e = (0, exports.enviroment)();
    if (e === 'iOS')
        window.webkit.messageHandlers.reloadTheme && window.webkit.messageHandlers.reloadTheme.postMessage('');
    else if (e === 'Android')
        window.MixinContext.reloadTheme && window.MixinContext.reloadTheme();
};
exports.changeTheme = changeTheme;
/**
 * @description 检查用户Mixin版本是否高于指定版本
 * @param targetVersion 指定 version
 * @returns {boolean}
 */
var checkMixinVersionBiggerThanTarget = function (targetVersion) {
    var _a = (0, exports.getMixinVersion)().split('.').map(Number), a = _a[0], b = _a[1], c = _a[2];
    var _b = targetVersion.split('.').map(Number), ta = _b[0], tb = _b[1], tc = _b[2];
    if (a > ta)
        return true;
    if (a === ta) {
        if (b > tb)
            return true;
        if (b === tb && c >= tc)
            return true;
    }
    return false;
};
exports.checkMixinVersionBiggerThanTarget = checkMixinVersionBiggerThanTarget;
/**
 * @description 唤起原生的播放列表，支持后台播放
 * @param audios mp3 字符串数组
 */
var audiosPlayList = function (audios) {
    switch ((0, exports.enviroment)()) {
        case 'iOS':
            return window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.playlist && window.webkit.messageHandlers.playlist.postMessage(audios);
        case 'Android':
        case 'Desktop':
            return window.MixinContext && (typeof window.MixinContext.playlist === 'function') && window.MixinContext.playlist(audios);
    }
};
exports.audiosPlayList = audiosPlayList;
