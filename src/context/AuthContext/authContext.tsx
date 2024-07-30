import React, { createContext, useEffect, useState } from "react";
import { IAuthContext, IUser, createUserType, loginType } from "./types";
import {
  login as apiLogin,
  create as apiCreateUser,
  getDadosProfileLocalStorage,
  setDadosProfileLocalStorage,
  getTokenLocalStorage,
  isTokenExpired,
} from "./util";

export const AuthContext = createContext<IAuthContext | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [user, setUser] = useState<IUser | null>(null);

  useEffect(() => {
    const token = getTokenLocalStorage();
    const user = getDadosProfileLocalStorage();
    if (token) {
      setUser(user);
      setIsAuthenticated(true);
    }
    console.log(user);
    if (isTokenExpired(token)) {
      apiLogin({ email: user?.email, password: user?.password });
    }
  }, []);

  const login = async (payload: loginType) => {
    const { name } = await apiLogin(payload);

    setUser({ ...payload, name });
    setDadosProfileLocalStorage({ ...payload, name });
    console.log({ ...payload });
    setIsAuthenticated(true);

    return name;
  };

  const createUser = async (payload: createUserType) => {
    const data = await apiCreateUser(payload);
    await apiLogin({
      email: payload.email,
      password: payload.password,
    });
    setDadosProfileLocalStorage({ ...payload });
    setIsAuthenticated(() => true);
    return data;
  };

  const logout = async () => {
    localStorage.removeItem("token");
    setUser(null);
    setIsAuthenticated(() => false);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        isAuthenticated,
        setIsAuthenticated,
        createUser,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
