// import React, { useEffect, useState } from "react";
// import "./Boxinfo.scss";
// import { Link, useParams } from "react-router-dom";
// const Boxinfo = () => {
//   const { id } = useParams();

//   const [data, setData] = useState("");

//   const getApi = async () => {
//     const request = await fetch(`http://localhost:3000/Search/${id}`);
//     const info = await request.json();
//     setData(info);
// };
//   useEffect(() => {
//     getApi();
//   }, []);

//   return (
//     <div className="Boxinfo">
//       <div className="box">
//        <Link to={"/"}> <div className="back">
//         <p className="">Back</p>

//         </div>
//         </Link>
//         <div className="img">
//           <img src={data.img} alt="" />
//         </div>
//         <div className="data">
//           <h1>{data.name}</h1>
//           <div className="info">
//           <p>
//            a  Dignissimos aperiam rem quos beatae soluta expedita, nobis laborum
//             veniam ratione tempore qui modi, quidem architecto a quia quisquam?
//             Ipsa, voluptate eum?expedita, nobis laborum
//             veniam ratione tempore qui modi, quidem architecto a quia quisquam?
//             Ipsa, voluptate eum?
//           </p>



//           <p>
//             Lorem ipsum dolor, sit amet consectetur adipisicing elit.
//             Dignissimos aperiam rem quos beatae soluta expedita, nobis laborum
//             veniam ratione tempore qui modi, quidem architecto a quia quisquam?
//             Ipsa, voluptate eum?
//           </p>

//           <p>
//             Lorem ipsum dolor, sit amet consectetur adipisicing elit.
//             Dignissimos aperiam rem quos beatae soluta expedita, nobis laborum
//             veniam ratione tempore qui modi, quidem architecto a quia quisquam?
//             Ipsa, voluptate eum?
//           </p>
//           </div>
//         </div>
//       </div>

     
//     </div>
//   );
// };

// export default Boxinfo;
