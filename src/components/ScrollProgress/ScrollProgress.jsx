import { useEffect, useState } from "react";
import "./ScrollProgress.css";

export default function ScrollProgress() {

  const [scroll, setScroll] =
    useState(0);

  useEffect(() => {

    const updateScroll = () => {

      const total =
        document.documentElement.scrollHeight -
        window.innerHeight;

      const progress =
        (window.scrollY / total) * 100;

      setScroll(progress);

    };

    window.addEventListener(
      "scroll",
      updateScroll
    );

    return () =>
      window.removeEventListener(
        "scroll",
        updateScroll
      );

  }, []);

  return (
    <div
      className="progress-bar"
      style={{
        width: `${scroll}%`
      }}
    />
  );
}