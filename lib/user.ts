import { AuthParams, Scope } from '../types';
import { mixinSchema } from './http';
import { queryStringify } from './utils';

const AUTH = {
  phone: 'PHONE:READ',
  profile: 'PROFILE:READ',
  contacts: 'CONTACTS:READ',
  assets: 'ASSETS:READ',
  snapshots: 'SNAPSHOTS:READ',
  messages: 'MESSAGES:REPRESENT',
};

export const toAuthPage = (params: AuthParams) => {
  let { client_id, scope: _scope, state = '', return_to = '', useCDN } = params || {};
  if (!client_id) throw new Error('client_id is required');
  if (!_scope) _scope = { profile: true };
  let url = useCDN ? 'https://mixin-www.zeromesh.net/oauth/authorize' : 'https://mixin.one/oauth/authorize';
  let scope = '';
  for (const key in _scope) {
    if (_scope[key]) scope += `${AUTH[key]}+`;
  }
  scope = scope.slice(0, -1);
  location.href = url + queryStringify({ client_id, scope, state, return_to });
};

export const openUserModal = (user_id: string) => mixinSchema(`users/${user_id}`);

export const openConversation = (conversation_id: string, user?: string) => mixinSchema(`conversations/${conversation_id}`, user ? { user } : '');

export const openAppHomePage = (app_id: string, params: object, action = 'open') => mixinSchema(`apps/${app_id}`, { action, ...params });

export const openCodeModal = (code_id: string) => mixinSchema(`codes/${code_id}`);
