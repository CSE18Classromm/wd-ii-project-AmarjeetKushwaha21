import Navbar from "./components/Navbar";
import HeaderSlider from "./components/HeaderSlider";
import BoxRow from "./components/BoxRow";
import ProductSlider from "./components/ProductSlider";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <HeaderSlider />

      <BoxRow />
      <ProductSlider />
      <BoxRow />
      <ProductSlider />

      <Footer />
    </>
  );
}

export default App;