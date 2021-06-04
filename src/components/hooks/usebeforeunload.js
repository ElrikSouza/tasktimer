import { useEffect } from "react";

export const useBeforeUnload = (listener) => {
  useEffect(() => {
    window.addEventListener("beforeunload", listener);
    return () => window.removeEventListener("beforeunload", listener);
  });
};
