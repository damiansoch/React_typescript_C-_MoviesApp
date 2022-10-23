import React from 'react';
import { Link } from 'react-router-dom';

const CreateActor = () => {
  return (
    <>
      <h3>Create Actor</h3>
      <Link className="btn btn-outline-primary" to={'/actors/edit'}>
        Edit actor
      </Link>
    </>
  );
};

export default CreateActor;
