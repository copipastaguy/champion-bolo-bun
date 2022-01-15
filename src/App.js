// Stripe integration
// import { Elements } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";
import { CartProvider } from "react-use-cart";

import "./App.css";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import NavBar from "./components/Navigations/NavBar";
import About from "./pages/About/About.js";
import Champions from "./pages/Champion/Champions.js";
import Contact from "./pages/Contact/Contact.js";
import Menu from "./pages/Menu/Menu.js";
import Cart from "./pages/Cart/Cart.js";

import HomeContent from "./pages/Home/HomeContent";

function App() {
  return (
    // Routing from one link to another page
    <CartProvider>
      <HashRouter>
        <div className="App">
          <NavBar />
          <Routes>
            <Route exact path="/" element={<HomeContent />} key="reload" />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/champions" element={<Champions />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/menu" element={<Menu />} />
            <Route exact path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </HashRouter>
    </CartProvider>
  );
}

export default App;
