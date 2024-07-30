import axios from "axios";
import { Api } from "../../services/api";
import { IUser, createUserType, loginType } from "./types";

export function setDadosProfileLocalStorage(profile: IUser | null) {
  localStorage.setItem("profile", JSON.stringify(profile));
}
export function getDadosProfileLocalStorage() {
  const profileJson = localStorage.getItem("profile");
  return profileJson ? JSON.parse(profileJson) : null;
}
export function setTokenLocalStorage(token: IUser | null | undefined) {
  localStorage.setItem("token", JSON.stringify(token));
}

export function getTokenLocalStorage() {
  const tokenJson = localStorage.getItem("token");
  if (!tokenJson) {
    localStorage.removeItem("token");
  }
  return tokenJson ? JSON.parse(tokenJson) : null;
}

export function isTokenExpired(token: string): boolean {
  try {
    // Decodifica o payload do token
    const payload = JSON.parse(atob(token.split(".")[1]));

    // Verifica se o campo `exp` existe no payload
    if (!payload.exp) {
      throw new Error("Token does not have an 'exp' field");
    }

    const exp = payload.exp * 1000; // Convertendo para milissegundos
    return Date.now() > exp;
  } catch (error) {
    console.error("Failed to decode or verify token:", error);
    return true; // Assume que o token está expirado em caso de erro
  }
}

export const login = async (data: loginType) => {
  try {
    const response = await Api.post("api/user/login", data);

    const { token } = response.data;

    setTokenLocalStorage(token);

    return { token: token, name: response.data.name };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 400 || error.response?.status === 401) {
        console.error("Credenciais inválidas:", error.response.data);
        throw new Error(
          "Email ou senha inválidos. Tente novamente ou crie uma nova conta."
        );
      }
      console.error("Erro de login:", error.response?.data || error.message);
    } else {
      console.error("Erro inesperado:", error);
    }
    throw error;
  }
};

export const create = async (data: createUserType) => {
  try {
    const createUserResponse = await Api.post("api/user", data);

    return createUserResponse;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(
        "Erro ao criar usuário:",
        error.response?.data || error.message
      );
    } else {
      console.error("Erro inesperado:", error);
    }
    throw error;
  }
};
