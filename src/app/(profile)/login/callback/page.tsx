import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Redirecting to iterview",
};

import LoadingContainer from "@containers/loading";
import LocalStorage from "@containers/login/LocalStorage";
import { getLogin } from "@service/api/auth";

export default async function Callback({
  searchParams,
}: {
  searchParams: { code: string };
}) {
  const data = await getLogin(searchParams.code);
  return (
    <>
      <LoadingContainer />
      <LocalStorage data={data.data} />
    </>
  );
}
