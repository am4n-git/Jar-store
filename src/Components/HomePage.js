import React from "react";

/* ----------------Context Import----------- */
import { useProducts } from "../Context/product-data-context";
import Filter from "./Filter";

/* ----------------Material UI-------------- */
import * as Mui from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import ProductGrid from "./ProductGrid";

function HomePage() {
  // Context functions
  const { products, loading, showError, errorMsg } = useProducts();
  return (
    <div className="home-container">
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
