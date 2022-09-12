import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

const Carrito =()=>{
    const { productCartList, deleteProduct, clearCart } = useContext(CartContext);

    return(
        <div>
        {
            productCartList.length>0 ?
        <div>
            <button onClick={()=>clearCart()} className="vaciarCart">Vaciar carrito</button>
            {
                productCartList.map(item=>(
                    <div className="prodCarrito">
                    <img src={item.pictureUrl} alt="" className="imgCarrito"></img>
                    <div className="infoProdCart">
                    <h1>{item.title}</h1>
                    <h4>${item.price}</h4>
                    <h4>x{item.quantity}</h4>
                    <h2>Precio Total: ${item.totalPrice}</h2>
                    </div>
                    <button onClick={()=>deleteProduct(item.id)} className="removeFromCart"><i class="bi bi-trash-fill"></i></button>
                    </div>
                ))
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