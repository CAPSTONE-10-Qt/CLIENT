import axios from "axios";

export const modelClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_MODEL_SERVER_URL || "/",
  withCredentials: true,
});

export const backendClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_SERVER_URL || "/",
  withCredentials: true,
});
