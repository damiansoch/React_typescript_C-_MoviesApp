import './App.css';

import Menu from './Menu';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import IndexGenres from './genres/IndexGenres';
import LandingPage from './movies/LandingPage';
// import routes from './route-config';
import CreateGenre from './genres/CreateGenre';
import EditGenge from './genres/EditGenge';
import IndexActors from './actors/IndexActor';
import CreateActor from './actors/CreateActor';
import EditActor from './actors/EditActor';
import IndexTheater from './movieTheaters/IndexTheater';
import CreateTheather from './movieTheaters/CreateTheater';
import EditTheater from './movieTheaters/EditTheater.';
import CreateMovie from './movies/CreateMovie';
import EditMovie from './movies/EditMovie';
import FilterMovies from './movies/FilterMovies';

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <div className="container">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          {/* genres */}
          <Route path="/genres" element={<IndexGenres />} />
          <Route path="/genres/create" element={<CreateGenre />} />
          <Route path="/genres/edit/" element={<EditGenge />}>
            <Route path=":id" element={<EditGenge />} />
          </Route>
          {/* actros */}
          <Route path="/actors" element={<IndexActors />} />
          <Route path="/actors/create" element={<CreateActor />} />
          <Route path="/actors/edit/" element={<EditActor />}>
            <Route path=":id" element={<EditActor />} />
          </Route>
          {/* theaters */}
          <Route path="/theaters" element={<IndexTheater />} />
          <Route path="/theaters/create" element={<CreateTheather />} />
          <Route path="/theaters/edit/" element={<EditTheater />}>
            <Route path=":id" element={<EditTheater />} />
          </Route>
          {/* movies */}
          <Route path="/movies/create" element={<CreateMovie />} />
          <Route path="/movies/edit/" element={<EditMovie />}>
            <Route path=":id" element={<EditMovie />} />
          </Route>
          <Route path="/movies/filter" element={<FilterMovies />} />
          {/* non existing route */}
          <Route path="*" element={<LandingPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
