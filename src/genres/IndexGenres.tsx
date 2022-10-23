import React from 'react';
import { Link } from 'react-router-dom';

const IndexGenres = () => {
  return (
    <div>
      <h3>Genres</h3>
      <Link className="btn btn-outline-primary" to={'/genres/create'}>
        Greate genre
      </Link>
    </div>
  );
};

export default IndexGenres;
