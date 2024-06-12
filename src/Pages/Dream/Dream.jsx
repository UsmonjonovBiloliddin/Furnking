import React, { useState } from "react";
import "./Dream.scss";
const Dream = () => {
  const [asosiy, setAsosiy] = useState("https://images.uzum.uz/cgmovi7hj8j9g69c48kg/original.jpg");

  const [one, setOne] = useState("https://srcyrl.tqapparel.com/uploads/202217029/santa-claus-cosplay-girls-dress-costume24074903740.jpg");
  const [two, setTwo] = useState("https://olcha.uz/image/600x600/products/supplier/stores/1/2023-05-01/gXeH8N6w3ryJFGeNjVff0DD7FLKxLE2j6pThi8Hg51ySnJHg80ojHoDwfbCe.jpg");
  const [three, setThree] = useState("https://images.uzum.uz/cgmovi7hj8j9g69c48kg/original.jpg");

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
