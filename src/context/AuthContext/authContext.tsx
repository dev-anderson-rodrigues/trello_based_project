import { createContext, useState, useEffect } from "react";
import { IAuthProvider, IContext, IUser } from "./types";
import {
  LoginRequest,
  RegisterRequest,
  getUserLocalStorage,
  setUserLocalStorage,
} from "./util";

export const AuthContext = createContext<IContext>({} as IContext);

export const AuthProvider = ({ children }: IAuthProvider) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [user, setUser] = useState<IUser | null>(null);

  useEffect(() => {
    console.log("Checking localStorage for user...");
    const storedUser = getUserLocalStorage();

    if (storedUser) {
      setUser(storedUser);
      setIsAuthenticated(true);
    }
  }, []);

  async function login(email: string, password: string) {
    try {
      const response = await LoginRequest(email, password);
      const payload = { token: response.token, email };

      setUser(payload);
      setUserLocalStorage(payload);
      setIsAuthenticated(true);
    } catch (error) {
      console.error("Login failed:", error);
      throw error;
    }
  }
  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem("user");
  };
  async function registrationUser(
    name: string,
    email: string,
    password: string,
    confirmPassword: string
  ) {
    try {
      if (!name || !email || !password || !confirmPassword) {
        console.error("All fields are required");
        return;
      }
      if (password !== confirmPassword) {
        console.error("Passwords do not match");
        return;
      }
      await RegisterRequest(name, email, password);
      console.log("User registered successfully");
    } catch (error) {
      console.error("Registration failed:", error);
      throw error;
    }
  }
  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        login,
        registrationUser,
        user,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
