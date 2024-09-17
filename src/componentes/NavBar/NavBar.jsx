import React from 'react';
import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
  return (
    <header>
      <img className="logoKlp" src="./img/logoKLP.PNG" alt="Logo klp" />
      <nav>
        <ul>
          <li className="active">NBA</li>
          <li>NFL</li>
          <li>MLB</li>
        </ul>
      </nav>
      <CartWidget className="CartWidget" />
    </header>
  );
}

export default NavBar;
