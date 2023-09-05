import { createContext, useContext, useReducer } from "react";
import cartReducer from "../hooks/useCartReducer"

const initialState = {
  cart:[],
}

const CartContext = createContext()


export const CartContextProvider = ({children})=>{

  const [state,dispatch]=useReducer(cartReducer,initialState)

  const handleCart =(id,color,amount,product)=>{
    return dispatch({type:"ADD_TO_CART",payload:{id,color,amount,product}})
  }

  return(
    <CartContext.Provider value={{...state,handleCart}}>
{children}
    </CartContext.Provider>
  )
}


export const useCartContext=()=>{

  return useContext(CartContext)
}
