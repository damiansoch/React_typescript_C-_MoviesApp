import { Field, ErrorMessage } from 'formik';

const TextField = (props: textFieldProps) => {
  return (
    <div className="mb-3">
      <label htmlFor={props.field}>{props.displayName}</label>
      <Field
        type="text"
        name={props.field}
        className="form-control"
        id={props.field}
      />
      <ErrorMessage name={props.field}>
        {(msg) => <div className="text-danger">{msg}</div>}
      </ErrorMessage>
    </div>
  );
};
interface textFieldProps {
  field: string;
  displayName: string;
}
export default TextField;
