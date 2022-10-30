import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';
import  CartContextProvider  from './context/CartContext';
import {CategoryContext}  from './context/CategoryContext';
import axios from "axios";
import ItemCartContainer from './components/CartContainer';

function App() {
  const [dataMock, setDataMock] = useState()
  const contextCategory= useContext(CategoryContext)

  const getData = async () => {
    const response = await axios.get("/mock/mock-data.json")
    setDataMock(response.data)
  }

  useEffect(() => {
    getData()
  }, [])


  return (
    <div className="App">
      <BrowserRouter>
        <CartContextProvider>        
          <NavBar />
          {dataMock && <Routes>
            <Route path="/" element={<ItemListContainer greeting="Bienvenido a Black Cave Wine Shop" dataMock={dataMock} />} />
            <Route path="/category/:id" element={<ItemListContainer greeting={"Encuntra los mejores vinos " + contextCategory?.category } dataMock={dataMock} />} />
            <Route path="/item/:id" element={<ItemDetailContainer greeting="Detalle de producto" dataMock={dataMock} />} />
            <Route path="/cart" element={<ItemCartContainer greeting="Bienvenido a tu carrito"/>} />
          </Routes>}        
        </CartContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
