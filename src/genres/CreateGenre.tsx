import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const CreateGenre = () => {
  const navigate = useNavigate();

  return (
    <>
      <h3>Create Genre</h3>
      <button
        className="btn btn-outline-primary"
        onClick={() => {
          //..saving in the database
          navigate('/genres');
        }}
      >
        Create
      </button>
      <br />
      <Link className="btn btn-outline-primary" to={'/genres/edit'}>
        Edit genre
      </Link>
    </>
  );
};

export default CreateGenre;
