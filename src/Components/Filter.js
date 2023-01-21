import React, { useState } from "react";
import Slider from "@mui/material/Slider";
import { useProducts } from "../Context/product-data-context";
function valuetext(value) {
  return `${value}`;
}

function Filter() {
  // const { products, setProducts, loading, showError, errorMsg } = useProducts();
  const [value, setValue] = useState([20, 37]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  //   setProducts((products) => products.sort((a, b) => b.price - a.price));
  return (
    <div>
      <Slider
        getAriaLabel={() => "Temperature range"}
        value={value}
        onChange={handleChange}
        min={0}
        max={50000}
        step={100}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        sx={{ width: "20rem", pt: 10 }}
      />
    </div>
  );
}

export default Filter;
