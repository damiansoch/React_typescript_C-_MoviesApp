import React from 'react';
import { Link } from 'react-router-dom';

const CreateTheather = () => {
  return (
    <>
      <h3>Create Theater</h3>
      <Link className="btn btn-outline-primary" to={'/theaters/edit'}>
        Edit theater
      </Link>
    </>
  );
};

export default CreateTheather;
