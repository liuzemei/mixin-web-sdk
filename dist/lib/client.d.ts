import { Asset, Conversation, Snapshot, User } from "../types";
export declare class Client {
    request: (string: any) => Promise<any>;
    constructor(token: string);
    readAssets(): Promise<Asset[]>;
    readAsset(id: string): Promise<Asset>;
    readFriends(): Promise<User[]>;
    readBlockingUser(): Promise<User[]>;
    readSnapshots(): Promise<Snapshot[]>;
    readSnapshot(id: string): Promise<Snapshot>;
    readConversation(id: string): Promise<Conversation>;
}
