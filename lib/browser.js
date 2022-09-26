"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.audiosPlayList = exports.checkMixinVersionBiggerThanTarget = exports.changeTheme = exports.getTheme = exports.getConversationID = exports.getMixinVersion = exports.getVersion = exports.isImmersive = exports.environment = exports.getContext = void 0;
/**
 * @description 获取当前页面的环境是否为 Mixin 的环境
 * 如果不是，则返回 undefined
 * 如果是，则返回相应的 Context 信息
 * @returns {MixinContext | undefined}
 */
const getContext = () => {
    let ctx;
    if (window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.MixinContext) {
        ctx = JSON.parse(prompt('MixinContext.getContext()'));
        ctx.platform = ctx.platform || 'iOS';
    }
    else if (window.MixinContext && typeof window.MixinContext.getContext === 'function') {
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
const environment = () => { var _a; return ((_a = (0, exports.getContext)()) === null || _a === void 0 ? void 0 : _a.platform) || ''; };
exports.environment = environment;
/**
 * @description 检查当前页面是否开启了沉浸式模式，
 * 即使后台开启了沉浸式模式，在非 mixin 环境内也不会生效。
 * 如果期望在非 mixin 环境下自定义一些样式，可以使用此方法
 * @returns {boolean}
 */
const isImmersive = () => { var _a; return ((_a = (0, exports.getContext)()) === null || _a === void 0 ? void 0 : _a.immersive) || false; };
exports.isImmersive = isImmersive;
/**
 * @description 获取当前客户端的版本号
 * @returns 版本号 如：0.31.1
 */
const getVersion = () => { var _a; return ((_a = (0, exports.getContext)()) === null || _a === void 0 ? void 0 : _a.app_version) || ''; };
exports.getVersion = getVersion;
let reg = /Mixin\/([0-9]+)\.([0-9]+)\.([0-9]+)/;
/**
 * @description 获取当前客户端 Mixin 的版本号
 * @returns 版本号 如： 0.31.1
 */
const getMixinVersion = () => {
    const [_, a, b, c] = navigator.userAgent.match(reg) || [];
    if (!a && !b && !c)
        return '';
    return [a, b, c].join('.');
};
exports.getMixinVersion = getMixinVersion;
/**
 * @description 获取当前会话的conversation_id
 * @returns conversation_id
 */
const getConversationID = () => { var _a; return ((_a = (0, exports.getContext)()) === null || _a === void 0 ? void 0 : _a.conversation_id) || ''; };
exports.getConversationID = getConversationID;
/**
 * @description 获取当前主题颜色
 * @returns 当前主题色值 如 #ffffff
 */
const getTheme = () => {
    const metas = document.getElementsByTagName('meta');
    for (let i = 0; i < metas.length; i++)
        if (metas[i].name === 'theme-color') {
            return metas[i].content || '';
        }
};
exports.getTheme = getTheme;
/**
 * @description 改变当前页面的主题色
 * @param theme 要改变的颜色 如 #9d00ff
 */
const changeTheme = (theme) => {
    const head = document.getElementsByTagName('head')[0];
    const metas = document.getElementsByTagName('meta');
    for (let i = 0; i < metas.length; i++)
        if (metas[i].name === 'theme-color') {
            head.removeChild(metas[i]);
            break;
        }
    const meta = document.createElement('meta');
    meta.name = 'theme-color';
    meta.content = theme;
    head.appendChild(meta);
    const e = (0, exports.environment)();
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
const checkMixinVersionBiggerThanTarget = (targetVersion) => {
    const [a, b, c] = (0, exports.getMixinVersion)().split('.').map(Number);
    const [ta, tb, tc] = targetVersion.split('.').map(Number);
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
const audiosPlayList = (audios) => {
    switch ((0, exports.environment)()) {
        case 'iOS':
            return window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.playlist && window.webkit.messageHandlers.playlist.postMessage(audios);
        case 'Android':
        case 'Desktop':
            return window.MixinContext && typeof window.MixinContext.playlist === 'function' && window.MixinContext.playlist(audios);
    }
};
exports.audiosPlayList = audiosPlayList;
