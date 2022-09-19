import React, { useEffect, useState } from 'react'
import Item from '../Item/Item'
import { collection, getDocs } from "firebase/firestore";
import { db } from '../../utils/firebase'


const ItemList = ()=>{
     const [productos, setProductos] = useState([])

    useEffect(()=>{
        const getData = async()=>{
            const query = collection(db, "items");
            const response = await getDocs(query);
            const docs = response.docs
            const data = docs.map(doc=>{return{...doc.data(), id: doc.id}})
            setProductos(data);
        }
        getData()
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