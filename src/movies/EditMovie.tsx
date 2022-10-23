import React from 'react';
import { useParams } from 'react-router-dom';

const EditMovie = () => {
  const { id } = useParams();

  return (
    <>
      <h3>Edit movie</h3>
      {id}
    </>
  );
};

export default EditMovie;
