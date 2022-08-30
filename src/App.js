// import { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
// import {Contador} from './components/ItemCount/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'


function App() {

// const [numeroProductos, setNumeroProductos] = useState(0);

// const addToCart= (productos)=>{
//   setNumeroProductos(productos);
// }



  return (
    <div>
      <NavBar />
      <ItemListContainer />
      <ItemDetailContainer />
      {/* <Contador stock={15} initial={1} agregarProducto={addToCart}/> */}
    </div>
  );
}

export default App;
