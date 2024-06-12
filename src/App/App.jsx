import React, { useState } from 'react'
import Home from '../Companents/Home/Home'
import Shop from '../Companents/Shop/Shop'
import Blog from '../Companents/Blog/Blog'
import Aboute from '../Companents/Aboute/Aboute'
import Cantact from '../Companents/Cantact/Cantact'
import "./App.scss"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from '../Pages/Navbar/Navbar'
import Welcome from '../Pages/Welcome/Welcome'
import Footer from '../Pages/Footer/Footer'
import Cart from '../Pages/cart/Cart'
import Search from '../Companents/Search/Search'
import Heart from '../Companents/Heart/Heart'
const App = () => {

  const [cartshop  ,setCartshop] = useState(false)

  const [searchinfo ,setSearchinfo] = useState("")

  const [praductid , setPraductid] = useState([])

  const [heartid , setHeartid] = useState([])
  

  return (
    <div className='App'>
      <BrowserRouter>
      <Welcome />
      <Navbar setCartshop={setCartshop} cartshop={cartshop}    setSearchinfo={setSearchinfo}/>
      <Routes>
        <Route path='/' element={<Home cartshop={cartshop} setCartshop={setCartshop} praductid={praductid} setPraductid={setPraductid} heartid={heartid}  setHeartid={setHeartid} />} /> 
        <Route path='/Shop' element={<Shop />} /> 
        <Route path='/Blog' element={<Blog />} /> 
        <Route path='/Aboute' element={<Aboute />} /> 
        <Route path='/Heart' element={<Heart heartid={heartid} setHeartid={setHeartid} />} />
        <Route path='/Cantact' element={<Cantact />} /> 
        <Route path='/Cart' element={<Cart setPraductid={setPraductid} praductid={praductid} />} />
        <Route path='/Search' element={<Search praductid={praductid} searchinfo={searchinfo} setPraductid={setPraductid} heartid={heartid} setHeartid={setHeartid}/>   } />
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App