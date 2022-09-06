import { User } from './models/User';
import { UserList } from './views/UserList';

const users = User.buildUserCollection();

const root = document.getElementById('root');
if (root) {
  new UserList(root, users);
}

users.fetch();
