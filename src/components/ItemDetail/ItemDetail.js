import { Contador } from "../ItemCount/ItemCount"
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";


const ItemDetail= ({producto})=>{
    const {addProduct} = useContext(CartContext);

    const [prodOnCart, setProdOnCart] = useState(0);
    const [quantity, setQuantity] = useState(0);


    const onAdd = (contador)=>{
        setProdOnCart(prodOnCart+contador)
        addProduct(producto, contador, prodOnCart);
        setQuantity(contador)
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
                        <select name='talle' className='talles'>
                            <option value='xs'>XS</option>
                            <option value='s'>S</option>
                            <option value='m'>M</option>
                            <option value='l'>L</option>
                            <option value='xl'>XL</option>
                            <option value='xxl'>XXL</option>
                        </select>
                        <Contador stock={producto.stock} initial={1} agregarProducto={onAdd}/>
                        {
                            quantity>0 &&
                        <Link to='/carrito'><button className={`finalCompra ${prodOnCart>0 ? 'activo' : 'inactivo'}`}>
                         Pasar a pagar
                        </button></Link>
                        }
                        </div>
                    </div>
        </div>
    )
}

export default ItemDetail