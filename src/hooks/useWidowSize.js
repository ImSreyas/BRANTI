import { useState, useEffect } from "react";

const useWindowSize = () => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const windowSizeListener = (e) => {
      setWidth(e.target.innerWidth);
    };
    window.addEventListener("resize", windowSizeListener);

    return () => {
      window.removeEventListener("resize", windowSizeListener);
    };
  }, []);
  return { width };
};

export default useWindowSize;
