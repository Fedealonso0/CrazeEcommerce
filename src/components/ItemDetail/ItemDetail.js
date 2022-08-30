import React, { useEffect, useState } from 'react'
import { Contador } from '../ItemCount/ItemCount';
import buzo from "../../assets/antibuzo.webp";
import cargo from "../../assets/anticargo.jpg";
import remera from "../../assets/antiremera.jpg";
import gorra from '../../assets/antigorra.webp';

const items =[
    {
    id:1,
    title: "Buzo",
    price: "$15.000",
    pictureUrl: buzo,
    description: "Buzo hecho a mano con tela de friza ideal para invierno",
    stock: 12
},
{
    id:2,
    title: "Cargo",
    price: "$20.000",
    pictureUrl: cargo,
    description: "Pantalon recto tipo cargo con tela ripstop antidesgarro",
    stock: 7
},
{
    id:3,
    title: "Remera",
    price: "$5.000",
    pictureUrl: remera,
    description: "Remera con corte oversize y estampado en serigrafia",
    stock: 15
},
{
    id:4,
    title: "Gorra",
    price: "$3.000",
    pictureUrl: gorra,
    description: "Gorra de corderoy color camello. Talle unico",
    stock: 20
}
]


const ItemDetail = ()=>{
    
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
        <div className='detalleDeProductos'>
            {
                productos.map((producto)=>{
                    return <div className='detailDisplay'>
                        <img src={producto.pictureUrl} alt="" className='detailImg'></img>
                        <div className='infoProd'>
                        <h1>{producto.title}</h1>
                        <p className='precioDetail'>{producto.price}</p>
                        <p className='descripDetail'>{producto.description}</p> 
                        <br></br>
                        <label for='talle'>Elegi tu talle:</label>
                        <select name='talle' className='talles'>
                            <option value='xs'>XS</option>
                            <option value='s'>S</option>
                            <option value='m'>M</option>
                            <option value='l'>L</option>
                            <option value='xl'>XL</option>
                            <option value='xxl'>XXL</option>
                        </select>
                        <Contador stock={producto.stock} initial={1}/>
                        </div>
                    </div>
                })
            }
        </div>
    )
}

export default ItemDetail