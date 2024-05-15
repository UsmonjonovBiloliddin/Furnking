import React, { useEffect, useState } from "react";
import "./Products.scss";
import { Link, NavLink } from "react-router-dom";

import { FaRegStar } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { TbShoppingBagPlus } from "react-icons/tb";
import { GrPowerReset } from "react-icons/gr";
import { MdOutlineRemoveRedEye } from "react-icons/md";
const Products = ({praductid , setPraductid , setHeartid, heartid}) => {
  const [data, setData] = useState("");

  const getApi = async () => {
    const request = await fetch("http://localhost:3000/Produts");
    const info = await request.json();
    setData(info);
  };
  useEffect(() => {
    getApi();
  }, []);

 


  const carttreding  = (id) => {
    const obj = data.filter(info => {
      return info.id  ===  id
    })
    setPraductid([...praductid  , obj[0]])
}

const [love, setLove] = useState([]);

const handleLove = (id) => {
  const obj = data.filter((info) => {
    return info.id === id;
  });
  setLove(id)
  setHeartid([...heartid, obj]);
};

  return (
    <div className="Products">
      <div className="select">
        <h1>OUR PRODUCTS</h1>

        <ul>
          <NavLink to={"/TopProduct"}>
            <li>All Products</li>
          </NavLink>
          <NavLink>
            <li>Best Sellers</li>
          </NavLink>
          <NavLink>
            <li>New Arrivals</li>
          </NavLink>
          <NavLink>
            <li>Todays Deals</li>
          </NavLink>
        </ul>
      </div>
      <div className="boxes">
        {data &&
          data.map((item) => {
            return (
              <div className="box" key={item.id}>
                <div className="chegirma">{item.chegirma}</div>
                <div className="hover">
                  <div className="block">
                  <div className="radio">
                      <FaHeart
                      className={item.id === love ? "Hearte color" : "Hearte" }
                        onClick={() => handleLove( item.id)}
                      />
                    </div>

                    <div className="radio">
                      <TbShoppingBagPlus onClick={() => carttreding(item.id)} />
                    </div>

                    <div className="radio">
                      <GrPowerReset />
                    </div>

                    <div className="radio">
                     <Link to={`Boxinfo/${item.id}`}> <MdOutlineRemoveRedEye /></Link>
                    </div>
                  </div>
                </div>

                <img src={item.img} alt="" />
                <p>Chair</p>
                <h3>{item.name}</h3>
                <div className="price">
                  <div className="narx">
                    <p className="p">{item.price}</p>
                    <del>
                      {" "}
                      <p className="del">{item.delprice}</p>
                    </del>
                  </div>
                  <div className="yulduz">
                    <FaRegStar className="start" />
                    <FaRegStar className="start" />
                    <FaRegStar className="start" />
                    <FaRegStar className="start" />
                    <FaRegStar className="start" />
                  </div>
                </div>
              </div>
            );
          })}
      </div>

      <div className="Next">
          <button>Next page</button>
          <p>Page</p>
          <input type="text" />
          <p>of 100</p>
          <div className="letf-right">
          
          </div>
      </div>
    </div>
  );
};

export default Products;
