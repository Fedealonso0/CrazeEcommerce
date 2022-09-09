import { createContext } from "react";
import { useState } from "react";

export const CartContext = createContext(); 

export const CartProvider = ({children})=>{
    const [productCartList, setProductCartList] = useState([])


    const addProduct = (product)=>{
                const newList = [...productCartList,product];
                setProductCartList(newList)
        }
        

    const deleteProduct = (idProducto)=>{
        const copyArray = [...productCartList];
        const newArray = copyArray.filter(elemento=>elemento.id !== idProducto);
        setProductCartList(newArray);
    }

    const clearCart = ()=>{
        setProductCartList([])
    }

    return(
        <CartContext.Provider value={{productCartList, addProduct, deleteProduct, clearCart}}>
            {/*..components */}
            {children}
        </CartContext.Provider>
    )
}