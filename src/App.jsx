import "./assets/css/App.css";
import Header from "./components/Header";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList/ProductList";

// class components
// function components ----> a function that return jsx & have some options (hooks---> hellper function)
// jsx: root,   js {} , read variables, ternary operator(if), map(loop), ()=>{}

function App() {
  const title = "Shadi App";
  const age = 16;
  // sum(30,50)
  // Header(30, 50)

//Properties ---> props
  return (
    <div>
      <Header x="30" y="50" />
      <Navbar title={title} age={age} />
      <ProductList />
      <Footer />
    </div>
  );
}

export default App;



const profile={
  fn:"Zahra",
  age:19,
  address:{country: "Iran", city:"Isfahan"},
  hobbies:["gym", "books", "music"],

  getBirthYear:function () {
    return 2024-profile.age
  }
}