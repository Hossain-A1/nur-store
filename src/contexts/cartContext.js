import { createContext, useContext, useEffect, useReducer } from "react";
import cartReducer from "../hooks/useCartReducer"
const getCartData =()=>{
  const cartData = localStorage.getItem("cart")
  if (cartData === []) {
    return []
  } else {
  return  JSON.parse(cartData)
  }

}


const initialState = {
  cart:getCartData(),
  total_item:"",
  total_amount:'',
  shipping_free:50
}

const CartContext = createContext()


export const CartContextProvider = ({children})=>{

  const [state,dispatch]=useReducer(cartReducer,initialState)

  const handleCart =(id,color,amount,product,stock,price)=>{
    return dispatch({type:"ADD_TO_CART",payload:{id,color,amount,product,stock,price}})
  }

const removeCart = (id)=>{
  return dispatch({type:"REMOVE_CART",payload:id})
}

// invoke data in localStorage
useEffect(()=>{
  localStorage.setItem("cart",JSON.stringify(state.cart))
},[state.cart])

  return(
    <CartContext.Provider value={{...state,handleCart,removeCart}}>
{children}
    </CartContext.Provider>
  )
}


export const useCartContext=()=>{

  return useContext(CartContext)
}
