import React from 'react'
import "./Brend.scss"


import { TbTruckDelivery } from "react-icons/tb";
import { ImGift } from "react-icons/im";
import { IoWalletOutline } from "react-icons/io5";
import { IoMdMicrophone } from "react-icons/io";
const Brend = () => {
  return (
    <div className='Brend'>
        <div className="boxes">
            <div className="box">
                <div className="i">
                <TbTruckDelivery className='car' />
                </div>
                <div className="text">
                <h3>Free Shipping</h3>
                <p>Orders over $100</p>
                </div>
            </div>

            <div className="box">
                <div className="i">
                <ImGift />
                </div>
                <div className="text">
                <h3>Smart Gift Card</h3>
                <p>Buy $1000 to get card</p>
                </div>
            </div>

            <div className="box">
                <div className="i">
                <IoWalletOutline />
                </div>
                <div className="text">
                <h3>Quick Payment</h3>
                <p>100% secure payment</p>
                </div>
            </div>

            <div className="box">
                <div className="i">
                <IoMdMicrophone />
                </div>
                <div className="text">
                <h3>24/7 Support</h3>
                <p>Quick support</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Brend