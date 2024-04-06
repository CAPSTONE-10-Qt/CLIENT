import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "페이지 없음 : iterview",
};

import NotFoundContainer from "@containers/notfound";

function NotFoundPage() {
  return <NotFoundContainer />;
}

export default NotFoundPage;
