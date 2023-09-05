import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { AppProvider } from "./contexts/productContext";
import { FilterContextProvider } from "./contexts/filterContext";
import { CartContextProvider } from "./contexts/cartContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppProvider>
      <FilterContextProvider>
        <CartContextProvider>
          <App />
        </CartContextProvider>
      </FilterContextProvider>
    </AppProvider>
  </React.StrictMode>
);
