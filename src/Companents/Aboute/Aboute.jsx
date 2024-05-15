import React from 'react'
import "./Aboute.scss"
import Welcome from '../../Pages/Welcome/Welcome'
import Pag from '../../Pages/Pag/Pag'

import { TbInfoTriangleFilled } from "react-icons/tb";
const Aboute = () => {
  return (
    <div >
      <Pag />
      <div className="Aboute">
      <h1>Authority not found </h1><TbInfoTriangleFilled className='No' />

      </div>
    </div>
  )
}

export default Aboute