import "./App.css";
import Navbar from "./Components/Navbar";
import Carousel from "./Components/Carousel";
import About from "./Components/About";
import CarouselCard from "./Components/CarouselCard";
import ClientSay from "./Components/ClientSay";
import Canvas  from "./Components/Canvas";
import TredingProduct from "./Components/TredingProduct";
import Purchese from "./Components/Purchese";
import Faqs from "./Components/Faqs";
import OurLatestBlog from "./Components/OurLatestBlog";
import Footer from "./Components/Footer";
// import WavePart from "./Components/WavePart";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Carousel/>
      <About />
      <CarouselCard />
      <ClientSay/>
      <Canvas/>
      <TredingProduct/>
      <Purchese/>
      <Faqs/>
      <OurLatestBlog/>
      <Footer/>
      {/* <WavePart/> */}
    </div>
  );
}

export default App;
