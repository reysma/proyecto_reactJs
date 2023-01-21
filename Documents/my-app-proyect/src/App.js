import React, { } from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './componentes/Navbar/Navbar.jsx'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer.jsx';
import ItemDetailContainer from './componentes/ItemDetailContainer/itemDetailContainer.jsx';
import Checkout from './componentes/Checkout/Checkout';
import Cart from './componentes/Cart/Cart'; 



      function App() {

        return (
          <Router>
           
            <Navbar/> 
            <h1>EQUILAB CIENTIFICA</h1>
            <Routes>
            <Route path='/' element = {<ItemListContainer/>}/>
            <Route path='/item/detail/:id' element = {<ItemDetailContainer/>}/>
            <Route path='/cart' element = {<Cart/>}/>
            <Route path='/checkout' element = {<Checkout/>}/>
            </Routes>
            <Cart/>
          </Router>
        )
      } 
      
      
export default App;
