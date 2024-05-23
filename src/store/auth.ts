import { atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist";

const localStorage =
  typeof window !== "undefined" ? window.localStorage : undefined;

const { persistAtom } = recoilPersist({
  key: "recoilPersistLocal",
  storage: localStorage,
});

export const isLoginState = atom<boolean>({
  key: "isLoginState",
  default: !!localStorage!.getItem("accessToken") || false,
});

export const profileInfoState = atom<{
  username: string;
  profileImage: string;
}>({
  key: "profileInfoState",
  default: { username: "잇터뷰", profileImage: "" },
  effects_UNSTABLE: [persistAtom],
});
