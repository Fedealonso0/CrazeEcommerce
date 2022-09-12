import { createContext } from "react";
import { useState } from "react";

export const CartContext = createContext(); 

export const CartProvider = ({children})=>{
    const [productCartList, setProductCartList] = useState([]);

    const isInCart = (id)=>{
        const elementExists = productCartList.some((elemento)=>elemento.id === id);
        return elementExists;
    }

    const addProduct = (product, qty)=>{
        const newList = [...productCartList];
        if(isInCart(product.id)){
            const productIndex = productCartList.findIndex(element=>element.id===product.id);
            newList[productIndex].quantity = newList[productIndex].quantity + qty;
            newList[productIndex].totalPrice = newList[productIndex].quantity * newList[productIndex].price;
            setProductCartList(newList)
        }else{ 
            const newProduct={...product, quantity:qty, totalPrice: qty*product.price}
            const newList = [...productCartList];
            newList.push(newProduct);
            setProductCartList(newList);
        }
    }

    const deleteProduct = (idProducto)=>{
        const copyArray = [...productCartList];
        const newArray = copyArray.filter(elemento=>elemento.id !== idProducto);
        setProductCartList(newArray);
    }

    const clearCart = ()=>{
        setProductCartList([])
    }

    const getTotalProducts = ()=>{
        const totalProducts = productCartList.reduce((acc,item)=>acc + item.quantity,0);
        return totalProducts;
    }

    return(
        <CartContext.Provider value={{productCartList, addProduct, deleteProduct, clearCart, isInCart, getTotalProducts}}>
            {/*..components */}
            {children}
        </CartContext.Provider>
    )
}