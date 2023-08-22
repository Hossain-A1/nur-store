import { BrowserRouter as Router ,Routes,Route } from "react-router-dom"
import HomePage from "./Home";
import AboutPage from "./About";
import Products from "./Products";
import ContactPage from "./Contact";
import SingleProducts from "./SingleProducts";
import CartPage from "./Cart";
import ErrorPage from "./ErrorPage";
import Navber from "./components/Navber";
import Login from "./Login";
import Footer from "./components/Footer";

const App = () => {
  return (
  <div className="app">
     <Router>
    <Navber/>
   <Routes>
    <Route path="/" element={<HomePage/>} />
    <Route path="/about" element={<AboutPage/>} />
    <Route path="/products" element={<Products/>} />
    <Route path="/contact" element={<ContactPage/>} />
    <Route path="/singleProducts/:id" element={<SingleProducts/>} />
    <Route path="/login" element={<Login/>} />
    <Route path="/cart" element={<CartPage/>} />
    <Route path="*" element={<ErrorPage/>} />
   </Routes>
   
    <Footer/>
   </Router>
  </div>
  )
}

export default App