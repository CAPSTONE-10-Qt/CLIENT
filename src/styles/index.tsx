"use client";
import React, { useState, useEffect } from "react";
import { ThemeProvider } from "next-themes";

interface ThemeProvierProps {
  children: React.ReactNode;
}

export default function ThemeProvier({ children }: ThemeProvierProps) {
  const [isMount, setMount] = useState(false);
  useEffect(() => {
    setMount(true);
  }, []);
  if (!isMount) {
    return null;
  }
  return (
    <ThemeProvider themes={["pink", "blue", "green", "beige"]}>
      {children}
    </ThemeProvider>
  );
}
