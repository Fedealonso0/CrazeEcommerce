import ItemDetail from "../ItemDetail/ItemDetail"
import React, { useEffect, useState } from 'react'
import {  useParams } from "react-router-dom"
import { collection, getDocs } from "firebase/firestore";
import { db } from '../../utils/firebase'

const ItemDetailContainer = ()=>{ 

    const  productId  = useParams();
    
    const [item, setItem] = useState({})

    useEffect(()=>{
        const getData = async()=>{
            const query = collection(db, "items");
            const response = await getDocs(query);
            const docs = response.docs
            const data = docs.map(doc=>{return{...doc.data(), id: doc.id}})
            const newData = data.find(element=>element.id === productId.id)
            setItem(newData);
        }
        getData()
    }, [productId])
    
    return(
        <div>
            <ItemDetail producto={item} />
        </div>
    )
    }

export default ItemDetailContainer