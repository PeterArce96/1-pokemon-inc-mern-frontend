import { Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path='/create' element = {<h2>Crear Pokemons</h2>}/>
      <Route path='/update' element = {<h2>Update Pokemons</h2>}/>
      <Route path='/' element = {<h2>Pokemons</h2>}/>
      <Route path='*' element = {<h2>404</h2>}/>
    </Routes>
  );
}

export default App;

// Route, adentro de Routes (importar los 2). Rutas que nos van a llevar a las diferentes acciones que tenga el proyecto.