export interface IUser {
  id?: number;
  username: string;
  password: string;
  email: string;
}

export interface ILogin {
  username: string;
  password: string;
}

export interface IUserLogin {
  username: string;
}
