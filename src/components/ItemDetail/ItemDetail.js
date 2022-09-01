import { Contador } from "../ItemCount/ItemCount"


const ItemDetail= ({producto})=>{
    
    return(
        <div className='detalleDeProductos'>
                        <div className='detailDisplay'>
                        <img src={producto.pictureUrl} alt="" className='detailImg'></img>
                        <div className='infoProd'>
                        <h1>{producto.title}</h1>
                        <p className='precioDetail'>{producto.price}</p>
                        <p className='descripDetail'>{producto.description}</p> 
                        <br></br>
                        <label for='talle'>Elegi tu talle:</label>
                        <select name='talle' className='talles'>
                            <option value='xs'>XS</option>
                            <option value='s'>S</option>
                            <option value='m'>M</option>
                            <option value='l'>L</option>
                            <option value='xl'>XL</option>
                            <option value='xxl'>XXL</option>
                        </select>
                        <Contador stock={producto.stock} initial={1}/>
                        </div>
                    </div>
        </div>
    )
}

export default ItemDetail