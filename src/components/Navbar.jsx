// import React from 'react';
// import logo from '../images/logo.svg';

// const Navbar = () =>{
//     return(
//         <>
//             <div className="Navbar">
//             <nav class="navbar navbar-light">
//                 <div class="container-fluid">
//                     <img src={logo} alt="" className="navbar-logo"/>
//                     <div>

//                     </div>
//                     <button className="navbar-btn btn btn-outline-secondary">Login</button>
//                 </div>
//             </nav>
//             </div>
//         </>
//     )
// }

// export default Navbar;

import searchimg from "./search.png";
import HomeIcon from "./Home.png";
import logo from "../images/logo.svg";
import "./Style.css";

const NavBar = () => {
  return (
    <div className="item_navbar_parent">
      <img src={HomeIcon} className="item_home_icon" alt="Not Found" />
      <div className="item_navbar">
        <span className="item_nav">
          <img src={logo} alt="" className="navbar-logo" />
        </span>
        <span className="item_nav">TV</span>
        <span className="item_nav">Movies</span>
        <span className="item_nav">Sports</span>
        <span className="item_nav">Diseny+</span>
      </div>

      <div className="item_search">
        <input
          type="search"
          placeholder="Search"
          className="item_search_icon"
        />
        <img src={searchimg} alt="Not Found" className="item_search_img" />
        <p className="item_subscribe">Subscribe</p>
        <p className="item_login">LOGIN</p>
      </div>
    </div>
  );
};

export default NavBar;
