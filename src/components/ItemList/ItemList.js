import React, { useEffect, useState } from 'react'
import Item from '../Item/Item'
import { items } from '../../productDatabase/mockData'


const ItemList = ()=>{
    const [productos, setProductos] = useState([])


    const obtenerProductos = ()=>{
        return new Promise((resolve, reject)=>{
            setTimeout(()=> {
                resolve(items)
            }, 2);
        })
    }

    useEffect(()=>{
        const guardarproductos = async()=>{
            try {
                const listproductos = await obtenerProductos();
                setProductos(listproductos);
            } catch(error){
                console.log("Hubo un error");
            }
        }
        guardarproductos();
    }, [])
    
    
    return(
        <div className='listadoDeProductos'>
            {
                productos.map((producto)=>{
                    return(
                       <Item item={producto} />
                    )
                })
            }
        </div>
    )
}

export default ItemList