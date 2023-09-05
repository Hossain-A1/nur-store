import {FaMinus,FaPlus} from "react-icons/fa"
const CartAmount = ({amount,setDecrease,setIncrease}) => {

  return (
 
<div className="amount-toggle flex items-center justify-start gap-5"> 

<button onClick={()=> setDecrease()}>
  <FaMinus/>
</button>
<span className="font-semibold">{amount}</span>
<button onClick={()=> setIncrease()}>
  <FaPlus/>
</button>
</div>
   
  )
}

export default CartAmount