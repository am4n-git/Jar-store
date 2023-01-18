import React from "react";
import { useParams } from "react-router-dom";
import { useProducts } from "../Context/product-data-context";
function ProductDetail() {
  const { productId } = useParams();
  const { products } = useProducts();
  const product = products.find((item) => item._id === productId);
  return (
    <div>
      ProductDetails- <br /> {product.name} ₹{product.price} <br />
      <img src={product.image} alt="" />
    </div>
  );
}

export default ProductDetail;
