
import React, { useState } from 'react';
import './Productos.css';
import CartWidget from '../CartWidget/CartWidget';

const products = [
  {
    id: 1,
    name: 'Camiseta NBA Pistons 33',
    description: 'Camiseta NBA Pistons 33 oficial calidad premium',
    price: '$ 54.000',
    imageUrl: './img/IMG_0516.jpg',
    brand: 'NBA',
  },
  {
    id: 2,
    name: 'Camiseta NBA Chicago Bulls 23',
    description: 'Camiseta NBA Chicago Bulls 23 oficial vintage calidad premium',
    price: '$ 74.000',
    imageUrl: './img/IMG_0518.jpg',
    brand: 'NBA',
  },
  {
    id: 3,
    name: 'Short NBA Phoenix Suns',
    description: 'Short NBA Phoenix Suns oficial calidad premium',
    price: '$ 33.000',
    imageUrl: './img/IMG_1062.jpg',
    brand: 'NBA',
  },
  {
    id: 4,
    name: 'Camiseta NFL vintage',
    description: 'Camiseta NFL 12 vintage',
    price: '$ 57.000',
    imageUrl: './img/IMG_1106.jpg',
    brand: 'NFL'
  },
];

const ProductCatalog = () => {
  const [cart, setCart] = useState({});

  const handleAddToCart = (productId) => {
    setCart((prevCart) => {
      const newCart = { ...prevCart };
      newCart[productId] = (newCart[productId] || 0) + 1;
      return newCart;
    });
  };

  const getProductCount = (productId) => {
    return cart[productId] || 0;
  };

  return (
    <div className="product-catalog">
      {products.map((product) => (
        <div key={product.id} className={`product ${getBrandClass(product.brand)}`}>
          <img src={product.imageUrl} alt={product.name} />
          <div className="product-content">
            <div className="brand">{product.brand}</div>
            <h2>{product.name}</h2>
            <p className="description">{product.description}</p>
            <p className="price">{product.price}</p>
            <div className="product-actions">
              <button onClick={() => handleAddToCart(product.id)}>Agregar al Carrito</button>
              <span>En el carrito: {getProductCount(product.id)}</span>
            </div>
          </div>
        </div>
      ))}
      <CartWidget cart={cart} />
    </div>
  );
};

const getBrandClass = (brand) => {
  switch (brand) {
    case 'NBA':
      return 'nba';
    case 'NFL':
      return 'nfl';
    case 'MLB':
      return 'mlb';
    default:
      return '';
  }
};

export default ProductCatalog;
