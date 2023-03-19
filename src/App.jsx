import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer.jsx'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route exact path="/" element={<ItemListContainer greeting="Bienvenido a VirtualTech" />} />
          <Route exact path="/category/:categoryid" element={<ItemListContainer />} />
          <Route exact path='/item/:detalleid' element={<ItemDetailContainer />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
