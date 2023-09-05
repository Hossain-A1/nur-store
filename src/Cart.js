import React from 'react'
import { useCartContext } from './contexts/cartContext';
import CartItem from './components/cart/CartItem';

const CartPage = () => {
  const {cart} = useCartContext()
  console.log(cart);
  return (
    <main className='wrapper section-p min-h-screen'>
      <div className='grid grid-cols-5 gap-5 place-items-center text-lg font-semibold capitalize'>
        <p>{cart.length <= 1? "item":"items"}</p>
        <p>price</p>
        <p>quantity</p>
        <p>subtotal</p>
        <span>remove</span>
      </div>
      <hr className='border-slate-500'/>

    <div className="">
{
  cart.map((el)=>(
    <CartItem key={el.id} {...el}/>
  ))
}
      
    </div>
    </main>
  )
}

export default CartPage