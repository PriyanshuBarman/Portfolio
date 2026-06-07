import { useSyncExternalStore } from "react";

const breakPoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
};

type Breakpoint = keyof typeof breakPoints | number;

export function useIsMobile(breakpoint: Breakpoint = "md"): boolean {
  const width =
    typeof breakpoint === "number" ? breakpoint : breakPoints[breakpoint];

  const query = `(max-width: ${width - 1}px)`;

  const subscribe = (callback: () => void) => {
    const media = window.matchMedia(query);
    media.addEventListener("change", callback);
    return () => {
      media.removeEventListener("change", callback);
    };
  };

  const getSnapshot = () => {
    return window.matchMedia(query).matches;
  };

  const getServerSnapshot = () => {
    return false;
  };

  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
