import { useEffect, useState } from "react";

export const usePageWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const handleWindowResize = () => setWidth(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  });

  return { width };
};
