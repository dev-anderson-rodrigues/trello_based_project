import React, { createContext, useEffect, useState } from "react";
import { IAuthContext, IUser } from "./types";
import { login as apiLogin, create } from "./util";

export const AuthContext = createContext<IAuthContext | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [user, setUser] = useState<IUser | null>(null);
  // const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("token");
    if (storedUser) {
      setIsAuthenticated(() => true);
    }
  }, []);
  const login = async (email: string, password: string) => {
    const data = await apiLogin(email, password);
    localStorage.setItem("token", data);
    setUser(data);
    setIsAuthenticated(true);
  };
  const createUser = async (name: string, email: string, password: string) => {
    const response = await create(name, email, password);
    const token = response.data;
    localStorage.setItem("token", token);
    setUser(token);
    setIsAuthenticated(true);
  };
  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, createUser, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
