import CartWidget from "./CartWidget";



const NavBar = ()=>{
    return (
        <div className="header">
          
   <h1 className="headerTitle"><a href="index.js">CryptoStore</a></h1>  
      <ul className="headerNav">
        <li className="redirect"><a href="index.js">Home</a></li>
        <li className="redirect"><a href="products.js">Trending</a></li>
        <li className="redirect"><a href="foru.js">For You</a></li>
        <li className="redirect"><a href="shop.js">Shop</a></li>
        <li className="redirect" id="carrito"><CartWidget /></li>
    </ul>
      </div>
    )
}


export default NavBar;
