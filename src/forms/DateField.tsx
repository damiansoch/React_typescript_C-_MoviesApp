import { useFormikContext } from 'formik';
import React from 'react';

const DateField = (props: dateFieldProps) => {
  const { values, validateForm, touched, errors } = useFormikContext<any>();
  return (
    <div className="mb-3">
      <label htmlFor={props.field}>{props.displayName}</label>
      <input
        type="date"
        className="form-control"
        id={props.field}
        name={props.field}
        //we need to access the current values - using the formik context
        // we are getting the access to initial values form actorForm
        defaultValue={values[props.field]?.toLocaleDateString('en-US')}
        onChange={(e) => {
          const date = new Date(e.currentTarget.value + 'T00:00:00');
          //now we will change the values replacing the default values

          values[props.field] = date;
          validateForm();
        }}
      />
      {touched[props.field] && errors[props.field] ? (
        <div className="text-danger">
          {errors[props.field]?.toLocaleString()}
        </div>
      ) : null}
    </div>
  );
};
interface dateFieldProps {
  field: string;
  displayName: string;
}
export default DateField;
