import React, { useState } from "react";
import { useProducts } from "../Context/product-data-context";
function valuetext(value) {
  return `${value}`;
}

function Filter() {
  const { products, setProducts } = useProducts();

  return <div></div>;
}

export default Filter;
