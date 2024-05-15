import React from 'react'
import "./Cantact.scss"
import Welcome from '../../Pages/Welcome/Welcome'
import Pag from '../../Pages/Pag/Pag'

import { TbInfoTriangleFilled } from "react-icons/tb";
const Cantact = () => {
  return (
    <div >
      <Pag />
      <div className="CantactC">
      <h1>Authority not found </h1><TbInfoTriangleFilled className='No' />

      </div>
    </div>
  )
}

export default Cantact