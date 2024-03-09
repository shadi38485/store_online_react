import "./assests/css/App.css";
// import {Header, sum} from "./components/Header";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";

// class components
// function components ----> a function that return jsx & have some options (hooks---> hellper function)
// jsx: root,   js {} , read variables, ternary operator(if), map(loop), ()=>{}

function App() {
  const title = "Shadi App";
  const age = 16;
  console.log(title, age);

  // sum(30,50)
  // Header()
  // Foter()

  return (
    <div>
      <Header />
      <Footer />
      <Navbar/>
      <ProductList/>
    </div>
  );
}

export default App;
