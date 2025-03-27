/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import useCenterMode from "./UseComponents/UseCentermode";


// const domain = "https://aashirwadtraders.com.np/"

const BrandSlide = () => {
    const [brandImg, setBrandImg] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch("https://aashirwadtraders.com.np/api/brand/getall", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Access-Control-Allow-Origin": "*",
                    },
                });
                const data = await res.json();
                console.log("API response:", data);

                if (Array.isArray(data)) {
                    setBrandImg(data);
                    console.log("Brand images:", data);
                } else {
                    console.error("Unexpected API response format:", data);
                }
                setLoading(false);
            } catch (error) {
                console.error("Error fetching API:", error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);




    const { settings, SliderImages } = useCenterMode(brandImg);

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
};

export default BrandSlide;
