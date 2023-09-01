import { useContext, createContext, useReducer, useEffect } from "react";

import { useProductsContexts } from "./productContext";

import filterReducer from "../hooks/useFilterProduct";

const initialState = {
  filter_products: [],
  all_products: [],
  grid_view: true,
  sort_options: "highest",
};

const FilterContext = createContext();

export const FilterContextProvider = ({ children }) => {
  const { products } = useProductsContexts();

  const [state, dispatch] = useReducer(filterReducer, initialState);

  // grid view

  const handleGridView = () => {
    return dispatch({ type: "SEE_GRID_VIEW" });
  };
  const handleListView = () => {
    return dispatch({ type: "SEE_LIST_VIEW" });
  };

  // sort functionality
  const handleSort = (e) => {
    let userValue = e.target.value
    dispatch({ type: "SORT_OPTION_ITEM",payload:userValue });
  };

  // sort THE PRODUCTS
  useEffect(() => {
    dispatch({ type: "SORT_PRODUCTS"});
  }, [state.sort_options]);

  // FILTER PRODUCTS
  useEffect(() => {
    dispatch({ type: "FILTER_PRODUCTS", payload: products });
  }, [products]);

  return (
    <FilterContext.Provider
      value={{ ...state, handleGridView, handleListView, handleSort }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
