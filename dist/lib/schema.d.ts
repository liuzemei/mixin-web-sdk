/**
 * @description 分享一段文字 给稍后在客户端内指定的会话
 * @param text 分享的文字
 */
export declare const shareTextToFriend: (text: string) => Window;
/**
 * @description 分享一张图片 给稍后在客户端内指定的会话
 * @param url 要分享的图片的链接
 */
export declare const shareImageToFriend: (url: string) => Window;
/**
 * @description 分享一个联系人 给稍后在客户端内指定的会话
 * @param user_id 要分享的联系人 user_id
 */
export declare const shareContactToFriend: (user_id: string) => Window;
export interface AppCard {
    app_id: string;
    title: string;
    description: string;
    icon_url: string;
    action: string;
}
/**
 * @description 分享一个应用卡片 给稍后在客户端内指定的会话
 * @param appCard 分享的应用卡片
 */
export declare const shareAppCardToFriend: (appCard: AppCard) => Window;
export interface LiveCard {
    url: string;
    width: number;
    height: number;
    thumb_url?: string;
}
/**
 * @description 分享一个直播 给稍后在客户端内指定的会话
 * @param liveCard 分享的直播卡片
 */
export declare const shareLiveToFriend: (liveCard: LiveCard) => Window;
/**
 * @description 分享一个支持 md 的文章 给稍后在客户端内指定的会话
 * @param post markdown 格式的文章
 */
export declare const sharePostToFriend: (post: any) => Window;
export interface Payment {
    asset: string;
    amount: string | number;
    memo?: string;
    recipient?: string;
    trace?: string;
    address?: string;
}
export declare const pay: (payment: Payment) => void;
export interface SnapshotParams {
    trace?: string;
    snapshot_id?: string;
}
export declare const openSnapshot: (params: SnapshotParams) => void;
export interface Address {
    assest: string;
    destination: string;
    tag?: string;
    address?: string;
}
export declare const addAddress: (address: Address) => void;
export declare const removeAddress: (address: Address) => void;
export declare const withdrawal: (payment: Payment) => void;
