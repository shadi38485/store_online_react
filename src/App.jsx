import "bootstrap-icons/font/bootstrap-icons.css";
import "./assets/css/App.css";
import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer/Footer";
import Navbar from "./components/layout/Navbar";
import ProductList from "./components/ProductList/ProductList";
import { useState } from "react";

function App() {
  const [totalQty, setTotalQty] = useState(0);

  const totalQtyManagement = () => {
    setTotalQty(totalQty + 1);
  };

  //useContext
  // Redux
  return (
    <div>
      <Header totalQty={totalQty} />
      <Navbar />
      <ProductList totalQtyManagement={totalQtyManagement} />
      <Footer />
    </div>
  );
}

export default App;

const profile = {
  fn: "Zahra",
  age: 19,
  address: { country: "Iran", city: "Isfahan" },
  hobbies: ["gym", "books", "music"],

  getBirthYear: function () {
    return 2024 - profile.age;
  },
};
