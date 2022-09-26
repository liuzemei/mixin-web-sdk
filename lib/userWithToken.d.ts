import { Asset, Conversation, Snapshot, User } from '../types';
export declare const readAssets: (token: string) => Promise<Asset[]>;
export declare const readAsset: (token: string, id: string) => Promise<Asset>;
export declare const readFriends: (token: string) => Promise<User[]>;
export declare const readBlockingUser: (token: string) => Promise<User[]>;
export declare const readSnapshots: (token: string) => Promise<Snapshot[]>;
export declare const readSnapshot: (token: string, id: string) => Promise<Snapshot>;
export declare const readConversation: (token: string, id: string) => Promise<Conversation>;
