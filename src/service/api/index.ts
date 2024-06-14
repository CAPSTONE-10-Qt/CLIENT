import axios from "axios";
import { getSession } from "next-auth/react";

export const modelClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_ML_SERVER_URL || "/",
  withCredentials: true,
});

export const backendClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_SERVER_URL || "/",
  withCredentials: true,
});

backendClient.interceptors.request.use(
  async config => {
    const session = await getSession();
    if (session)
      config.headers["Authorization"] = `Bearer ${session.user.accessToken}`;
    return config;
  },
  (error: any) => {
    console.log(error);
    return Promise.reject(error);
  },
);
