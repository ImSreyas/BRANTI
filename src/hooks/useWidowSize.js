import { useState, useEffect } from "react";

const useWindowSize = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    const windowSizeListener = (e) => {
      setWidth(e.target.innerWidth);
      setHeight(e.target.innerHeight)
    };
    window.addEventListener("resize", windowSizeListener);

    return () => {
      window.removeEventListener("resize", windowSizeListener);
    };
  }, []);
  return { width, height };
};

export default useWindowSize;
