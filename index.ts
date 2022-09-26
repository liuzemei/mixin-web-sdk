import * as asset from './lib/asset';
import * as browser from './lib/browser';
import * as request from './lib/http';
import * as message from './lib/message';
import * as network from './lib/network';
import * as user from './lib/user';
import * as userWithToken from './lib/userWithToken';
import * as types from './types';
export const Mixin = {
  ...request,
  ...browser,
  ...message,
  ...asset,
  ...network,
  ...user,
  ...userWithToken,
  ...types,
};
export default Mixin;
