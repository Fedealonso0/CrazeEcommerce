import ItemDetail from "../ItemDetail/ItemDetail"
import React, { useEffect, useState } from 'react'
import { items } from '../../productDatabase/mockData'
import { useParams } from "react-router-dom"

const ItemDetailContainer = ()=>{ 
    const [productos, setProductos] = useState([])

    const idProductostring = useParams();

    const obtenerProductos = ()=>{
        return new Promise((resolve, reject)=>{
                resolve(items[idProductostring.id-1])
        })
    }

    useEffect(()=>{
        const guardarproductos = async()=>{  
                const listproductos = await obtenerProductos();
                setProductos(listproductos);
        }
        guardarproductos();
    }, )
    
    return(
        <div>
            <ItemDetail producto={productos} />
        </div>
    )
    }

export default ItemDetailContainer