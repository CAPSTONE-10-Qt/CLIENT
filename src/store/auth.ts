import { atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist";

const localStorage =
  typeof window !== "undefined" ? window.localStorage : undefined;

const { persistAtom } = recoilPersist({
  key: "recoilPersistLocal",
  storage: sessionStorage,
});

export const isLoginState = atom<boolean>({
  key: "isLoginState",
  default: false,
  effects_UNSTABLE: [persistAtom],
});

export const profileInfoState = atom<{
  name: string;
  image: string;
}>({
  key: "profileInfoState",
  default: { name: "잇터뷰", image: "" },
  effects_UNSTABLE: [persistAtom],
});
