import * as Mui from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import RefreshIcon from "@mui/icons-material/Refresh";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import DeleteIcon from "@mui/icons-material/Delete";
import { useCart } from "../Context/cart-context";

function HomePage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const baseUrl = "https://jar-store-server.vercel.app/products";
  const { setItems } = useCart();
  function addItems() {
    setItems((items) => items + 1);
  }
  useEffect(() => {
    setLoading(true);
    axios
      .get(baseUrl)
      .then((response) => {
        setProducts(response.data.products);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        setErrorMsg(error.message);
        console.log("server error", error);
        setShowError(true);
      });
  }, []);
  return (
    <div className="home-container">
      {loading ? <div className="loader"></div> : ""}
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
      <div className={`${loading ? "blur" : ""}`}>
        {products.map((item) => (
          <div key={item._id} className="cardContainer">
            <Mui.Card sx={{ maxWidth: 345 }} className="card">
              <Mui.CardActionArea>
                <Mui.CardHeader
                  action={
                    <Mui.IconButton aria-label="settings">
                      <MoreVertIcon />
                    </Mui.IconButton>
                  }
                  title={item.name}
                  subheader={`₹${item.price}`}
                />
                <Mui.CardMedia
                  component="img"
                  height="194"
                  image={item.image}
                  alt={item.name}
                  style={{ objectFit: "contain" }}
                />
                <Mui.CardContent>
                  {/* <Mui.Typography gutterBottom variant="h5" component="div">
                    {item.name}
                  </Mui.Typography>
                  <Mui.Typography gutterBottom variant="h6" component="div">
                    {item.price}
                  </Mui.Typography> */}
                  <Mui.Typography variant="body2">
                    Some product description will come here and lets see how it
                    is added in tihs spacoiajc kasdj askjd iqod sjdn jkasf kjafs
                  </Mui.Typography>
                </Mui.CardContent>
              </Mui.CardActionArea>
              <Mui.CardActions>
                <Mui.Button
                  variant="contained"
                  startIcon={<AddShoppingCartIcon />}
                  onClick={addItems}
                >
                  Add
                </Mui.Button>
                <Mui.Button variant="outlined" endIcon={<DeleteIcon />}>
                  Remove
                </Mui.Button>
              </Mui.CardActions>
            </Mui.Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
