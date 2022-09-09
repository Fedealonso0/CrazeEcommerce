import { Contador } from "../ItemCount/ItemCount"
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";


const ItemDetail= ({producto})=>{
    const {addProduct} = useContext(CartContext);

    const [prodOnCart, setProdOnCart] = useState(0);


    const onAdd = (contador)=>{
        setProdOnCart(contador)
        const newProduct={...producto, quantity:contador}
        addProduct(newProduct);
    }
    
    return(
        <div className='detalleDeProductos'>
                        <div className='detailDisplay'>
                        <img src={producto.pictureUrl} alt="" className='detailImg'></img>
                        <div className='infoProd'>
                        <h1>{producto.title}</h1>
                        <p className='precioDetail'>{producto.price}</p>
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
                        <p>Cantidad de productos en carrito: {prodOnCart}</p>
                        <Link to='/carrito'><button className={`finalCompra ${prodOnCart>0 ? 'activo' : 'inactivo'}`}>
                         Pasar a pagar
                        </button></Link>
                        </div>
                    </div>
        </div>
    )
}

export default ItemDetail