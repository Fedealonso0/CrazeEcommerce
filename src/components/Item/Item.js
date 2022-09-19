import { Link } from "react-router-dom";

const Item = ({item})=>{
    return(
        <Link to={'/productos/' + item.id} className="itemIndividual">
            <img src={item.pictureUrl} alt="" className="imagenItem"></img>
            <h3 className="tituloItem">{item.title}</h3>
            <p className="precioItem">${item.price}</p>
        </Link>
    )
}

export default Item