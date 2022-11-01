import { Payment, PaymentParams } from '../types';
import { mixinRequest, mixinSchema } from './http';

export const pay = (payment: PaymentParams) => {
  const { asset, amount, recipient } = payment;
  if (!asset || !amount || !recipient) throw new Error('asset, amount, recipient are required');
  mixinSchema('pay', payment);
};

export const getPayment = (_p: PaymentParams) => {
  const p: Payment = {
    asset_id: _p.asset,
    trace_id: _p.trace,
    opponent_id: _p.recipient,
    amount: String(_p.amount),
  };
  return mixinRequest('/payments', {}, 'post', p);
};

export const openSnapshotPage = (params: { trace_id?: string; snapshot_id?: string }) => {
  if (!params.trace_id && !params.snapshot_id) throw new Error('snapshot_id or trace_id is required');
  if (params.trace_id) mixinSchema(`snapshots`, { trace_id: params.trace_id });
  else if (params.snapshot_id) mixinSchema(`snapshots/${params.snapshot_id}`);
};

export const openTransferPage = (user_id: string) => mixinSchema(`transfer/${user_id}`);

export interface Address {
  asset: string;
  destination: string;
  label?: string;
  tag?: string;
  address?: string;
}

export const addAddress = (address: Address) => {
  if (!address.label || !address.asset || !address.destination) throw new Error('label, asset and destination is required');
  mixinSchema('address', address);
};

export const deleteAddress = (address: Address) => {
  if (!address.address || !address.asset) throw new Error('address and asset is required');
  mixinSchema('address', { ...address, action: 'delete' });
};

export const withdrawal = (payment: PaymentParams) => {
  const { address, asset, amount } = payment;
  if (!address || !asset || !amount) throw new Error('address, asset, amount are required');
  mixinSchema('withdraw', payment);
};
