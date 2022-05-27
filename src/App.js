import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Pokedex from './components/Pokedex';
import PokeItem from './components/PokeItem';
import ProtectedRoutes from './components/ProtectedRoutes'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route element={<ProtectedRoutes />}>
          <Route path='/pokedex' element={<Pokedex />}/>
          <Route path='/pokedex/:id' element={<PokeItem />}/>
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
