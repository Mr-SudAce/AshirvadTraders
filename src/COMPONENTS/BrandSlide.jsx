import React from "react";
import Slider from "react-slick";

const brandimages = [
    { id: 1, BrandImg: "https://dummyimage.com/1080/000/fff" },
    { id: 2, BrandImg: "https://dummyimage.com/1080/111/fff" },
    { id: 3, BrandImg: "https://dummyimage.com/1080/222/fff" },
    { id: 4, BrandImg: "https://dummyimage.com/1080/333/fff" },
    { id: 5, BrandImg: "https://dummyimage.com/1080/444/fff" },
];

const BrandSlide = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };

    return (
        <>
        <h1 className="text-black">Brands</h1>
            <Slider {...settings} className="bg-green-400 overflow-hidden">
                {brandimages.map((brand) => (
                    <div key={brand.id} className="flex justify-center items-center object-cover">
                        <img src={brand.BrandImg} alt={`Brand ${brand.id}`} className="object-contain py-4 px-3 w-20 lg:w-96 md:w-72 xl:w-96" />
                    </div>
                ))}
            </Slider>
        </>
    );
};

export default BrandSlide;
