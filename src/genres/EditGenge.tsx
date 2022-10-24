import { useParams } from 'react-router-dom';
import GenreForm from './GenreForm';

const EditGenge = () => {
  const { id }: any = useParams();

  return (
    <>
      <h3>Edit Genre</h3>
      The id is {id}
      <GenreForm
        model={{ name: 'Action' }}
        onSubmit={async (value, action) => {
          //when the form is posted
          await new Promise((r) => setTimeout(r, 3000));
          console.log(id);
          console.log(value);
        }}
      />
    </>
  );
};

export default EditGenge;
