import { BiSolidError } from "react-icons/bi";
import css from "./ErrorMessage.module.css";

const ErrorMessage: React.FC = (): JSX.Element => {
  return (
    <div className={css.container}>
      <BiSolidError className={css.errorIcon} />
      <p className={css.text}>Something went wrong, please reload your page!</p>
    </div>
  );
};

export default ErrorMessage;
