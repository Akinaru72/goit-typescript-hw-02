import { Formik, Form, Field, FormikHelpers } from "formik";
import toast from "react-hot-toast";
import css from "./SearchBar.module.css";

interface FormValues {
  query: string;
}
interface SearchBarProps {
  onSubmit: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{ query: "" }}
      validate={(values) => {
        const errors: { query?: string } = {};
        if (!values.query.trim()) {
          errors.query = "Please enter a search term";
        }
        return errors;
      }}
      onSubmit={(values: FormValues, actions: FormikHelpers<FormValues>) => {
        const searchQuery = values.query.trim();
        console.log("Search Query:", searchQuery);

        if (searchQuery.length === 0) {
          toast.error("Please enter the value in the search field");
          return;
        }

        onSubmit(searchQuery);
        actions.resetForm();
      }}
    >
      {({ errors, touched }) => (
        <Form className={css.form}>
          <Field
            className={css.field}
            name="query"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <button className={css.btn} type="submit">
            Search
          </button>

          {errors.query && touched.query && (
            <div className={css.error}>{errors.query}</div>
          )}
        </Form>
      )}
    </Formik>
  );
};

export default SearchBar;
