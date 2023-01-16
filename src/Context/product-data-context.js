import {
  createContext,
  useContext,
  useState,
  useEffect,
  useReducer,
} from "react";
import axios from "axios";
const ProductsDataContext = createContext({});

const ProductDataProvider = ({ children, value }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  // Server url
  const baseUrl = process.env.REACT_APP_SERVER_URL;
  // fetch all products intially
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

  function filterHandler(products, action) {
    switch (action.type) {
      case "FILTER_BY_HIGH_TO_LOW_PRICE":
        return {
          ...products,
        };
      default:
        return;
    }
  }
  const [product, dispatch] = useReducer(filterHandler, {});
  return (
    <ProductsDataContext.Provider
      value={{ products, setProducts, loading, showError, errorMsg, dispatch }}
    >
      {children}
    </ProductsDataContext.Provider>
  );
};

const useProducts = () => useContext(ProductsDataContext);

export { useProducts, ProductDataProvider };
