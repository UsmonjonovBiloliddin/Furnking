import React, { useEffect, useState } from "react";
import "./Cart.scss";

import { FaTrash } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Cart = ({ praductid, setPraductid }) => {
  const [total, setTotal] = useState();

  const hendlPrice = () => {
    var bir = 0;
    praductid.forEach((item) => {
      bir += item.quantity * item.price;
    });

    setTotal(bir);
  };

  const deletecart = (id) => {
    setPraductid(
      praductid.filter((item) => {
        return item.id !== id;
      })
    );
  };

  const handlchange = (item, d) => {
    let int = 1;

    praductid.forEach((data, index) => {
      if (data.id == item) {
        int = index;
      }
    });

    const tempArr = praductid;
    tempArr[int].quantity += d;

    if (tempArr[int].quantity === 0) {
      tempArr[int].quantity = 1;
    } else {
      setPraductid([...tempArr]);
    }

    hendlPrice();
  };

  const daleteAll = () => {};

  let narx = 0;

  return (
    <div className="Cart">
      <div className="link">
        <Link to={"/"}>
          <h4>Back</h4>
        </Link>
      </div>
      <main>
        <h1>Your shopping cart</h1>
        <div className="cart_box">
          <div className="top_title">
            <p>Product</p>
            <p>Quantity</p>
            <p>Total</p>
          </div>
          <div className="product_section">
            {praductid &&
              praductid.map((item) => {
                narx += Number(item.price + item.quantity);
                return (
                  <div className="box">
                    <div className="img_part">
                      <img src={item.img} alt="" />
                    </div>
                    <div className="info_part">
                      <div className="left_part">
                        <h2 className="name">{item.name}</h2>
                        <p className="description">
                          A timeless ceramic vase with a tri color grey glaze.
                        </p>
                        <p className="price">{item.price}</p>
                      </div>
                      <div className="right_part">
                        <div className="quantity_box">
                          <div
                            onClick={() => handlchange(item.id, -1)}
                            className="minus"
                          >
                            -
                          </div>
                          <p className="quantity">{item.quantity}</p>
                          <div
                            onClick={() => handlchange(item.id, +1)}
                            className="plus"
                          >
                            +
                          </div>
                        </div>

                        <p className="totalProductPrice">
                          {item.price + item.quantity}
                        </p>
                        <FaTrash
                          className="trash"
                          onClick={() => deletecart(item.id)}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
          <div className="bottom">
            <div className="subtotal">
              <h1>Subtotal</h1>
              <p className="totalPrice">${narx}</p>
            </div>
            <p>Taxes and shipping are calculated at checkout</p>
            <button className="chek" onClick={daleteAll()}>
              Go to checkout
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Cart;
