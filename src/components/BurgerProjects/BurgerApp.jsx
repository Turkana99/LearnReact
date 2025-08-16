import { Home } from "./components/Home";
import { Route, Routes } from "react-router-dom";
import { Menu } from "./components/Menu";
import { About } from "./components/About";
import { ContactUs } from "./components/ContactUs";
import { Navbar } from "./shared/Navbar";
import { Footer } from "./shared/Footer";
function BurgerApp() {
  return (
    <div className="BurgerApp">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/contactUs" element={<ContactUs />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default BurgerApp;
