import { User } from './models/User';
import { UserEdit } from './views/UserEdit';

const userEdit = new UserEdit(
  document.getElementById('root'),
  User.create({ name: 'NAME', age: 30 })
);

userEdit.render();

console.log(userEdit);
