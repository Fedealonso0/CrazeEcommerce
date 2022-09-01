import CartWidget from "../CartWidget/CartWidget";
import { Link } from 'react-router-dom'



const NavBar = ()=>{

    return (
        <div className="header">
   <h1 className="headerTitle"><Link to='/'>AntiEsthetic</Link></h1>  
      <ul className="headerNav">
        <li className="redirect"><Link to='/'>Inicio</Link></li>
        <li className="redirect"><Link to="/lanzamientos">Lanzamientos</Link></li>
        <li className="redirect"><Link to="/productos">Productos</Link></li>
        <li className="redirect" id="carrito"><CartWidget /></li>
    </ul>
      </div>
    )
}


export default NavBar;
