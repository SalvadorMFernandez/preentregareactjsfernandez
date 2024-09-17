import React from 'react';
import NavBar from './componentes/NavBar/NavBar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import Articulos from './componentes/Articulos/Productos';



const App = () => {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="Prendas" />
      <Articulos></Articulos>
    </>
  );
};

export default App;

