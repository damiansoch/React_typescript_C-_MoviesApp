import React from 'react';
import { useParams } from 'react-router-dom';

const EditTheater = () => {
  const { id } = useParams();
  return (
    <>
      <h3>Edit Theater</h3>
      {id}
    </>
  );
};

export default EditTheater;
