import { AuthParams } from '../types';
export declare const toAuthPage: (params: AuthParams) => void;
export declare const openUserModal: (user_id: string) => void;
export declare const openConversation: (conversation_id: string, user?: string) => void;
export declare const openAppHomePage: (app_id: string, params: object, action?: string) => void;
