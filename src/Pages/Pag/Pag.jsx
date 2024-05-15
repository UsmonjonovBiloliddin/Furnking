import React, { useState } from "react";
import { BiMenuAltLeft } from "react-icons/bi";

import "./Pag.scss";
import { NavLink } from "react-router-dom";

const Pag = ({cartshop , setCartshop}) => {
  const [textactive , setTeaxtactive] = useState(false);
  return (
    <div className="Pag">
      <div className="button">
        <button onClick={() => setTeaxtactive(!textactive)}>
          <BiMenuAltLeft className="menu" />
          ALL COLLECTIONS
        </button>

        <div className={textactive ? "text " : "text active"}>

          <div className="n">
            <div className="m"></div>
            {" "}
            <p>All</p>
          </div>
          <hr />
          <div className="n">
          <div className="m"></div>
            {" "}
            <p>New Arrivals</p>
          </div>
          <hr />
          <div className="n">
          <div className="m"></div>
            {" "}
            <p>Hot Sale</p>
          </div>
          <hr />
          <div className="n">
          <div className="m"></div>
            {" "}
            <p>Furniture</p>
          </div>
          <hr />
          <div className="n">
          <div className="m"></div>
            {" "}
            <p>Amrature</p>
          </div>
          <hr />
          <div className="n">
          <div className="m"></div>
            {" "}
            <p>Tabble</p>
          </div>
          <hr />
          <div className="n">
          <div className="m"></div>
            {" "}
            <p>Chair</p>
          </div>
          <hr />
          <div className="n">
          <div className="m"></div>
            {" "}
            <p>Sofa</p>
          </div>
          <hr />
          <div className="n">
          <div className="m"></div>
            {" "}
            <p>Mirrors</p>
          </div>
          <hr />
          <div className="n">
          <div className="m"></div>
            {" "}
            <p>Stools</p>
          </div>
          <hr />
          <div className="n">
          <div className="m"></div>
            {" "}
            <p>Benches</p>
          </div>
        </div>
      </div>

      <ul>
        <NavLink to={"/"}> <li>HOME</li></NavLink>
        <NavLink to={"/Shop"}><li>SHOP</li></NavLink>
        <NavLink to={"/Blog"}><li>BLOG</li></NavLink>
        <NavLink to={"/Aboute"}><li>ABOUT</li></NavLink>
        <NavLink to={"/Cantact"}><li>CONTACT US</li></NavLink>
      </ul>



    </div>



  );
};

export default Pag;
