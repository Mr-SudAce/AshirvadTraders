import React from 'react';
import { AiOutlineThunderbolt } from 'react-icons/ai';
import { IoTimeOutline } from 'react-icons/io5';
import { CiLocationOn } from 'react-icons/ci';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const placeholderImage = "https://via.placeholder.com/150";

const UseCard = ({ items }) => {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 gap-6 px-6 py-8">
            {items.slice(0, 10).map((itm, index) => (
                <div
                    key={itm.id || index}
                    className="flex flex-col h-full border border-gray-200 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 bg-white"
                >
                    <div className="relative w-full h-[100%] lg:overflow-hidden">
                        <LazyLoadImage
                            src={itm.image || placeholderImage}
                            alt={itm.title || 'No Title'}
                            className="w-80 h-36 sm:h-48 md:h-60 lg:h-60 xl:h-60 object-cover hover:scale-105 transition-transform duration-300"
                            effect="blur"
                        />

                        {/* Mobile-only Info */}
                        <div className="lg:hidden md:hidden block absolute bottom-0 bg-gradient-to-b from-transparent to-gray-900 w-full px-3">
                            <h3 className="text-md font-semibold text-gray-100 text-center truncate">{itm.title}</h3>
                            <div className="flex justify-between items-center border-t pt-2 text-gray-100 text-sm">
                                <div className="flex flex-col items-center">
                                    <AiOutlineThunderbolt className="text-[15px]" />
                                    <span className="font-semibold text-[9px]">{itm.engine_cc} CC</span>
                                </div>
                                <div className="flex flex-col items-center">
                                    <IoTimeOutline className="text-[15px]" />
                                    <span className="font-semibold text-[9px]">{itm.KMdriven} KM</span>
                                </div>
                                <div className="flex flex-col items-center">
                                    <CiLocationOn className="text-[15px]" />
                                    <span className="font-semibold text-[9px]">{itm.mileage}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Desktop-only Info */}
                    <div className="hidden lg:block">
                        <div className="px-4 py-2 flex flex-col">
                            <h3 className="text-md font-semibold text-gray-800">
                                {itm.title}
                                <span className="text-md font-bold text-red-600 lg:hidden md:block">Rs. {itm.price}</span>
                            </h3>
                            <p className="text-sm text-gray-600 hidden lg:block truncate">{itm.description || "No description available."}</p>
                            <p className="text-xl font-bold text-red-600 hidden lg:block">Rs. {itm.price}</p>

                            <div className="flex justify-between items-center border-t pt-3 text-gray-700 text-sm">
                                <div className="flex flex-col items-center">
                                    <AiOutlineThunderbolt className="text-xl" />
                                    <span className="font-semibold text-[12px]">{itm.engine_cc} CC</span>
                                </div>
                                <div className="flex flex-col items-center">
                                    <IoTimeOutline className="text-xl" />
                                    <span className="font-semibold text-[12px]">{itm.KMdriven} KM</span>
                                </div>
                                <div className="flex flex-col items-center">
                                    <CiLocationOn className="text-xl" />
                                    <span className="font-semibold text-[12px]">{itm.mileage}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Add to Cart Button */}
                    <button className="mt-auto w-full py-3 bg-[var(--superbg2)] text-white font-medium rounded-b-xl border border-[var(--superbg2)] hover:bg-[var(--superbg2)] hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out">
                        Add to Cart
                    </button>
                </div>
            ))}
        </div>
    );
};

export default UseCard;
