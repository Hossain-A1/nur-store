import { createContext, useContext, useReducer } from "react";
import cartReducer from "../hooks/useCartReducer"

const initialState = {
  cart:[],
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

  return(
    <CartContext.Provider value={{...state,handleCart,removeCart}}>
{children}
    </CartContext.Provider>
  )
}


export const useCartContext=()=>{

  return useContext(CartContext)
}
