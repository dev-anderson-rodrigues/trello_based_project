import React, { createContext, useEffect, useState } from "react";
import { IAuthContext, IUser, createUserType, loginType } from "./types";
import {
  login as apiLogin,
  create as apiCreateUser,
  SignOut as apiSignOut,
  getTokenLocalStorage,
} from "./util";

export const AuthContext = createContext<IAuthContext | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [user, setUser] = useState<IUser | null>(null);

  useEffect(() => {
    const storedTokenUser = getTokenLocalStorage();
    if (storedTokenUser) {
      setUser(storedTokenUser);
      setIsAuthenticated(() => true);
    }
  }, []);

  const login = async (payload: loginType) => {
    const data = await apiLogin(payload);
    setUser(data.data);
    setIsAuthenticated(() => true);
    return data;
  };
  const createUser = async (payload: createUserType) => {
    const data = await apiCreateUser(payload);
    return data;
  };
  const logout = async () => {
    await apiSignOut();
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
