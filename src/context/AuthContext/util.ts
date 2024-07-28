import axios from "axios";
import { Api } from "../../services/api";
import { IUser, createUserType, loginType } from "./types";

export function setUserLocalStorage(token: IUser | null) {
  localStorage.setItem("token", JSON.stringify(token));
}
export function setDadosProfileLocalStorage(profile: IUser | null) {
  localStorage.setItem("token", JSON.stringify(profile));
}

export function getTokenLocalStorage() {
  const tokenJson = localStorage.getItem("token");
  return tokenJson ? JSON.parse(tokenJson) : null;
}
export function getUseLocalStorage() {
  const userJson = localStorage.getItem("token");
  return userJson ? JSON.parse(userJson) : null;
}

export const login = async (data: loginType) => {
  try {
    const response = await Api.post("login", data);
    const PayloadToken = {
      token: response.data.token,
      name: response.data.name,
    };
    if (PayloadToken.token) setUserLocalStorage(PayloadToken);

    return response;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 400 || error.response?.status === 401) {
        // Tratamento para credenciais inválidas
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
    const getEmail = await Api.get(`users?email=${data.email}`);
    if (getEmail.data.data.length > 0) {
      throw new Error("O email já está em uso.");
    }
    const response = await Api.post("users", data);
    console.log(response);
    if (response.status === 201) setUserLocalStorage(response.data);

    return response;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 400) {
        // Tratamento para erros de validação
        console.error("Erros de validação:", error.response.data.errors);
        throw new Error(
          "Verifique se todos os campos estão preenchidos corretamente."
        );
      }
      console.error(
        "Erro ao tentar cadastrar o usuário:",
        error.response?.data || error.message
      );
    } else {
      console.error("Erro inesperado:", error);
    }
    throw error;
  }
};

export const SignOut = async () => {
  await Api.post("logout");
  localStorage.removeItem("token");
};
