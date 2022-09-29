import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./App.css";
import Navbar from "./Components/Navbar";
import data from "./db";
function App() {
  console.log(data);
  return (
    <div className="App">
      <Navbar />
      <h1 className="text-3xl">Ecommerce</h1>{" "}
      <FontAwesomeIcon icon="fa-solid fa-check-square" />
      <h2>Cart</h2>
    </div>
  );
}

export default App;
