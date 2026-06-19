import { useRef, useEffect } from "react";

export default function useEffectOnUpdate(effectFunc, depsArr) {
  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
    } else {
      effectFunc();
    }
  }, depsArr);
}
