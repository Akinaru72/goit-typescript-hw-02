import { ClipLoader } from "react-spinners";
import css from "./Loader.module.css";
import LoaderSecond from "../LoaderSecond/LoaderSecond";

const Loader = () => {
  // console.log("loader.........");
  return (
    <div className={css.container}>
      <ClipLoader className={css.loader} color="#36d7b7" />
      <LoaderSecond />
    </div>
  );
};

export default Loader;
