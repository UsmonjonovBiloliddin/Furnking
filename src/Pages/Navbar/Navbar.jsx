import React, { useState } from "react";

import { LuShoppingBag } from "react-icons/lu";
import { LuBellRing } from "react-icons/lu";
import { FaRegUser } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { BiSearch } from "react-icons/bi";
import "./Navbar.scss";

import { HiMiniBars3 } from "react-icons/hi2";
import { Link } from "react-router-dom";
const Navbar = ({setCartshop , cartshop   ,setSearchinfo}) => {
  const [barsclcik, setBarsclick] = useState(true);
  return (
    <div className="Navbar">
      <nav>
        <div className="logo">
          <Link to={"/"}><img src="../img/Logo (1).png" alt="" /></Link>
        </div>
        <div className="Search">
          <form action="#">
           <Link to={"/Search"}>
             <input onChange={(e) => setSearchinfo(e.target.value)} type="text" placeholder="Search here" />
          </Link>
            <select name="" id="">
              <option value="">Categories</option>
              <option value="">Categories</option>
              <option value="">Categories</option>
            </select>
            <div>
              <button>
                <BiSearch />
              </button>
            </div>
          </form>
        </div>
        <div className="Cantact">
         <Link to={"/Cart"}> <LuShoppingBag onClick={() => setCartshop(!cartshop)} className="icon" /></Link>
          <LuBellRing className="icon" />
          <FaRegUser className="icon" />
          <Link to={"/Heart"}><FaRegHeart className="icon" /></Link>
          {/* <FaHeart  /> */}
        </div>
        <div className="bars" onClick={() => setBarsclick(!barsclcik)}>
          <HiMiniBars3 />
        </div>
        <div className={barsclcik ? "barscart" : "barscart active"}>
        <div className="Cantact">
          <LuShoppingBag onClick={() => setCartshop(!cartshop)} className="icon" />
          <LuBellRing className="icon" />
          <FaRegUser className="icon" />
        </div>
          <ul>
            <li>HOME</li>
            <li>SHOP</li>
            <li>BLOG</li>
            <li>ABOUT</li>
            <li>CONTACT US</li>
          </ul>
        </div>
      </nav>
      <div className="media-search">
        <div className="Search">
          <form action="#">
            <input type="text" placeholder="Search here" />
            <div>
              <button>
                <BiSearch />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
