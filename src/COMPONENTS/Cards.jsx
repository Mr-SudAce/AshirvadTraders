import { IoTimeOutline } from "react-icons/io5";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import motorApi from "../../motorDemoAPI.json";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { memo } from "react";

const Cards = memo(() => {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 gap-6 px-6 py-8">
            {motorApi.map((moto, index) => (
                <div
                    key={moto.id || index}
                    className="flex flex-col h-[200px] lg:h-[350px] border border-gray-200 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 bg-white"
                >
                    <div className="relative w-full h-52 overflow-hidden">
                        <LazyLoadImage
                            src={moto.images || ""}
                            alt={moto.title || ""}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            effect="blur"
                        />
                    </div>

                    <div className="p-4 flex flex-col space-y-2">
                        <h3 className="text-lg font-semibold text-gray-800 truncate">{moto.title}</h3>
                        <p className="text-sm text-gray-600 line-clamp-2">{moto.description}</p>
                        <p className="text-xl font-bold text-red-600">Rs. {moto.price}</p>

                        <div className="flex justify-between items-center border-t pt-3 text-gray-700 text-sm">
                            <div className="flex flex-col items-center">
                                <AiOutlineThunderbolt className="text-xl" aria-label="CC" />
                                <span className="font-semibold">{moto.CC} CC</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <IoTimeOutline className="text-xl" aria-label="KM Driven" />
                                <span className="font-semibold">{moto.KMDriven} KM</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <CiLocationOn className="text-xl" aria-label="Location" />
                                <span className="font-semibold">{moto.location}</span>
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
