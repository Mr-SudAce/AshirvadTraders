import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import bgvideo from "../assets/Img/vid.mp4";

const Heropage = () => {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen text-center text-white w-full overflow-hidden">

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
  );
};

export default Heropage;
