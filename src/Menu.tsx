import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          React Movies
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/genres">
                Genres
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/actors">
                Actors
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/theaters">
                Theaters
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav ">
            <li className="nav-item">
              <Link className="nav-link" to="/movies/create">
                Add Movie
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/movies/filter">
                Search movie
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Menu;
