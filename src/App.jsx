import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer.jsx'
import Footer from './components/Footer'
import CartProvider from './components/CartContext'
import Cart from './components/Cart'


function App() {

  return (
    <>
      <BrowserRouter>        
      <CartProvider>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<ItemListContainer greeting="Bienvenido a VirtualTech" />} />
          <Route exact path="/category/:categoryid" element={<ItemListContainer />} />
          <Route exact path='/item/:detalleid' element={<ItemDetailContainer />} />
          <Route exact path="/cart" element={<Cart />} />
        </Routes>
      </CartProvider>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
