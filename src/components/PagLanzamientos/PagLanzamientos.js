import React, { useEffect, useState } from 'react'
import Item from '../Item/Item'
import { collection, getDocs } from "firebase/firestore";
import { db } from '../../utils/firebase'


const PagLanzamientos = ()=>{

  const [productos, setProductos] = useState([])

  useEffect(()=>{
    const getData = async()=>{
        const query = collection(db, "items");
        const response = await getDocs(query);
        const docs = response.docs
        const data = docs.map(doc=>{return{...doc.data(), id: doc.id}})
        const newData = data.filter(element=>element.category === "Lanzamiento")
        setProductos(newData);
    }
    getData()
}, [])

    return(
      <div>
      <h1 style={{marginTop: "120px", textAlign:"center"}}>Ultimos Lanzamientos</h1>
      <div className='listadoDeProductos'>
            {
                productos.map((producto)=>{
                    return(
                       <Item item={producto} />
                    )
                })
            }
       </div>
       </div>
    )
}

export default PagLanzamientos