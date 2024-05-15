import React from "react";
import "./Heart.scss";

import { FaHeart } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import Error from "../Eror/Eror"
import { Link } from "react-router-dom";
const Heart = ({ heartid, setHeartid }) => {
  
    if(!heartid.length) return(<Error />)
  

  const deleteheart = (id) => {
    setHeartid(
      heartid.filter((item) => {
        return item.id !== id;
      })
    );
  };
  return (
    <div className="Heart">
       <div className="link">
        <Link to={"/"}>
          <h4>Back</h4>
        </Link>
      </div>
      <div className="boxes">
     
        {heartid &&
          heartid.map((item) => {
            return (
              <div className="box" key={item.id}>
                <div className="img">
                  <img src={item.img} alt="" />
                </div>
                <div className="np">
                  <h2>{item.name}</h2>
                  <h3>{item.price}</h3>
                </div>
                <div className="heart">
                </div>
                <div className="body">
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Tempora, ullam!
                  </p>
                </div>
                <div className="delete">
                <FaHeart />
                  <FaTrash className="trash" onClick={() => deleteheart(item.id)} />
                </div>
              </div>
            );
          })}
      </div>
      
    </div>
  );
};

export default Heart;
