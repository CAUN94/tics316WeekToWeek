import './App.css';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import HomePage from './pages/HomePage';
import MoviePage from './pages/MoviePage';
import RickAndMortyPage from './pages/RickAndMortyPage';
import PokeAPISearch from './pages/PokePage';
import JsonRandomPage from './pages/JsonRandomPage';
import RandomUserPage from './pages/RandomUserPage';
import FakeStorePage from './pages/FakeStorePage';
import OtherPage from './pages/OtherPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="moviepage" element={<MoviePage />} />
          <Route path="rickandmorty" element={<RickAndMortyPage />} />
          <Route path="pokeApi" element={<PokeAPISearch />} />
          <Route path="json" element={<JsonRandomPage />} />
          <Route path="randomuser" element={<RandomUserPage />} />
          <Route path="fakestore" element={<FakeStorePage />} />
          <Route path="other" element={<OtherPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
