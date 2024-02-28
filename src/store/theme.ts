import { atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist";

const localStorage =
  typeof window !== "undefined" ? window.localStorage : undefined;

const { persistAtom } = recoilPersist({
  key: "recoilPersist",
  storage: localStorage,
});

export const themeState = atom<string>({
  key: "themeState",
  default: "pink",
  effects_UNSTABLE: [persistAtom],
});
