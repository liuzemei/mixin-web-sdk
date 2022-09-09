import * as asset from './lib/asset';
import * as browser from './lib/browser';
import { mixinRequest, mixinSchema } from './lib/http';
import * as message from './lib/message';
import * as network from './lib/network';
import * as user from './lib/user';
import * as userWithToken from './lib/userWithToken';
export const Mixin = {
  mixinRequest,
  mixinSchema,
  ...browser,
  ...message,
  ...asset,
  ...network,
  ...user,
  ...userWithToken,
};
export default Mixin;
