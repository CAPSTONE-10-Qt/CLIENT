import { atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

const localStorage =
  typeof window !== "undefined" ? window.localStorage : undefined;

export const isLoginState = atom<boolean>({
  key: "isLoginState",
  default: !!localStorage?.getItem("accessToken"),
});
