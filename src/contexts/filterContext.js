import { useContext, createContext, useReducer, useEffect } from "react";

import { useProductsContexts } from "./productContext";

import filterReducer from "../hooks/useFilterProduct";

const initialState = {
  filter_products: [],
  all_products: [],
  grid_view: true,
  sort_options: "highest",
  filter_search: {
    text: "",
    category: "all",
    company: "all",
    color: "all",
    maxPrice: 0,
    price: 0,
    minPrice: 0,
  },
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
    let userValue = e.target.value;
    return dispatch({ type: "SORT_OPTION_ITEM", payload: userValue });
  };

  const handleSearchValue = (e) => {
    let name = e.target.name;
    let valueUser = e.target.value;

    return dispatch({ type: "USER_SEARCH", payload: { name, valueUser } });
  };
  // clear all filters
  const handleClearFilters = () => {
    dispatch({ type: "CLEAR_FILTERS" });
  };
  // sort THE PRODUCTS
  useEffect(() => {
    dispatch({ type: "FILTER_SHOWING" });
    dispatch({ type: "SORT_PRODUCTS" });
  }, [products, state.sort_options, state.filter_search]);

  // FILTER PRODUCTS
  useEffect(() => {
    dispatch({ type: "ALL_FILTER_PRODUCTS", payload: products });
  }, [products]);

  return (
    <FilterContext.Provider
      value={{
        ...state,
        handleGridView,
        handleListView,
        handleSort,
        handleSearchValue,
        handleClearFilters,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
