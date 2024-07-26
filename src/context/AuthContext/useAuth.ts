import { useContext } from "react";
import { AuthContext } from "./authContext";
import { IContext } from "./types";

export const useAuth = (): IContext => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
