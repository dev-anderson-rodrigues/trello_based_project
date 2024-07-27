export interface IUser {
  token: string;
  name: string;
}

export interface IAuthContext {
  user: IUser | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  createUser: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
}
export type User = {
  name?: string;
  email: string;
  password: string;
  confirmPassword?: string;
};
