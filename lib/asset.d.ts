import { Payment, PaymentParams } from '../types';
export interface SnapshotParams {
    trace?: string;
    snapshot_id?: string;
}
export declare const pay: (payment: PaymentParams) => void;
export declare const checkIsPaid: (p: Payment) => Promise<any>;
export declare const openSnapshot: (params: SnapshotParams) => void;
export declare const openTransfer: (user_id: string) => void;
export interface Address {
    asset: string;
    destination: string;
    tag?: string;
    address?: string;
}
export declare const addAddress: (address: Address) => void;
export declare const removeAddress: (address: Address) => void;
export declare const withdrawal: (payment: PaymentParams) => void;
