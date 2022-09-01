import { Link } from "react-router-dom"

const CartWidget = ()=>{
    return (
    <div><Link to="/carrito">
     <i class="bi bi-cart-fill"></i></Link>
     </div>
    )
}

export default CartWidget