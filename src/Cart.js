import React from 'react'
import { useCartContext } from './contexts/cartContext';

const CartPage = () => {
  const {cart} = useCartContext()
  console.log(cart);
  return (
    <main className='wrapper section-p min-h-screen'>
      <div className='grid grid-cols-5 gap-5'>
        <p>items</p>
        <p>price</p>
        <p>quantity</p>
        <p>price</p>
        <p>subtotal</p>
        <span>remove</span>
      </div>
      <hr className='border-slate-500'/>

    <div className="cart-details">

      
    </div>
    </main>
  )
}

export default CartPage