import React from 'react'
import Button from './Button';

const SectionTitle = ({p,title,intro}) => {
  return (
    <div className='hero-data '>
    <p className='text-violet-400'> 
      {p}
    </p>
    <h1 className='text-2xl font-semibold capitalize mb-2'>{title}</h1>
    <p className=''>
     {intro}
    </p>
<p className='mt-5'>
<Button href="/products" color="violet_btn" placeholder="Shop now"/>

</p>
  </div>
  )
}

export default SectionTitle