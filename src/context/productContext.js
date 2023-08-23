import axios from "axios";
import productsReducer from "../hooks/useProduct";

const { createContext, useContext, useEffect, useReducer } = require("react");

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  featureProducts: {},
};
const AppContext = createContext();
const API = "https://api.pujakaitem.com/api/products";

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productsReducer, initialState);

  useEffect(() => {
    const getAllProduct = async (url) => {
      try {
        const res = await axios.get(url);

        const products = await res.data;
        dispatch({ type: "GET_DATA", payload: products });
      } catch (error) {
        dispatch({ type: "GET_ERROR" });
      }
    };
    getAllProduct(API);
  }, []);

  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  );
};

// custom hooks

const useProductsContexts = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useProductsContexts };
