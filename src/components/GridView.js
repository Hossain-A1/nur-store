import React from 'react'
import Product from './Product';

const GridView = ({products}) => {
  
  return (
    <section className='wrapper section-p'>
<div className=" grid lg:grid-cols-3 grid-cols-1 lg:gap-10 gap-2">
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