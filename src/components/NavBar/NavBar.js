import CartWidget from "../CartWidget/CartWidget";



const NavBar = ()=>{

    return (
        <div className="header">
   <h1 className="headerTitle"><a href="index.js">AntiEsthetic</a></h1>  
      <ul className="headerNav">
        <li className="redirect"><a href="index.js">Inicio</a></li>
        <li className="redirect"><a href="products.js">Lanzamientos</a></li>
        <li className="redirect"><a href="shop.js">Productos</a></li>
        <li className="redirect" id="carrito"><CartWidget /></li>
    </ul>
      </div>
    )
}


export default NavBar;
