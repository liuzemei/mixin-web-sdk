import { App, User } from './user';

export interface AuthData {
  code_id: string;
  authorization_code: string;
  authorization_id: string;
  scopes: string[];
  user: User;
  app: App;
}
