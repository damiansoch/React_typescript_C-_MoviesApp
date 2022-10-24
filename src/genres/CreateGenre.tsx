import { Link } from 'react-router-dom';
import GenreForm from './GenreForm';

const CreateGenre = () => {
  return (
    <>
      <h3>Create Genre</h3>
      <GenreForm
        model={{ name: '' }}
        onSubmit={async (value, action) => {
          //when the form is posted
          await new Promise((r) => setTimeout(r, 3000));
          console.log(value);
        }}
      />

      <br />
      <Link className="btn btn-outline-primary" to={'/genres/edit'}>
        Edit genre
      </Link>
    </>
  );
};

export default CreateGenre;
