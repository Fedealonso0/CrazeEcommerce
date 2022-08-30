import React, { useEffect, useState } from 'react'
import Item from '../Item/Item'
import buzo from "../../assets/antibuzo.webp";
import cargo from "../../assets/anticargo.jpg";
import remera from "../../assets/antiremera.jpg";
import gorra from '../../assets/antigorra.webp';

const items =[
    {
    id:1,
    title: "Buzo",
    price: "$15.000",
    pictureUrl: buzo
},
{
    id:2,
    title: "Cargo",
    price: "$20.000",
    pictureUrl: cargo
},
{
    id:3,
    title: "Remera",
    price: "$5.000",
    pictureUrl: remera
},
{
    id:4,
    title: "Gorra",
    price: "$3.000",
    pictureUrl: gorra
}
]


const ItemList = ()=>{
    const [productos, setProductos] = useState([])


    const obtenerProductos = ()=>{
        return new Promise((resolve, reject)=>{
            setTimeout(()=> {
                resolve(items)
            }, 2000);
        })
    }

    useEffect(()=>{
        const guardarproductos = async()=>{
            try {
                const listproductos = await obtenerProductos();
                setProductos(listproductos);
                console.log(listproductos);
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