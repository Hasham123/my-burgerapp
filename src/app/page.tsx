import Image from "next/image";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import Progressor from "./components/Progressor";
import ProductList from "./components/ProductList";
import Banner from "./components/Banner";
import Offer from "./components/Offer";
import Card from "./components/Card";
import Testimonals from "./components/Testimonals";
import Footer from "./components/Footer";
 import MenuItems from "./components/MenuItems";
import Reservation from "./components/Reservation";

export default function Home() {
  return (
   <div className="bg-black min-h-screen">
    <Navbar/>
    <Carousel/>
    <Progressor/>
    <ProductList/>
    <Banner/>
    <ProductList/>
    <MenuItems/>
    <Offer/>
    <Card/>
    <Reservation/>
    <Testimonals/>
    <Footer/>
    
   </div>
  );
}
