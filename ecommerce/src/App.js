import "./App.css";
import Navbar from "./Components/Navbar";
import data from "./db";
function App() {
  console.log(data);
  return (
    <div className="App">
      <Navbar />
      <h1>Ecommerce</h1>
      <h2>Cart</h2>
    </div>
  );
}

export default App;
