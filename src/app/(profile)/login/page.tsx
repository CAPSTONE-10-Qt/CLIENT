import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "로그인 : iterview",
};

import LoginContainer from "@containers/login";

export default function Login() {
  return <LoginContainer />;
}
