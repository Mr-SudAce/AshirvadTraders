/* eslint-disable no-unused-vars */
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-lazy-load-image-component/src/effects/blur.css";
import * as index from "./index.jsx";
function App() {
  return (
    <>
      <div className="w-full min-h-screen text-white">
        <index.Navbar />
        <div className="container mx-auto">
          <index.Heropage />
          <index.Cards />
          <index.BrandSlide />
        </div>
        <index.Footer />
      </div>
    </>

  );
}

export default App;
