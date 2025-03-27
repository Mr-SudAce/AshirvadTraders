/* eslint-disable no-unused-vars */
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-lazy-load-image-component/src/effects/blur.css";
import * as index from "./index.jsx";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <div className="w-full min-h-screen text-white">
          <index.Navbar />
          <div className="container mx-auto">
            <index.Heropage />
            <index.Cards />
            <index.BrandSlide />
            <index.LtoRCard />
            <index.RtoLCard />
            <index.ProductDetail />
            {/* <index.AboutUs /> */}
          </div>
          <index.Footer />
        </div>
      </BrowserRouter>
    </>

  );
}

export default App;
