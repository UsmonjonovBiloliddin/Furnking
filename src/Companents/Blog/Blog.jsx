import React from 'react'
import "./Blog.scss"
import Welcome from '../../Pages/Welcome/Welcome'
import Pag from '../../Pages/Pag/Pag'

import { TbInfoTriangleFilled } from "react-icons/tb";

const Blog = () => {
  return (
    <div >
      <Pag />
      <div className="Blog">
      <h1>Authority not found </h1><TbInfoTriangleFilled className='No' />

      </div>
    </div>
  )
}

export default Blog