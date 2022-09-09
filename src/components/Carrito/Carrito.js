import { CartContext } from "../../context/CartContext";
import { useContext } from "react";

const Carrito =()=>{
    const { productCartList, deleteProduct, clearCart } = useContext(CartContext);

    return(
        <div>
            <button onClick={()=>clearCart()} className="vaciarCart">Vaciar carrito</button>
            {
                productCartList.map(item=>(
                    <div className="prodCarrito">
                    <img src={item.pictureUrl} alt="" className="imgCarrito"></img>
                    <div className="infoProdCart">
                    <h1>{item.title}</h1>
                    <h3>{item.price}</h3>
                    <h3>x{item.quantity}</h3>
                    </div>
                    <button onClick={()=>deleteProduct(item.id)} className="removeFromCart"><i class="bi bi-trash-fill"></i></button>
                    </div>
                ))
            }
        </div>
    )
}

export default Carrito