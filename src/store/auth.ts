import { atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist";

const localStorage =
  typeof window !== "undefined" ? window.localStorage : undefined;

const { persistAtom } = recoilPersist({
  key: "recoilPersist",
  storage: localStorage,
});

export const isLoginState = atom<boolean>({
  key: "isLoginState",
  default: !localStorage?.getItem("accessToken"),
});

export const profileInfoState = atom<{
  username: string;
  profileImage: string;
}>({
  key: "profileInfoState",
  default: { username: "잇터뷰", profileImage: "" },
  effects_UNSTABLE: [persistAtom],
});
