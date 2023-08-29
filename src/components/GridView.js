import React from 'react'
import Product from './Product';

const GridView = ({products}) => {
  console.log(products);
  return (
    <section>
<div className="wrapper grid grid-cols-3">
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