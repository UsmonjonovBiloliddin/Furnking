import React, { useState } from "react";
import "./Dream.scss";
const Dream = () => {
  const [asosiy, setAsosiy] = useState("../../../img/katta.png");

  const [one, setOne] = useState("https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRGV4rebsOOYwwTNcxGKtpsiDMPsXbJPD5kB2zAHiLo3LCpTGRlteMwr8SQ_jlQByWkE8JGTyms6FVm0xUZ2akEVyx5cph1QNKCs5orpal9KDDXlaYMVrFjA5_PJI4KCMRhnHUB45jR-Ww&usqp=CAc");
  const [two, setTwo] = useState("https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTC1HIE5qKgsmfztmizq8jbg4T7IG9r25LMuTrR7yxpxwrBgld7tDMkYt2S-cYXiouq5jn_sQnKvznumDJFvBep1UWTf9AHyQ26zeXMWabuRVkW_xO8xx6VKcyTTK_EOnZG0IfBHXI&usqp=CAc");
  const [three, setThree] = useState("https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQu-gPuLBeAQOonX_Ugh8XBmtQnsZUuvI1mXJy9f-vBCZjnEdjMjx3AbAZHRp3Z0zidomo5voZHOd3q0-zNChN1tFs9l1LGFlq5IM7zf16NcVjokGgDaoaxFkgj30jSogfMg8wdHA&usqp=CAc");

  return (
    <div className="Dream">
      <div className="block">
        <div className="text">
          <p className="top">TOP COLLECTIONS 2022</p>
          <h1>We Serve Your Dream Furniture</h1>
          <p className="p">Get 50% off all products</p>

          <button>SHOP NOW</button>
        </div>
        <div className="imeg">
          <div className="head">
            <img src={asosiy} alt="" />
          </div>
          <div className="uchlik">
            <div className="one box">
              <img
                onClick={() => setAsosiy(one)}
                src={one}
                alt=""
                srcset=""
              />
              <h4>$120</h4>
              <p>Office Desk Chair</p>
            </div>
            <div className="two box">
              <img
                onClick={() => setAsosiy(two)}
                src={two}
                alt=""
                srcset=""
              />
              <h4>$180</h4>
              <p>	Home Alisa Sofa</p>
            </div>
            <div className="three box">
              <img
                onClick={() => setAsosiy(three)}
                src={three}
                alt=""
                srcset=""
              />
              <h4>$250</h4>
              <p>Modern Chair</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dream;
