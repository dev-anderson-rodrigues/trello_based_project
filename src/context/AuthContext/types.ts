export interface User {
  name?: string;
  email: string;
  password: string;
  confirmPassword?: string;
}

export interface IUser {
  email?: string;
  token?: string;
}

export interface IContext extends IUser {
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  registrationUser: (
    name: string,
    email: string,
    password: string,
    confirmPassword: string
  ) => Promise<void>;
  logout: () => void;
  user: IUser | null;
}

export interface IAuthProvider {
  children?: JSX.Element;
}
