/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { memo } from "react";

const UseLeftRightCard = ({ heading, description, redirectlink, imgUrl }) => {
    return (
        <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 items-center p-6 lg:p-12 gap-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="flex flex-col space-y-6 h-full items-end justify-center border-1 border-black p-2 lg:p-0 lg:border-none md:p-0 md:border-none"
            >
                <h1 className="text-3xl font-bold text-center lg:text-left text-[var(--heading1)]">
                    {heading}
                </h1>
                <p className="text-[var(--descp)] text-lg leading-relaxed">
                    {description}
                </p>
                <div className="text-end w-full">
                    <Link
                        to={redirectlink}
                        className="inline-block bg-white border text-red-600 px-6 py-2 rounded-lg text-lg font-semibold hover:bg-red-700 hover:text-white transition"
                    >
                        Read More
                    </Link>
                </div>
            </motion.div>
            <div className="lg:block md:block hidden justify-center">
                <LazyLoadImage
                    src={imgUrl}
                    alt="image"
                    effect="blur"
                    className="rounded-lg shadow-lg w-full max-w-2xl"
                />
            </div>
        </div>
    );
};

export default UseLeftRightCard;