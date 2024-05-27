import { backendClient } from ".";

type PostLoginBodyType = {
  id: number;
  name: string;
  avatar_url: string;
};
export const postLogin = async (body: PostLoginBodyType) => {
  const url = `/accounts`;
  return backendClient.post(url, body);
};

export const getProfile = async () => {
  const url = `/accounts/myPage`;
  return backendClient.get(url);
};
