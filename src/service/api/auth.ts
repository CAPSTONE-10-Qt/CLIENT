import { backendClient } from ".";

export const getLogin = async (code: string) => {
  const url = `/accounts/github/callback?code=${code}`;
  return backendClient.get(url);
};

export const getProfile = async () => {
  const url = `/accounts/myPage`;
  return backendClient.get(url);
};
