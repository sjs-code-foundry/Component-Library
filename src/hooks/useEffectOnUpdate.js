import { useRef, useEffect } from "react";

export default function useEffectOnUpdate(effectFunc, runOnStart, depsArr) {
  const refValue = runOnStart ? false : true;

  const firstRender = useRef(refValue);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
    } else {
      effectFunc();
    }
  }, depsArr);
}
