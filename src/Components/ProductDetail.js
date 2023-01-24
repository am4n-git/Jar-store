import * as Mui from "@mui/material";

import React from "react";
import { useParams } from "react-router-dom";
import { useProducts } from "../Context/product-data-context";
function ProductDetail() {
  const { productId } = useParams();
  const { products } = useProducts();
  const product = products.find((item) => item._id === productId);
  return (
    <Mui.Container sx={{ height: "100vh", marginTop: 5, marginLeft: 0 }}>
      <img src={product.image} alt={product.name} />
      <Mui.Typography>{product.name}</Mui.Typography>
      <Mui.Typography>{product.price}</Mui.Typography>
    </Mui.Container>
  );
}

export default ProductDetail;
