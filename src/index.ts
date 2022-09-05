import { User } from './models/User';
import { UserEdit } from './views/UserEdit';
import { UserForm } from './views/UserForm';
import { UserShow } from './views/UserShow';

const user = User.buildUser({ name: 'NAME', age: 20 });

const root = document.getElementById('root');

if (root) {
  const userEdit = new UserEdit(root, user);
  userEdit.render();

  const userShow = new UserShow(root.querySelector('.user-show')!, user);
  userShow.render();

  const userForm = new UserForm(root.querySelector('.user-form')!, user);
  userForm.render();
} else {
  throw new Error('Root element not found');
}
