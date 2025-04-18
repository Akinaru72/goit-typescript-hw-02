import { useEffect, useState } from "react";
import css from "./LoaderSecond.module.css";

const LoaderSecond: React.FC = () => {
  const [sentence, setSentence] = useState<string>("..................🏃..🐕‍🦺");

  useEffect(() => {
    const interval = setInterval(() => {
      setSentence((prev) => prev.slice(1) + prev[0]);
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return <div className={css.loaderText}>{sentence}</div>;
};

export default LoaderSecond;
