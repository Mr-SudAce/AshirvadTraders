import { IoTimeOutline } from "react-icons/io5";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import motorApi from "../../motorDemoAPI.json";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { memo } from "react";

const Loader = () => (
    <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
    </div>
);

const Cards = memo(() => {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 gap-6 px-6 py-8">
            {motorApi.slice(0, 10).map((moto, index) => (
                <div key={moto.id || index} className="flex flex-col h-full border border-gray-200 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 bg-white">
                    <div className="relative w-full h-[100%] lg:overflow-hidden">
                        <LazyLoadImage
                            src={moto.images || "No Images"}
                            alt={moto.title || "No Title"}
                            srcSet={`${moto.images} 2x`}
                            className="w-80 h-36 sm:h-48 md:h-60 lg:h-60 xl:h-60 object-cover hover:scale-105 transition-transform duration-300"
                            effect="blur"
                        />

                        {/* Mobile-only Info */}
                        <div className="lg:hidden md:hidden block absolute bottom-0 bg-gradient-to-b from-transparent to-gray-900 w-full px-3 md:px-0 xl:px-0">
                            <h3 className="text-md font-semibold text-gray-100 text-center truncate">{moto.title}</h3>
                            <div className="flex justify-between items-center border-t pt-2 text-gray-100 text-sm">
                                <div className="flex flex-col items-center">
                                    <AiOutlineThunderbolt className="text-[15px]" aria-label="CC" />
                                    <span className="font-semibold text-[9px]">{moto.CC} CC</span>
                                </div>
                                <div className="flex flex-col items-center">
                                    <IoTimeOutline className="text-[15px]" aria-label="KM Driven" />
                                    <span className="font-semibold text-[9px]">{moto.KMDriven} KM</span>
                                </div>
                                <div className="flex flex-col items-center">
                                    <CiLocationOn className="text-[15px]" aria-label="Location" />
                                    <span className="font-semibold text-[9px]">{moto.location}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Desktop-only Info */}
                    <div className="hidden lg:block md:block xl:block">
                        <div className="px-4 py-2 flex flex-col">
                            <h3 className="text-md font-semibold text-gray-800 justify-between">
                                {moto.title}
                                <span className="text-md font-bold text-red-600 lg:hidden md:block m-0">Rs. {moto.price}</span>
                            </h3>
                            <p className="text-sm text-gray-600 hidden line-clamp-1 lg:block m-0"
                                style={{
                                    display: "-webkit-box",
                                    WebkitBoxOrient: "vertical",
                                    WebkitLineClamp: 1,
                                }}
                                dangerouslySetInnerHTML={{ __html: moto.description }}
                            ></p>
                            <p className="text-xl font-bold text-red-600 hidden lg:block m-0">Rs. {moto.price}</p>

                            <div className="flex justify-between items-center border-t pt-3 text-gray-700 text-sm">
                                <div className="flex flex-col items-center">
                                    <AiOutlineThunderbolt className="text-xl" aria-label="CC" />
                                    <span className="font-semibold lg:text-[12px] md:text-[9.5px] ">{moto.CC} CC</span>
                                </div>
                                <div className="flex flex-col items-center">
                                    <IoTimeOutline className="text-xl" aria-label="KM Driven" />
                                    <span className="font-semibold lg:text-[12px] md:text-[9.5px] ">{moto.KMDriven} KM</span>
                                </div>
                                <div className="flex flex-col items-center">
                                    <CiLocationOn className="text-xl" aria-label="Location" />
                                    <span className="font-semibold lg:text-[12px] md:text-[9.5px] ">{moto.location}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Add to Cart Button */}
                    <button className="mt-auto w-full py-3 bg-[var(--superbg2)] text-white font-medium rounded-b-xl border border-[var(--superbg2)] hover:bg-[var(--superbg)] hover:text-[var(--superbg2)] hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out">
                        Add to Cart
                    </button>
                </div>
            ))}
        </div>
    );
});

export default Cards;
