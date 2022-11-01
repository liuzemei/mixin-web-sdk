import { gzip, ungzip } from 'pako';
import { v4 as uuid } from 'uuid';
import { Scope, AuthData } from '../types';
import { environment } from './browser';
import { openCodeModal } from './user';
import { scopeObjToString } from './utils';

export const MixinLogin = (client_id: string, _scope?: Scope): Promise<AuthData> =>
  new Promise((resolve, reject) => {
    const ws = new WebSocket('wss://mixin-blaze.zeromesh.net', 'Mixin-OAuth-1');
    let scope = scopeObjToString(_scope);
    scope = scope.replace(/\+/g, ' ');

    const sendRefreshCode = (authorization_id = '') => {
      ws.send(
        gzip(
          JSON.stringify({
            id: uuid().toUpperCase(),
            action: 'REFRESH_OAUTH_CODE',
            params: { client_id, scope, authorization_id, code_challenge: '' },
          })
        )
      );
    };

    let handled = false;
    ws.addEventListener('message', (event: MessageEvent) => {
      const fileReader = new FileReader();
      fileReader.onload = function () {
        const msg = ungzip(new Uint8Array(this.result as ArrayBuffer), { to: 'string' });
        const authorization: { data: AuthData } = JSON.parse(msg);
        if (!authorization.data) return reject(authorization);
        const { authorization_code, code_id, authorization_id, scopes } = authorization.data;
        if (authorization_code) return resolve(authorization.data);
        if (scopes.length === 0) return resolve(authorization.data);
        if (!handled) {
          openCodeModal(code_id);
          handled = true;
          if (environment() === '') {
            console.error('非 Mixin 环境，请安装并运行 PC 版 Mixin，刷新页面后，点击在 Mixin 中打开链接，然后在 PC版 Mixin 中扫码登陆。');
          }
        }
        setTimeout(() => sendRefreshCode(authorization_id), 1000);
      };
      fileReader.readAsArrayBuffer(event.data);
    });

    ws.addEventListener('open', () => sendRefreshCode());
  });

export const MixinLoginWithoutAuth = () => {};
