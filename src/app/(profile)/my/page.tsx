import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "마이페이지 : iterview",
};

import MyContainer from "@containers/my";

export default function My() {
  return <MyContainer />;
}
