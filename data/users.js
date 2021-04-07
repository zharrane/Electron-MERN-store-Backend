import bcrypt from 'bcryptjs';
const users = [
  {
    name: 'Gharbi said',
    username: 'Kratos',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Gharbi said',
    username: 'Counter',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;
