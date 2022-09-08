import { Payment, PaymentParmas } from '../types';
export interface SnapshotParams {
    trace?: string;
    snapshot_id?: string;
}
export declare const pay: (payment: PaymentParmas) => void;
export declare const checkIsPaid: (p: Payment) => Promise<any>;
export declare const openSnapshot: (params: SnapshotParams) => void;
export declare const openTransfer: (user_id: string) => void;
export interface Address {
    assest: string;
    destination: string;
    tag?: string;
    address?: string;
}
export declare const addAddress: (address: Address) => void;
export declare const removeAddress: (address: Address) => void;
export declare const withdrawal: (payment: PaymentParmas) => void;
