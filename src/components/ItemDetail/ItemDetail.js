import { Contador } from "../ItemCount/ItemCount"
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";


const ItemDetail= ({producto})=>{
    const {addProduct} = useContext(CartContext);

    const [prodOnCart, setProdOnCart] = useState(0);


    const onAdd = (contador)=>{
        setProdOnCart(prodOnCart+contador)
        addProduct(producto, contador, prodOnCart);
    }
    
    return(
        <div className='detalleDeProductos'>
                        <div className='detailDisplay'>
                        <img src={producto.pictureUrl} alt="" className='detailImg'></img>
                        <div className='infoProd'>
                        <h1>{producto.title}</h1>
                        <p className='precioDetail'>${producto.price}</p>
                        <p className='descripDetail'>{producto.description}</p> 
                        <label for='talle'>Elegi tu talle:</label>
                        <select name='talle' className='talles' id="talle">
                            <option value='XS'>XS</option>
                            <option value='S'>S</option>
                            <option value='M'>M</option>
                            <option value='L'>L</option>
                            <option value='XL'>XL</option>
                            <option value='XXL'>XXL</option>
                        </select>
                        <Contador stock={producto.stock} initial={1} agregarProducto={onAdd}/>
                        <Link to='/carrito' className={`${prodOnCart>0 ? 'activo' : 'inactivo'}`}><button className="finalCompra">
                         Pasar a pagar
                        </button></Link>              
                        </div>
                    </div>
        </div>
    )
}

export default ItemDetail