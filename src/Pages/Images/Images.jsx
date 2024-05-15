import React from 'react'
import "./Images.scss"

import { FaArrowRight } from "react-icons/fa6";
const Images = () => {
  return (
    <div className='Images'>
        <div className="boxes">
            <div className="box big">
                <div className="text">
                    <h1>Modern Furniture Collections</h1>
                    <p className='price'>Starting from <span>$500</span></p>
                    <p className='icon'>Read more <FaArrowRight /></p>
                </div>
            </div>
           <div className="boxm">
           <div className="box1">
           <div className="text">
                    <h1>Modern Furniture Collections</h1>
                    <p className='price'>Starting from <span>$500</span></p>
                    <p className='icon'>Read more <FaArrowRight /></p>
                </div>
           </div>
            <div className="box2">
            <div className="text">
                    <h1>Modern Furniture Collections</h1>
                    <p className='price'>Starting from <span>$500</span></p>
                    <p className='icon'>Read more <FaArrowRight /></p>
                </div>
            </div>
           </div>
        </div>
    </div>
  )
}

export default Images