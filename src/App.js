import { BrowserRouter as Router ,Routes,Route } from "react-router-dom"
import HomePage from "./Home";
import AboutPage from "./About";
import Products from "./Products";
import ContactPage from "./Contact";
import SingleProducts from "./SingleProducts";
import CartPage from "./Cart";
import ErrorPage from "./ErrorPage";
import Navber from "./components/Navber";

const App = () => {
  return (
   <Router>
    <Navber/>
   <Routes>
    <Route path="/" element={<HomePage/>} />
    <Route path="/about" element={<AboutPage/>} />
    <Route path="/products" element={<Products/>} />
    <Route path="/contact" element={<ContactPage/>} />
    <Route path="/singleProducts/:id" element={<SingleProducts/>} />
    <Route path="/cart" element={<CartPage/>} />
    <Route path="*" element={<ErrorPage/>} />
   </Routes>
   
   </Router>
  )
}

export default App