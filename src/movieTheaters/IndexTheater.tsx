import React from 'react';
import { Link } from 'react-router-dom';

const IndexTheater = () => {
  return (
    <div>
      <h3>Theaters</h3>
      <Link className="btn btn-outline-primary" to={'/theaters/create'}>
        Greate theater
      </Link>
    </div>
  );
};

export default IndexTheater;
