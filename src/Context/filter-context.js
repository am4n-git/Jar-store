import { createContext, useContext, useReducer } from "react";
import { useState } from "react";
import { useProducts } from "../Context/product-data-context";

const FilterContext = createContext({});

const FilterProvider = ({ children, value }) => {
  const [sortedProduct, setSortedProducts] = useState([]);
  const { products, setProducts } = useProducts();
  function sortHandler(prod, action) {
    switch (action.type) {
      case "High_To_Low":
        setProducts(
          [...products].sort((a, b) => {
            return b.price - a.price;
          })
        );
        // setProducts(...sortedProduct);
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

  const [filter, filterDispatch] = useReducer(sortHandler, {});
  return (
    <FilterContext.Provider value={{ filter, filterDispatch }}>
      {children}
    </FilterContext.Provider>
  );
};

const useFilter = () => useContext(FilterContext);
export { useFilter, FilterProvider };
