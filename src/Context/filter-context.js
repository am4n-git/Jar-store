import { createContext, useContext, useReducer } from "react";
import { useState } from "react";
import { useProducts } from "../Context/product-data-context";

const FilterContext = createContext({});

const FilterProvider = ({ children, value }) => {
  const [sortedProduct, setSortedProducts] = useState([]);
  const { products, setProducts } = useProducts();

  function handleSort(products, action) {
    switch (action.type) {
      case "High_To_Low":
        [...products].sort((a, b) => {
          return b.price - a.price;
        });
        break;
      case "Low_To_High":
        [...products].sort((a, b) => {
          return a.price - b.price;
        });
        break;
      default:
        return;
    }
  }
};
