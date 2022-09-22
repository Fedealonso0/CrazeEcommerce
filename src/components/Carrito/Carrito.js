import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { db } from "../../utils/firebase";
import { collection, addDoc } from "firebase/firestore"
import { useState } from "react";

const Carrito =()=>{
    const { productCartList, deleteProduct, clearCart, getTotalPrice } = useContext(CartContext);
    const [idOrder, setIdOrder] = useState("")

    var currentdate = new Date();
    const fechaYHora = currentdate.getDate() + "/"
               + (currentdate.getMonth()+1)  + "/" 
               + currentdate.getFullYear() + "  "  
               + currentdate.getHours() + ":"  
               + currentdate.getMinutes() + ":" 
               + currentdate.getSeconds();
    
    const sendOrder = (e)=>{
        e.preventDefault();
        const order = {
            buyer:{
                name: e.target[0].value,
                email: e.target[1].value,
                phone: e.target[2].value},
            items: productCartList,
            date: fechaYHora,
            total: getTotalPrice()
            }
            console.log(order);
            const queryRef = collection(db, "orders");
            addDoc(queryRef, order).then(respuesta=> setIdOrder(respuesta.id))
    }    

    const [formState, setFormState] = useState(false)

    return(
        <div>
        {
            productCartList.length>0 ?
        <div>
            <button onClick={()=>clearCart()} className="vaciarCart">Vaciar carrito</button>
            {
                productCartList.map(item=>(
                    <div className="prodCarrito">
                    <img src={item.pictureUrl} alt="" className={"imgCarrito"}></img>
                    <div className="infoProdCart">
                    <h1>{item.title}</h1>
                    <h4>${item.price}</h4>
                    <h4>Talle: {item.size}</h4>
                    <h4>x{item.quantity}</h4>
                    <h2>${item.totalPrice}</h2>
                    </div>
                    <button onClick={()=>deleteProduct(item.id)} className="removeFromCart"><i class="bi bi-trash-fill"></i></button>
                    </div>
                    
                ))
            }
            <h1 style={{textAlign: "center"}}>Total a pagar: ${getTotalPrice()}</h1>
            <button onClick={()=> setFormState(true)} className="goToOrderButton">Finalizar compra</button>
            { formState === true &&
            <div className="popup">
                <div className="orderForm">
                <button onClick={()=> setFormState(false)} className="removeFromCart">X</button>
            <form onSubmit={sendOrder}>
                <div className="inputs">
                <input type="text" placeholder="Nombre completo" className="inputOrder"/>
                <input type="text" placeholder="Email" className="inputOrder"/>
                <input type="text" placeholder="Telefono" className="inputOrder"/>
                </div> 
                <h3 style={{textAlign: "center", margin: "10px"}}>Tu total es: ${getTotalPrice()}</h3>
                <button type="submit" className="orderButton">Comprar</button>
            </form>
            </div>
            </div>
          }
        </div>
        :
        <>
        <h1 className="noProds">No hay productos en tu carrito</h1>
        <Link to="/productos"><h2 className="volverAComprar">Ver productos</h2></Link>
        </>
    }
    </div>)
}

export default Carrito