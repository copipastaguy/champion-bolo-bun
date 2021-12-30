// Stripe integration
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<HomeContent />} key="reload" />
          <Route path="/about" element={<About />} />
          <Route path="/champions" element={<Champions />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
