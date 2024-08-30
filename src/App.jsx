import React from 'react'
import NavBar from './componentes/NavBar/NavBar'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';

const App = () => {
  return (
    <>
    <NavBar></NavBar>
    <ItemListContainer greeting="Prendas"></ItemListContainer>
    </>
  )
}

export default App
