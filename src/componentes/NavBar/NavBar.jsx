import React from 'react'
import "./NavBar.css"
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
  return (
    <header>
        <h1>US store</h1>
        <nav>
            <li>NBA</li>
            <li>NFL</li>
            <li>MLB</li>
        </nav>
        <CartWidget></CartWidget>
    </header>
  )
}

export default NavBar;