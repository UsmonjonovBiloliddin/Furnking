import React, { useState } from "react";
import "./Dream.scss";
const Dream = () => {
  const [asosiy, setAsosiy] = useState("../../../img/katta.png");

  const [one, setOne] = useState("data:image/jpeg;base64,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");
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
