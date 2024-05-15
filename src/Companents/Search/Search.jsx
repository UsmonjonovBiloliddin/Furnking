import React, { useEffect, useState } from 'react'
import "./Search.scss"
import Trending from '../../Pages/Trending/Trending'

import { FaRegStar } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { TbShoppingBagPlus } from "react-icons/tb";
import { GrPowerReset } from "react-icons/gr";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { MdRadioButtonChecked } from "react-icons/md";
import { Link } from 'react-router-dom';
const Search = ({searchinfo , setPraductid  , praductid ,setHeartid, heartid}) => {

    
  const [data, setData] = useState("");

  const getApi = async () => {
    const request = await fetch("http://localhost:3000/Search");
    const info = await request.json();
    setData(info);
};
  useEffect(() => {
    getApi();
  }, []);

  // const [qoshildi , setQoshildi] = useState(false)

  const setAddcart = (id) =>{
    const obj = data.filter(item => {
      return item.id === id
    })

    setPraductid([...praductid , obj[0]])
   
  }
  const [love, setLove] = useState([]);

  const handleLove = (id) => {
    const obj = data.filter((info) => {
      return info.id === id;
    });
    setLove(id)
    setHeartid([...heartid, obj[0]]);
  };

  return (
    <div className='Search'>
        <div className="eslatma">
          <div className="box">
          {/* {qoshildi ? "box active" : "box"} */}
          <p>qoshildi</p>
          </div>
        </div>
        <div className="boxes">
  

        {data && data.filter(item => {
         return  item.name.toLowerCase().trim().includes(searchinfo.toLowerCase().trim())
        }).map((item) => {
      return (
        <div className="box" key={item.id}>
          <div className="chegirma">New</div>
          <div className="hover">
            <div className="block">
              <div className="radio">
              <FaHeart
                      className={item.id === love ? "Hearte color" : "Hearte" }
                        onClick={() => handleLove( item.id)}
                      />
              </div>

              <div className="radio">
                <TbShoppingBagPlus onClick={() => setAddcart(item.id)} />
              </div>

              <div className="radio">
                <GrPowerReset />
              </div>

              <div className="radio">
                <Link to={`/Boxinfo/${item.id}`}>
                <MdOutlineRemoveRedEye />
                </Link>
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
    </div>
  )
}

export default Search