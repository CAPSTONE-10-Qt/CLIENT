import LoadingContainer from "@containers/loading";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Redirecting to iterview",
};

export default function Callback() {
  return <LoadingContainer />;
}
