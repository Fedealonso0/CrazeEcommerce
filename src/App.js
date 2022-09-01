// import { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
// import {Contador} from './components/ItemCount/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
// import Index from './components/Index/Index'
import PagLanzamientos from './components/PagLanzamientos/PagLanzamientos';
import Carrito from './components/Carrito/Carrito'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {

// const [numeroProductos, setNumeroProductos] = useState(0);

// const addToCart= (productos)=>{
//   setNumeroProductos(productos);
// }



  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/lanzamientos' element={<PagLanzamientos/>}/>
        <Route path='/productos' element={<ItemListContainer/>}/>
        <Route path='/carrito' element={<Carrito/>}/>
        <Route path='/productos/:id' element={<ItemDetailContainer/>}/>
      </Routes>
      {/* <Contador stock={15} initial={1} agregarProducto={addToCart}/> */}
    </BrowserRouter>
  );
}

export default App;
