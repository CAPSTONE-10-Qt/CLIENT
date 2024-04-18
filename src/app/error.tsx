"use client";

import { useEffect } from "react";
import ErrorContainer from "@containers/error";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);
  return <ErrorContainer />;
}
