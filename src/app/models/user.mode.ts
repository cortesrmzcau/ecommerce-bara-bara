export interface User {
  id: string;
  email: string;
  password: string;
  name: string;
  role: 'client | admin';
}

export interface CreateUserDTO extends Omit<User, 'id'> {}
