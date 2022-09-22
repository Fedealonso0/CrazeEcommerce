import CartWidget from "../CartWidget/CartWidget";
import { Link } from 'react-router-dom'
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";



const NavBar = ()=>{

  const { getTotalProducts } = useContext(CartContext)

    return (
        <div className="header">
   <h1 className="headerTitle"><Link to='/'>AntiEsthetic</Link></h1>  
      <ul className="headerNav">
        <li className="redirect"><Link to='/'>Inicio</Link></li>
        <li className="redirect"><Link to="/lanzamientos">Lanzamientos</Link></li>
        <li className="redirect"><Link to="/productos">Productos</Link></li>
        <li className="redirect" id="carrito"><CartWidget />{getTotalProducts()}</li>
    </ul>
      </div>
    )
}


export default NavBar;
