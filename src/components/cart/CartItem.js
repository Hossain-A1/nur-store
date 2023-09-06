import React, { useState } from "react";
import { PriceFormatter } from "../../helpers/PriceFromatter";
import CartAmount from "../CartAmount";
import { FaTrash } from "react-icons/fa";
import { useCartContext } from "../../contexts/cartContext";

const CartItem = ({ id, name, stock, color, image, price }) => {

  const {removeCart} = useCartContext()

  let [amount, setAmount] = useState(1);

  const setDecrease = () => {
    amount >= 1
      ? setAmount((curAmount) => (curAmount = amount--))
      : setAmount(1);
  };
  const setIncrease = () => {
    amount <= stock
      ? setAmount((curAmount) => (curAmount = amount++))
      : setAmount(stock);
  };
  return (
    <div className='cart-details grid grid-cols-5 gap-5 place-items-center  mt-5 '>
      {/* items */}
      <div className='col-span-1 gap-2 w-full   '>
      <div className="flex gap-2 ">
      <figure className='image w-20 h-16'>
          <img src={image} alt={name} className='w-full h-full object-contain' />
        </figure>

        <div className='flex flex-col gap-1 items-start'>
          <p className="text-sm">{name}</p>
          <div className='flex items-center justify-center'>
            <span className='text-sm'>Color: </span>
            <div
              className='rounded-full w-5 h-5 flex  items-center ml-4 cursor-pointer opacity-70 hover:opacity-100 duration-300 active-color'
              style={{ backgroundColor: color, color }}
            ></div>
          </div>
        </div>
      </div>
      </div>
{/* price */}
      <div className='price col-span-1'>
        <span>
          <PriceFormatter price={price} />
        </span>
      </div>
{/* quantity */}
      <div className='qty col-span-1'>
   <div>
   <CartAmount 
          amount={amount}
          setDecrease={setDecrease}
          setIncrease={setIncrease}
        />
   </div>
      </div>
{/* subtotal */}
      <div className='subtotal col-span-1'>
        <p><PriceFormatter price={price * amount}/></p>
      </div>
      {/* remove */}
      <div className='remove col-span-1'>
        <FaTrash className="text-rose-700 cursor-pointer" onClick={()=> removeCart(id)}/>
      </div>
    </div>
  );
};

export default CartItem;
