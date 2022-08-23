import { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import {Contador} from './components/ItemCount';



function App() {

const [numeroProductos, setNumeroProductos] = useState(0);

const addToCart= (productos)=>{
  setNumeroProductos(productos);
}

console.log(numeroProductos);

  return (
    <div>
      <NavBar />
      <ItemListContainer />
      <Contador stock={15} initial={1} agregarProducto={addToCart}/>
    </div>
  );
}

export default App;
