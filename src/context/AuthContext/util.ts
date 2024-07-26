import { Api } from "../../services/api";
import { IUser } from "./types";

export const getUserLocalStorage = () => {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
};

export const setUserLocalStorage = (user: IUser | null) => {
  if (!user) {
    localStorage.removeItem("user");
  } else {
    localStorage.setItem("user", JSON.stringify(user));
  }
};

export async function LoginRequest(email: string, password: string) {
  try {
    if (!email || !password) {
      console.error("Email or password is missing");
      return;
    }

    const request = await Api.post("login", {
      email,
      password,
    });

    console.log(request.data);
    return request.data;
  } catch (err) {
    return {
      success: false,
      message: "An error occurred while attempting to login.",
    };
  }
}
export async function RegisterRequest(
  name: string,
  email: string,
  password: string
) {
  try {
    if (!name || !email || !password) {
      console.error("Name, email or password is missing");
      return;
    }
    const request = await Api.post("register", {
      name,
      email,
      password,
    });
    console.log(request.data);
    return request.data;
  } catch (err) {
    return {
      success: false,
      message: "An error occurred while attempting to register.",
    };
  }
}
