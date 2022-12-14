import { Scope } from '../types';

function utf16to8(str: string) {
  var out, i, len, c;

  out = '';
  len = str.length;
  for (i = 0; i < len; i++) {
    c = str.charCodeAt(i);
    if (c >= 0x0001 && c <= 0x007f) {
      out += str.charAt(i);
    } else if (c > 0x07ff) {
      out += String.fromCharCode(0xe0 | ((c >> 12) & 0x0f));
      out += String.fromCharCode(0x80 | ((c >> 6) & 0x3f));
      out += String.fromCharCode(0x80 | ((c >> 0) & 0x3f));
    } else {
      out += String.fromCharCode(0xc0 | ((c >> 6) & 0x1f));
      out += String.fromCharCode(0x80 | ((c >> 0) & 0x3f));
    }
  }
  return out;
}

var base64EncodeChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
export const base64encode = (str: string): string => {
  str = utf16to8(str);
  var out, i, len;
  var c1, c2, c3;

  len = str.length;
  i = 0;
  out = '';
  while (i < len) {
    c1 = str.charCodeAt(i++) & 0xff;
    if (i == len) {
      out += base64EncodeChars.charAt(c1 >> 2);
      out += base64EncodeChars.charAt((c1 & 0x3) << 4);
      out += '==';
      break;
    }
    c2 = str.charCodeAt(i++);
    if (i == len) {
      out += base64EncodeChars.charAt(c1 >> 2);
      out += base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xf0) >> 4));
      out += base64EncodeChars.charAt((c2 & 0xf) << 2);
      out += '=';
      break;
    }
    c3 = str.charCodeAt(i++);
    out += base64EncodeChars.charAt(c1 >> 2);
    out += base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xf0) >> 4));
    out += base64EncodeChars.charAt(((c2 & 0xf) << 2) | ((c3 & 0xc0) >> 6));
    out += base64EncodeChars.charAt(c3 & 0x3f);
  }
  return out;
};

export const queryStringify = (obj: any) =>
  '?' +
  Object.keys(obj)
    .map(key => `${key}=${obj[key]}`)
    .join('&');

const AUTH = {
  phone: 'PHONE:READ',
  profile: 'PROFILE:READ',
  contacts: 'CONTACTS:READ',
  assets: 'ASSETS:READ',
  snapshots: 'SNAPSHOTS:READ',
  messages: 'MESSAGES:REPRESENT',
  collectibles: 'COLLECTIBLES:READ',
};

export const scopeObjToString = (_scope?: Scope) => {
  if (!_scope) _scope = { profile: true };
  let scope = '';
  for (const key in _scope) {
    if (_scope[key]) scope += `${AUTH[key]}+`;
  }
  scope = scope.slice(0, -1);
  return scope;
};
