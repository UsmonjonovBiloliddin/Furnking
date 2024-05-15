import React, { useState } from 'react'

import "./Special.scss"
const Special = () => {

    const [sec , setSec] = useState(7)
    const [min ,setMin] = useState(30)
    const [hrs ,setHrs] = useState(15)
    const [days ,setDays] = useState(10)

   
   

  return (
    <div className='Special'>
        <div className="text">
            <h1>SPECIAL OFFER   </h1>
        </div>
        <div className="boxes">
            <div className="box">
            <div className="chegirma"><p>50% off</p></div>

                <div className="textt">
                    <h3>Living Room Furniture</h3>
                    <p>You don't have a chair. Are you ready for growth? Shop with us 40% discount!</p>

                    <div className="price">
                        <div className="narx p">$150</div>
                        <div className="del p">$250</div>
                        <button>SHOP NOW</button>
                    </div>

                    <div className="time">
                            <div className="days v">10 </div>
                            <div className="hrs v">15</div>
                            <div className="min v">30</div>
                            <div className="sec v">55</div>
                        </div>
                </div>
                
                <img src="./img/Offer1.png" alt="" />

            </div>
            <div className="box">
                <div className="chegirma"><p>50% off</p></div>

            <div className="textt">
                    <h3>Living Room Furniture</h3>
                    <p>You don't have a chair. Are you ready for growth? Shop with us 40% discount!</p>

                    <div className="price">
                        <div className="narx p">$150</div>
                        <div className="del p">$250</div>
                        <button>SHOP NOW</button>
                    </div>

                    <div className="time">
                            <div className="days v">{days}</div>
                            <div className="hrs v">{hrs}</div>
                            <div className="min v">{min}</div>
                            <div className="sec v">{sec}</div>
                        </div>
                </div>
            <img src="./img/Offer2.png" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Special