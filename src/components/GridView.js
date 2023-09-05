import React from 'react'
import Product from './Product';

const GridView = ({products}) => {
  
  return (
    <section className='wrapper section-p'>
<div className=" grid grid-cols-3 gap-10">
{
products &&  products.map((curEle)=>(
    <Product key={curEle.id} {...curEle} />
  ))
}
</div>
    </section>
  )
}

export default GridView