import React, { } from 'react';

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './componentes/Navbar/Navbar.js'
import Products from './componentes/Products/Products.js';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer.js';
import Checkout from './componentes/Checkout/Checkout.js';
import Cart from './componentes/Cart/Cart.js'; 
import { useEffect } from 'react';



      function App() {


        const {productos, getProducts} = useFirebase()
        useEffect(() => {
          getProducts()
          console.log(productos)
          return () => {

          }
        }, [])
        return (
          <Router>
           
            <Navbar/> 
            <h1>EQUILAB CIENTIFICA</h1>
            <Routes>
            <Route path='/' element = {<Products/>}/>
            <Route path='/item/detail/:id' element = {<ItemDetailContainer/>}/>
            <Route path='/cart' element = {<Cart/>}/>
            <Route path='/checkout' element = {<Checkout/>}/>
            </Routes>
            <Cart/>
          </Router>
        )
      } 
      
      
export default App;
