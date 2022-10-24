import React from 'react';
import { Link } from 'react-router-dom';
import ActorForm from './ActorForm';

const CreateActor = () => {
  return (
    <>
      <h3>Create Actor</h3>
      <ActorForm
        model={{ name: '', dateOfBirth: undefined }}
        onSubmit={(values) => console.log(values)}
      />
      <Link className="btn btn-outline-primary" to={'/actors/edit'}>
        Edit actor
      </Link>
    </>
  );
};

export default CreateActor;
