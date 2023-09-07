import React from "react";
import { useCartContext } from "./contexts/cartContext";
import CartItem from "./components/cart/CartItem";
import Button from "./components/Button";

const CartPage = () => {
  const { cart, handleClearCart } = useCartContext();

  if(cart.length ===0){
    return <p className="text-xl capitalize font-semibold flex flex-col items-center">Add some items to your cart to get shopping!</p>
  }
  return (
    <main className='wrapper section-p min-h-screen'>
      <div className='grid grid-cols-5 gap-5 place-items-center text-lg font-semibold capitalize'>
        <p>{cart.length <= 1 ? "item" : "items"}</p>
        <p>price</p>
        <p>quantity</p>
        <p>subtotal</p>
        <span>remove</span>
      </div>
      <hr className='border-slate-500' />

      <div className='cart-items'>
        {cart.map((el) => (
          <CartItem key={el.id} {...el} />
        ))}
      </div>
      <hr className='border-slate-500' />

      <div className='clear-cart-items flex justify-between py-10'>
        <Button to='/products' color='teal' placeholder='Shop now' />
        <Button
          color='orng'
          placeholder='Clear cart'
          onClick={handleClearCart}
        />
      </div>
    </main>
  );
};

export default CartPage;
