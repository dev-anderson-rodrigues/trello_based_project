/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosResponse } from "axios";
import { Dispatch, SetStateAction } from "react";

export interface IUser {
  token?: string;
  avatar?: string;
  email?: string;
  password?: string;
  name?: string;
  first_name?: string;
  last_name?: string;
  id?: number;
}

export interface IAuthContext {
  user: IUser | null;
  isAuthenticated: boolean;
  setIsAuthenticated: Dispatch<SetStateAction<boolean>>;
  setUser: Dispatch<SetStateAction<IUser | null>>;
  login: (payload: loginType) => Promise<AxiosResponse<any, any>>;
  createUser: (payload: createUserType) => Promise<AxiosResponse<any, any>>;
  logout: () => void;
}
export type loginType = {
  email?: string;
  password?: string;
};
export type createUserType = {
  name?: string;
  email: string;
  password: string;
  confirmPassword?: string;
};
