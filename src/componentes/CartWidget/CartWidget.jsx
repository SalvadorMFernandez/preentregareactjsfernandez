import React from 'react';
import './CartWidget.css'; 

const CartWidget = ({ cart }) => {
  const totalItems = Object.values(cart).reduce((sum, count) => sum + count, 0);

  return (
    <div className="cart-widget">
      <span>Carrito</span>
      <span>{totalItems} items</span>
    </div>
  );
};

export default CartWidget;