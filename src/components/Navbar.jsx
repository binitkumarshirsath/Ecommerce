import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div>
      <nav>
        <ul className="navbar-menu">
          <li> <Link to={"/"}>Home</Link></li>
          <li><a href="#">About</a></li>
          <li> <Link to={"/cart"}>Cart</Link></li>
          <li><a href="#">Shop</a></li>
          <li><a href="#">Login</a></li>
          <li><a href="#">Sign up</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
