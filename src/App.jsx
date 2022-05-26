import {
  Routes,
  Route
} from 'react-router-dom';

import './App.css';
import Pokemons from './layouts/pokemons/Pokemons';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Pokemons />}>
        <Route path="create" element={<h2>Create Pokémons</h2>} />
        <Route path="update" element={<h2>Update Pokémons</h2>} />
        <Route index element={<h2>Pokémons</h2>} />
      </Route>
      <Route path="*" element={<h2>404</h2>} />
    </Routes>
  );
}

export default App;

// Route, adentro de Routes (importar los 2). Rutas que nos van a llevar a las diferentes acciones que tenga el proyecto.
