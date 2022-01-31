import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/HomeComponent/Home";
import Product from "./components/ProductComponent/Product";
import Orders from "./components/OrdersComponent/Orders";
import MakeOrder from "./components/MakeOrderComonent/MakeOrder";
import Contact from "./components/ContactUsCompnonet/ContactUs";
import Navbar from "./components/NavbarComponent/Navbar";
import Header from "./components/HeaderComponent/Header";
import Footer from "./components/FooterComponent/Footer";

const AppRouting = () => {
  return (
    <BrowserRouter>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/makeOrder" element={<MakeOrder />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default AppRouting;
