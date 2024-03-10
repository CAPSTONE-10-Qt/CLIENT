"use client";

import { useState, useEffect } from "react";

const useDetectScroll = () => {
  const [position, setPosition] = useState(0);
  const [visible, setVisible] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    if (position === 0) setVisible(undefined);
    const handleScroll = () => {
      const moving = window.pageYOffset;
      setVisible(position > moving);
      setPosition(moving);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [position]);

  useEffect(() => {
    setPosition(0);
    setVisible(undefined);
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  return { visible, position };
};

export default useDetectScroll;
