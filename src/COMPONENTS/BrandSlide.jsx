/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { memo, useEffect, useState } from "react";
import Slider from "react-slick";
import UseCenterMode from "../COMPONENTS/UseComponents/UseCenterMode"; // ✅ Corrected import path

const BrandSlide = memo(() => {
    const [brandImg, setBrandImg] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch("https://api.slingacademy.com/v1/sample-data/photos");
                const data = await res.json();
                // console.log("Brand images:", data);
                if (data && Array.isArray(data.photos)) {
                    setBrandImg(data.photos);
                } else {
                    console.error("Unexpected API response format:", data);
                }

            } catch (error) {
                console.error("Error fetching API:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const { settings, SliderImages } = UseCenterMode(brandImg);

    if (loading) {
        return <h1>Loading...</h1>;
    }

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
                <Slider {...settings}>{SliderImages}</Slider>
            </div>
        </div>
    );
});

export default BrandSlide;
