import React, { useState, useEffect } from "react";

/* ----------------Context Import----------- */
import { useProducts } from "../Context/product-data-context";
import { useFilter } from "../Context/filter-context";

/* ----------------Material UI-------------- */
import * as Mui from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import ProductGrid from "./ProductGrid";

function HomePage() {
  // Context functions
  const { products, loading, showError, errorMsg } = useProducts();
  const { filterDispatch } = useFilter();
  return (
    <div className="home-container">
      <button
        onClick={() => {
          filterDispatch({
            type: "High_To_Low",
          });
        }}
      >
        Sort HTL
      </button>
      <button
        onClick={() => {
          filterDispatch({
            type: "Low_To_High",
          });
        }}
      >
        Sort LTH
      </button>
      <button
        onClick={() => {
          filterDispatch({
            type: "Clear_All_Filter",
          });
        }}
      >
        Clear All
      </button>
      {/* Loader */}
      {loading && (
        <Backdrop
          open={true}
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      )}

      {/* Error msg when product api fails */}
      {showError ? (
        <h2>
          Something broke, try again later !! <br />
          {errorMsg}{" "}
          <Mui.Link href="/" color="#ababab">
            <RefreshIcon />
          </Mui.Link>
        </h2>
      ) : (
        ""
      )}
      {/* Product Card Component */}
      {products.map((item, index) => (
        <ProductGrid props={item} key={item._id} />
      ))}
    </div>
  );
}

export default HomePage;
