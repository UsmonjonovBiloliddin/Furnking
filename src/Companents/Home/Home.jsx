import React from 'react'
import "./Home.scss"
import Navbar from "../../Pages/Navbar/Navbar"
import Pag from '../../Pages/Pag/Pag'
import Welcome from "../../Pages/Welcome/Welcome"
import Dream from "../../Pages/Dream/Dream"
import Brend from "../../Pages/Brend/Brend"
import Images from '../../Pages/Images/Images'
import Trending from '../../Pages/Trending/Trending'
import Special from '../../Pages/Special/Special'
// import Products from '../../Pages/Products/Products'
import Slider from '../../Pages/Slider/Slider'
// import Articles from '../../Pages/Articles/Articles'
const Home = ({cartshop , setCartshop , praductid ,setPraductid , heartid ,setHeartid}) => {
  return (
    <div className='Home'>
    <Pag cartshop={cartshop} setCartshop={setCartshop} />
    <Dream />
    <Brend/>
    <Images />
    <Trending praductid={praductid} setPraductid={setPraductid} heartid={heartid} setHeartid={setHeartid} />
    <Special />
    {/* <Products praductid={praductid} setPraductid={setPraductid}  /> */}
    {/* <Articles /> */}
    </div>
  )
}

export default Home