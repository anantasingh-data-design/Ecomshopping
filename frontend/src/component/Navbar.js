import React from 'react';
import {Link} from 'react-router-dom';
import "./Navbar.css";
const Navbar = ({click}) =>{
    return(
       <nav className="navbar">
         
           <div className="navbar_logo">
               <h2>Ecomshopping cart</h2>
           </div>
        
           <ul className="navbar_links">
               <li>
                   <Link to="/cart" className="cart__link">
                     <i className="fas fa-shopping-cart"></i>
                        <span>
                         Cart
                            <span className="cartlogo_badge">0</span>
                        </span> 
                   </Link>
               </li>
               <li>
                   <Link to="/">
                      
                       Shop
                   </Link>
               </li>
           </ul>
           
           <div className="humberger__menu" onClick={click}>
               <div></div>
               <div></div>
               <div></div>
           </div>
       </nav>

    )
}
export default Navbar;