import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditGenge = () => {
  const { id }: any = useParams();

  return (
    <>
      <h3>Edit Genre</h3>
      The id is {id}
    </>
  );
};

export default EditGenge;
