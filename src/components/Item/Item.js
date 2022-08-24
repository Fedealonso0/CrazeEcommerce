
const Item = ({item})=>{
    return(
        <div className="itemIndividual">
            <img src={item.pictureUrl} alt="" className="imagenItem"></img>
            <h3 className="tituloItem">{item.title}</h3>
            <p className="precioItem">{item.price}</p>
        </div>
    )
}

export default Item