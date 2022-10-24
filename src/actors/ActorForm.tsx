import { Form, Formik, FormikHelpers } from 'formik';
import { Link } from 'react-router-dom';
import TextField from '../forms/TextField';
import { actorCreationDTO } from './actors.model';
import * as Yup from 'yup';
import DateField from '../forms/DateField';
import ImageField from '../forms/ImageField';

const ActorForm = (props: actorFormProps) => {
  return (
    <Formik
      initialValues={props.model}
      onSubmit={props.onSubmit}
      validationSchema={Yup.object({
        name: Yup.string()
          .required('This field is required')
          .firstLetterUpprecase(),
        dateOfBirth: Yup.date().nullable().required('This field is required'),
      })}
    >
      {(formikProps) => (
        <Form>
          <TextField displayName="Name" field="name" />
          <DateField field="dateOfBirth" displayName="Date of Birth" />
          <ImageField displayName="Select actor photo" />

          <button
            className="btn btn-outline-primary me-3"
            disabled={formikProps.isSubmitting}
            type="submit"
          >
            Save changes
          </button>
          <Link to={'/actors'} className="btn btn-outline-secondary">
            Cancel
          </Link>
        </Form>
      )}
    </Formik>
  );
};
interface actorFormProps {
  model: actorCreationDTO;
  onSubmit(
    values: actorCreationDTO,
    action: FormikHelpers<actorCreationDTO>
  ): void;
}
export default ActorForm;
