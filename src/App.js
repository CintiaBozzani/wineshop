import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="Bienvenido a Black Cave Wine Shop" />}/>
          <Route path="/category/:id" element={<ItemListContainer greeting="Productos por categorias" />}/>
          <Route path="/item/:id" element={<ItemDetailContainer greeting="Detalle de producto"/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
