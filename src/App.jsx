import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-lazy-load-image-component/src/effects/blur.css";
import { BrandSlide, Cards, Heropage, Navbar } from "./index"

function App() {
  return (
    <div className="w-full min-h-screen text-white">
      <Navbar />
      <div className="container mx-auto">
        <Heropage />
        <Cards />
      </div>
      <BrandSlide />
    </div>
  );
}

export default App;
