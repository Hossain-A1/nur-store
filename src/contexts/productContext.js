import axios from "axios";
import productsReducer from "../hooks/useProduct";

import { useContext, createContext, useReducer, useEffect } from "react";

const initialState = {
  isLoading: false,
  isSingleLoading: false,
  isError: false,
  products: [],
  featureProducts: [],
  singleProduct: {},
};
const AppContext = createContext();
const API = "https://api.pujakaitem.com/api/products";

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productsReducer, initialState);

  const getAllProduct = async (url) => {
    try {
      const res = await axios.get(url);
      const products = await res.data;
      dispatch({ type: "GET_DATA", payload: products });
    } catch (error) {
      dispatch({ type: "GET_ERROR" });
    }
  };
  //==================== single products=======================//
  const getSingleProduct = async (url) => {
    dispatch({ type: "SINGLE_LOADING" });
    try {
      const res = await axios.get(url);
      const singleProduct = await res.data;
      dispatch({ type: "SINGLE_DATA", payload: singleProduct });
    } catch (error) {
      dispatch({ type: "SINGLE_ERROR" });
    }
  };

  useEffect(() => {
    getAllProduct(API);
  }, []);

  return (
    <AppContext.Provider value={{ ...state, getSingleProduct }}>
      {children}
    </AppContext.Provider>
  );
};

// custom hooks

const useProductsContexts = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useProductsContexts };
