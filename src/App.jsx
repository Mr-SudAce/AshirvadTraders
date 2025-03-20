import "./App.css";
import Cards from "./COMPONENTS/Cards";
import Heropage from "./COMPONENTS/Heropage";
import Navbar from "./COMPONENTS/Navbar";
import "react-lazy-load-image-component/src/effects/blur.css";

function App() {
  return (
    <div className="w-full min-h-screen text-white">
      <Navbar />
      <div className="container mx-auto">
        <Heropage />
        <Cards/>
      </div>
    </div>
  );
}

export default App;
