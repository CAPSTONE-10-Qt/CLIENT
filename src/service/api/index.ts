import axios from "axios";
import { getSession } from "next-auth/react";

export const sttClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_STT_SERVER_URL || "/",
  withCredentials: true,
});

export const ferttsClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_FERTTS_SERVER_URL || "/",
  withCredentials: true,
});

export const backendClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_SERVER_URL || "/",
  withCredentials: true,
});

export const setToken = (accessToken: string) => {
  backendClient.interceptors.request.use(
    async config => {
      config.headers.common = {
        Authorization: `Bearer ${accessToken}`,
      };
      // if (typeof window !== "undefined") window.location.href = "/login";
      return config;
    },
    (error: any) => {
      console.log(error);
      return Promise.reject(error);
    },
  );
};
