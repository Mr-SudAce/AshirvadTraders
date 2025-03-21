/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import Slider from "react-slick";
import brandimages from "../../Brandimages.json";
import { UseCentermodel } from "../index.jsx";

function BrandSlide() {
    const picPath = "../src/assets/Brandimages/";
    const { settings, SliderImages } = UseCentermodel(brandimages, picPath);
    return (
        <div className="w-full mx-auto overflow-hidden container px-4">
            <motion.h2
                className="lg:text-3xl md:text-xl text-lg text-[var(--heading1)] font-extrabold uppercase mb-3 lg:text-start md:text-start text-center decoration-white decoration-[5px] underline underline-offset-8"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                Brands
            </motion.h2>
            <div className="overflow-hidden lg:h-80 md:h-50">
                <Slider {...settings}>
                    {SliderImages}
                </Slider>
            </div>
        </div>
    );
}

export default BrandSlide;
