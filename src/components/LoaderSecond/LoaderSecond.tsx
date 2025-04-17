import { useEffect, useState } from "react";

const LoaderSecond = () => {
  const [sentence, setSentence] = useState("Please wait ...Loading...🎉....");

  useEffect(() => {
    const interval = setInterval(() => {
      setSentence((prev) => prev.slice(1) + prev[0]);
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return <div>{sentence}</div>;
};

export default LoaderSecond;
