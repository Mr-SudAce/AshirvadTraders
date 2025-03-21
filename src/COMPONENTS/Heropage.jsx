import React from "react";
import bgvideo from "../assets/Img/vid.mp4";
import Banner from "./Banner";


const Heropage = () => {
  return (
    <>
      <div className="relative flex flex-col items-center justify-center h-screen text-center text-white max-w-full  overflow-hidden">

        {/* Background Video */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover grayscale-[60%]"
          src={bgvideo}
          autoPlay
          loop
          muted
          playsInline
        />

      </div>
      <Banner />
    </>
  );
};

export default Heropage;
