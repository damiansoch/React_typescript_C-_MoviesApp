import React from 'react';
import { Link } from 'react-router-dom';

const IndexActors = () => {
  return (
    <div>
      <h3>Actors</h3>
      <Link className="btn btn-outline-primary" to={'/actors/create'}>
        Greate actor
      </Link>
    </div>
  );
};

export default IndexActors;
