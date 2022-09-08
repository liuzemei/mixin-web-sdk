export interface MixinContext {
    currency: string;
    immersive: boolean;
    appearance: 'light' | 'dark';
    platform: '' | 'Android' | 'iOS' | 'Desktop';
    conversation_id: string;
    app_version: string;
    locale: string;
}
/**
 * @description 获取当前页面的环境是否为 Mixin 的环境
 * 如果不是，则返回 undefined
 * 如果是，则返回相应的 Context 信息
 * @returns {MixinContext | undefined}
 */
export declare const getContext: () => MixinContext;
/**
 * @description 获取当前页面的环境是否为 mixin 环境
 * 如果不是的话，则返回 ''
 * 如果是的话，会返回相应的环境变量
 * @returns {string} '' or 'iOS' or 'Android' or 'Desktop'
 */
export declare const enviroment: () => "" | "Android" | "iOS" | "Desktop";
/**
 * @description 检查当前页面是否开启了沉浸式模式，
 * 即使后台开启了沉浸式模式，在非 mixin 环境内也不会生效。
 * 如果期望在非 mixin 环境下自定义一些样式，可以使用此方法
 * @returns {boolean}
 */
export declare const isImmersive: () => boolean;
/**
 * @description 获取当前客户端的版本号
 * @returns 版本号 如：0.31.1
 */
export declare const getVersion: () => string;
/**
 * @description 获取当前客户端 Mixin 的版本号
 * @returns 版本号 如： 0.31.1
 */
export declare const getMixinVersion: () => string;
/**
 * @description 获取当前会话的conversation_id
 * @returns conversation_id
 */
export declare const getConversationID: () => string;
/**
 * @description 获取当前主题颜色
 * @returns 当前主题色值 如 #ffffff
 */
export declare const getTheme: () => string;
/**
 * @description 改变当前页面的主题色
 * @param theme 要改变的颜色 如 #9d00ff
 */
export declare const changeTheme: (theme: string) => void;
/**
 * @description 检查用户Mixin版本是否高于指定版本
 * @param targetVersion 指定 version
 * @returns {boolean}
 */
export declare const checkMixinVersionBiggerThanTarget: (targetVersion: string) => boolean;
/**
 * @description 唤起原生的播放列表，支持后台播放
 * @param audios mp3 字符串数组
 */
export declare const audiosPlayList: (audios: string[]) => any;
