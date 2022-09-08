import { Payment, PaymentParams } from '../types';
import { mixinRequest, mixinSchema } from './http';
import { queryStringify } from './utils';

export interface SnapshotParams {
  trace?: string;
  snapshot_id?: string;
}

export const pay = (payment: PaymentParams) => {
  const { asset, amount, recipient } = payment;
  if (!asset || !amount || !recipient) throw new Error('asset, amount, recipient are required');
  mixinSchema('pay', payment);
};

export const checkIsPaid = async (p: Payment) => mixinRequest('/payments', {}, 'post', p);

export const openSnapshot = (params: SnapshotParams) => {
  if (!params.trace && !params.snapshot_id) throw new Error('snapshot_id or trace is required');
  window.open(`mixin://snapshots${params.trace ? queryStringify(params) : '/' + params.snapshot_id}`);
  if (params.trace) mixinSchema(`snapshots`, params);
  else if (params.snapshot_id) mixinSchema(`snapshots/${params.snapshot_id}`);
};

export const openTransfer = (user_id: string) => mixinSchema(`transfer/${user_id}`);

export interface Address {
  asset: string;
  destination: string;
  tag?: string;
  address?: string;
}

export const addAddress = (address: Address) => {
  if (!address.asset || !address.destination) throw new Error('asset and destination is required');
  mixinSchema('address', address);
};

export const removeAddress = (address: Address) => {
  if (!address.address || !address.asset) throw new Error('address and asset is required');
  mixinSchema('address', { ...address, action: 'delete' });
};

export const withdrawal = (payment: PaymentParams) => {
  const { address, asset, amount } = payment;
  if (!address || !asset || !amount) throw new Error('address, asset, amount are required');
  mixinSchema('withdraw', payment);
};
