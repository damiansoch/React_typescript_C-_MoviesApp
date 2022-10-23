import React from 'react';
import { useParams } from 'react-router-dom';

const EditActor = () => {
  const { id } = useParams();
  return (
    <>
      <h3>Edit Actor</h3>
      {id}
    </>
  );
};

export default EditActor;
