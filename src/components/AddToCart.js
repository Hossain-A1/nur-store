import { useState } from "react";
import { FaCheck } from "react-icons/fa";

import CartAmount from "./CartAmount";
import Button from "./Button";
import { useCartContext } from "../contexts/cartContext";


const AddToCart = ({ product }) => {
  const {handleCart} = useCartContext()
  const { id, colors, stock ,price} = product;
  const [color, setColor] = useState(colors[0]);

  let [amount, setAmount] = useState(1);
  
  const setDecrease = () => {
    amount > 1
      ? setAmount((curAmount) => (curAmount = amount--))
      : setAmount(1);
  };
  const setIncrease = () => {
    amount < stock
      ? setAmount((curAmount) => (curAmount = amount++))
      : setAmount(stock);
  };

  return (
    <div>
      <div className='colors py-3'>
        <p className='flex gap-2 items-center'>
          Colors:
          {colors.map((el, i) => (
            <button
              key={i}
              style={{ backgroundColor: el }}
              className={` ${
                color === el
                  ? "rounded-full w-5 h-5 flex  items-center ml-4 cursor-pointer opacity-70 hover:opacity-100 duration-300 active-color"
                  : "rounded-full w-5 h-5 flex  items-center ml-4 cursor-pointer opacity-70 hover:opacity-100 duration-300"
              }  `}
              onClick={() => setColor(el)}
            >
              {" "}
              {color === el ? (
                <FaCheck className='text-slate-200 text-sm' />
              ) : null}{" "}
            </button>
          ))}
        </p>
      </div>
      {/* add to cart */}
      <div className='add-to-cart'>
        <CartAmount
          amount={amount}
          setDecrease={setDecrease}
          setIncrease={setIncrease}
        />
      </div>
<div className="mt-5">
<Button  to='/cart' color='violet_btn' placeholder='Add to cart' onClick={()=>handleCart(id,color,amount,product,price)} />

</div>
    </div>
  );
};

export default AddToCart;
