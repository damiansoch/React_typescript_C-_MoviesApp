import React from 'react';
import { Field, Form, Formik } from 'formik';
import { genreDTO } from '../genres/genres.model';

const FilterMovies = () => {
  const initialValues: filterMoviesForm = {
    title: '',
    genreId: 0,
    upcomingReleases: false,
    inTheathers: false,
  };

  const genres: genreDTO[] = [
    {
      id: 1,
      name: 'Comedy',
    },
    {
      id: 2,
      name: 'Drama',
    },
    {
      id: 3,
      name: 'Horror',
    },
    {
      id: 4,
      name: 'Musical',
    },
  ];

  return (
    <>
      <h3>Filter movies</h3>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => console.log(values)}
      >
        {(formikProps) => (
          <Form>
            <div className="row gx-3 align-items-center">
              <div className="col-auto">
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  placeholder="Title of the movie"
                  {...formikProps.getFieldProps('title')}
                />
              </div>
              {/* --------------------------- */}
              <div className="col-auto">
                <select
                  className="form-select"
                  {...formikProps.getFieldProps('genreId')}
                >
                  <option value="0">-- Choose a genre --</option>
                  {genres.map((genre) => (
                    <option key={genre.id} value={genre.id}>
                      -- {genre.name} --
                    </option>
                  ))}
                </select>
              </div>
              {/* --------------------------- */}
              <div className="col-auto">
                <div className="form-check">
                  <Field
                    className="form-check-input"
                    id="upcomingReleases"
                    name="upcomingReleases"
                    type="checkbox"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="upcomingReleases"
                  >
                    Upcoming Releases
                  </label>
                </div>
              </div>
              {/* --------------------------- */}
              <div className="col-auto">
                <div className="form-check">
                  <Field
                    className="form-check-input"
                    id="inTheaters"
                    name="inTheaters"
                    type="checkbox"
                  />
                  <label className="form-check-label" htmlFor="inTheaters">
                    In Theaters
                  </label>
                </div>
              </div>
              {/* --------------------------- */}
              <div className="col-auto">
                <button
                  className="btn btn-outline-primary me-3 mt-3"
                  onClick={() => formikProps.submitForm()}
                >
                  Search
                </button>
                <button
                  className="btn btn-outline-secondary mt-3"
                  onClick={() => {
                    formikProps.setValues(initialValues);
                  }}
                >
                  Clear
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};
interface filterMoviesForm {
  title: string;
  genreId: number;
  upcomingReleases: boolean;
  inTheathers: boolean;
}
export default FilterMovies;
