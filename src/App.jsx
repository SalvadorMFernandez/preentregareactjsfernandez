import React from 'react';
import NavBar from './componentes/NavBar/NavBar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import Articulos from './componentes/Articulos/Productos';
import CartWidget from './componentes/CartWidget/CartWidget'; 

const App = () => {
  return (
    <>
      <NavBar />
      <CartWidget />
      <ItemListContainer greeting="Prendas" />
      <Articulos />
    </>
  );
};

export default App;
