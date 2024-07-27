// import { Api } from "../../services/api";
// import axiosInstance from "axios";
import axiosInstance, { API_URL } from "../../services/api";

export const login = async (email: string, password: string) => {
  const response = await axiosInstance.post(`${API_URL}api/user/login`, {
    email,
    password,
  });
  return response.data;
};

export const create = async (name: string, email: string, password: string) => {
  const response = await axiosInstance.post(`${API_URL}api/user`, {
    name,
    email,
    password,
  });
  return response.data;
};
