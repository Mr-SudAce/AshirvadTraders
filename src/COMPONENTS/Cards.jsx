import { IoTimeOutline } from "react-icons/io5";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import motorApi from "../../motorDemoAPI.json";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { memo } from "react";

const Cards = memo(() => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 gap-6 px-6 py-8">
            {motorApi.slice(0, 10).map((moto, index) => (
                <div key={moto.id || index}
                    className="flex flex-col h-full border border-gray-200 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 bg-white"
                >
                    <div className="relative w-full h-[100%] lg:overflow-hidden">
                        <LazyLoadImage
                            src={moto.images || "No Img"}
                            alt={moto.title || "No Title"}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            effect="blur"
                        />
                        <div className="block lg:hidden md:hidden xl:hidden absolute bottom-0 pb-2 lg:pb-0 md:pb-0 xl:pb-0 bg-gradient-to-b from-transparent to-gray-900 w-full px-3 lg:px-0 md:px-0 xl:px-0 ">
                            <h3 className="text-md font-semibold text-gray-100 text-center truncate ">{moto.title}</h3>

                            <div className="flex justify-between items-center border-t pt-3 text-gray-100 text-sm">
                                <div className="flex flex-col items-center ">
                                    <AiOutlineThunderbolt className="text-[15px]" aria-label="CC" />
                                    <span className="font-semibold text-[9px]">{moto.CC} CC</span>
                                </div>
                                <div className="flex flex-col items-center">
                                    <IoTimeOutline className=" text-[15px] " aria-label="KM Driven" />
                                    <span className="font-semibold text-[9px] ">{moto.KMDriven} KM</span>
                                </div>
                                <div className="flex flex-col items-center">
                                    <CiLocationOn className=" text-[15px]" aria-label="Location" />
                                    <span className="font-semibold text-[9px]">{moto.location}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="hidden lg:block md:block xl:block">

                        <div className="px-4 py-2 flex flex-col space-y-2">
                            <h3 className="text-md font-semibold text-gray-800 justify-between">{moto.title}
                                <span className="text-md font-bold text-red-600 lg:hidden md:block m-0">Rs. {moto.price}</span> </h3>
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

                    <button className="mt-auto w-full py-3 bg-[var(--superbg2)] text-white font-medium rounded-b-xl border border-[var(--superbg2)] hover:bg-[var(--superbg)] hover:text-[var(--superbg2)] hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out">
                        Add to Cart
                    </button>

                </div>
            ))}
        </div>
    );
});

export default Cards;
