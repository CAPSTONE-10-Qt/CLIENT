import { backendClient } from ".";

export const postSignup = async () => {
  const url = `/accounts/signup`;
  return backendClient.post(url);
};

export const postLogin = async () => {
  const url = `/accounts/login`;
  return backendClient.post(url);
};

export const getProfile = async () => {
  const url = `/accounts`;
  return backendClient.get(url);
};
