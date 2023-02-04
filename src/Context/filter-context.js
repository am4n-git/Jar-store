import { createContext, useContext, useReducer } from "react";
import { useState } from "react";
import { useProducts } from "../Context/product-data-context";

const FilterContext = createContext({});

const FilterProvider = ({ children, value }) => {
  const { products, setProducts } = useProducts();
  const [filterSelected, setFilterSelected] = useState("");
  function sortHandler(prod, action) {
    switch (action.type) {
      case "High_To_Low":
        setFilterSelected("High to Low");
        setProducts(
          [...products].sort((a, b) => {
            return b.price - a.price;
          })
        );
        // setProducts(...sortedProduct);
        break;
      case "Low_To_High":
        setFilterSelected("Low to High");
        setProducts(
          [...products].sort((a, b) => {
            return a.price - b.price;
          })
        );
        break;
      default:
        window.location.reload(true);
    }
  }

  const [filter, filterDispatch] = useReducer(sortHandler, {});
  return (
    <FilterContext.Provider value={{ filter, filterDispatch, filterSelected }}>
      {children}
    </FilterContext.Provider>
  );
};

const useFilter = () => useContext(FilterContext);
export { useFilter, FilterProvider };
