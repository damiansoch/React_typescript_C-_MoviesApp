import React from 'react';
import { useParams } from 'react-router-dom';
import ActorForm from './ActorForm';

const EditActor = () => {
  const { id } = useParams();

  return (
    <>
      <h3>Edit Actor</h3>
      {id}
      <ActorForm
        model={{
          name: 'Tom Holland',
          dateOfBirth: new Date('1985/04/06'),
        }}
        onSubmit={(values) => console.log(values)}
      />
    </>
  );
};

export default EditActor;
