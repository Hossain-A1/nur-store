import { useContext, createContext, useReducer, useEffect } from "react";

import { useProductsContexts } from "./productContext";

import filterReducer from "../hooks/useFilterProduct";

const initialState = {
  filter_products: [],
  all_products: [],
  grid_view:true
};

const FilterContext = createContext();

export const FilterContextProvider = ({ children }) => {
  const { products } = useProductsContexts();

  const [state, dispatch] = useReducer(filterReducer, initialState);

  // grid view

  const handleGridView = ()=>{
    return dispatch({type:"SEE_GRID_VIEW"})
  }

  useEffect(() => {
    dispatch({ type: "FILTER_PRODUCTS", payload: products });
  }, [products]);

  return (
    <FilterContext.Provider value={{ ...state ,handleGridView}}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
