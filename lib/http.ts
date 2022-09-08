import { queryStringify } from './utils';

const hostURL = ['https://mixin-api.zeromesh.net', 'https://api.mixin.one'];
export const request = (token?: string): ((url: string, params?: Object, method?: string, data?: Object) => Promise<any>) => {
  return async (url: string, params: any = {}, method = 'get', data: any = {}) => {
    const p = queryStringify(params);
    const init: any = {
      method,
      headers: new Headers({
        'Content-Type': 'application/json',
        Authorization: token ? `Bearer ${token}` : '',
      }),
    };
    if (method.toUpperCase() === 'POST') init.body = JSON.stringify(data);
    const resp = await fetch(hostURL[0] + url + p, init);
    const res = await resp.json();
    return res.data || res.error;
  };
};
export const mixinRequest = request();

export const mixinSchema = (url: string, params: Object | string = '') => {
  if (typeof params === 'object') params = queryStringify(params);
  window.open(`mixin://${url}${params}`);
};
