import {useState} from 'react';

export const Contador = ({stock, initial, agregarProducto})=>{
    const [contador, setContador] = useState(initial);

    const agregar = ()=>{
        if(contador<stock){
            setContador(contador + 1)
        }
    }

    const remover = ()=>{
        if(contador>0){
            setContador(contador-1)
        }
    }

    return(
        <div className='itemCounter'>
        <div className='masOMenos'>
            <button onClick={agregar} className="sumaYResta"><h3>+</h3></button>
            <p className="sumaYResta">{contador}</p>
            <button onClick={remover} className="sumaYResta"><h3>-</h3></button>
            </div>
            <button onClick={()=>(agregarProducto(contador))} 
            className={`addToCart ${contador>0 ? 'activo' : 'inactivo'}`}>
            Agregar al carrito 
            </button>
        </div>
    )
}