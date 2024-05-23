import axios from "axios";

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
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_LOCAL_TOKEN}`,
  },
});
