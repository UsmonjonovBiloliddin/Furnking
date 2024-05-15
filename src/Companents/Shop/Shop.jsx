import React from 'react'
import "./Shop.scss"
import Pag from '../../Pages/Pag/Pag'
import Welcome from '../../Pages/Welcome/Welcome'

import { TbInfoTriangleFilled } from "react-icons/tb";
const Shop = () => {
  return (
    <div>
      <Pag />

      <div className="Shop">
        <h1>Authority not found </h1><TbInfoTriangleFilled className='No' />
      </div>
    </div>
  )
}

export default Shop