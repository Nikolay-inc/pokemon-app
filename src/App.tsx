import './globals.scss';
import { Provider } from "react-redux";
import store from "./store";
import PokemonList from './components/PokemonsList';
import { Route, Routes } from 'react-router-dom';
import PokemonPage from './components/PokemonPage';

function App() {
  return (
    <Provider store={store}>
      <div className='main-container'>
        <Routes>
          <Route path={"/"} element={<PokemonList />} />
          <Route path="/pokemon/:id" element={<PokemonPage />} />
          <Route path="*" element={<div>not found</div>} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
