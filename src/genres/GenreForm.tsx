import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { Formik, Form, FormikHelpers } from 'formik';
import TextField from '../forms/TextField';
import { genreCreationDTO } from './genres.model';

const GenreForm = (props: genreFormProps) => {
  return (
    <Formik
      initialValues={props.model}
      onSubmit={props.onSubmit}
      validationSchema={Yup.object({
        name: Yup.string()
          .required('This field is required')
          .firstLetterUpprecase(),
      })}
    >
      {(formikProps) => (
        <Form>
          <TextField field="name" displayName="Name" />
          <button
            disabled={formikProps.isSubmitting}
            type="submit"
            className="btn btn-outline-primary me-3"
          >
            Save changes
          </button>
          <Link to="/genres" className="btn btn-outline-secondary me-3 ">
            Cancel
          </Link>
        </Form>
      )}
    </Formik>
  );
};
interface genreFormProps {
  model: genreCreationDTO;
  onSubmit(
    values: genreCreationDTO,
    action: FormikHelpers<genreCreationDTO>
  ): void;
}
export default GenreForm;
