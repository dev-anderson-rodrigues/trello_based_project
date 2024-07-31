import axios from "axios";
import { useNavigate } from "react-router-dom";

export const API_URL = "https://arnia-kanban.vercel.app/";

export const Api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
    "x-api-key": "52a8b954-e25d-4cc5-86e5-c32e92f994bb",
  },
  timeout: 10000,
});

Api.interceptors.request.use(
  (config) => {
    // Adicione o token de autenticação ao cabeçalho da solicitação
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

Api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    const navigate = useNavigate();

    if (error.response.status === 401) {
      try {
        // Tente renovar o token
        const response = await Api.post("api/user/login", {
          refreshToken: localStorage.getItem("token"),
        });

        // Atualize o token e refaça a solicitação original
        const newToken = response.data.token;
        localStorage.setItem("token", newToken);
        originalRequest.headers.Authorization = `Bearer ${newToken}`;

        return axios(originalRequest);
      } catch (refreshError) {
        // Se a renovação falhar, redirecione para a página de login
        navigate("/");
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);
