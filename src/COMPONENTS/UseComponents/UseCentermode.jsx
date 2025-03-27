import { memo, useEffect, useState } from "react";

const useCenterMode = memo((images) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [slidesToShow, setSlidesToShow] = useState(5);
    const [centerPadding, setCenterPadding] = useState("5px");

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 480) {
                setSlidesToShow(1);
                setCenterPadding("10px");
            } else if (window.innerWidth < 640) {
                setSlidesToShow(1);
                setCenterPadding("20px");
            } else if (window.innerWidth < 768) {
                setSlidesToShow(2);
                setCenterPadding("30px");
            } else if (window.innerWidth < 1024) {
                setSlidesToShow(3);
                setCenterPadding("40px");
            } else if (window.innerWidth < 1280) {
                setSlidesToShow(4);
                setCenterPadding("50px");
            } else {
                setSlidesToShow(5);
                setCenterPadding("60px");
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: centerPadding,
        slidesToShow: slidesToShow,
        autoplaySpeed: 4000,
        autoplay: true,
        speed: 500,
        beforeChange: (oldIndex, newIndex) => setActiveIndex(newIndex),
        responsive: [
            {
                breakpoint: 1536,
                settings: { slidesToShow: 5, centerPadding: "50px" }
            },
            {
                breakpoint: 1280,
                settings: { slidesToShow: 5, centerPadding: "40px" }
            },
            {
                breakpoint: 1024,
                settings: { slidesToShow: 3, centerPadding: "30px" }
            },
            {
                breakpoint: 768,
                settings: { slidesToShow: 3, centerPadding: "20px" }
            },
            {
                breakpoint: 640,
                settings: { slidesToShow: 3, centerPadding: "20px" }
            },
            {
                breakpoint: 480,
                settings: { slidesToShow: 3, centerPadding: "10px" }
            }
        ]
    };

    const SliderImages = images?.map((img, index) => (
        <div
            key={index}
            className={`w-full h-full flex justify-center items-center transition-transform duration-300 
            ${index === activeIndex ? "scale-101 opacity-100 p-2" : "scale-85 opacity-40"}`}
        >
            <img
                src={`${img.url}`} // change the image attribute according to API 
                alt={`Slide ${index}`}
                className={`w-full h-24 md:h-44 lg:h-52 xl:h-60 2xl:h-64 object-cover rounded-lg transition-all duration-300
        ${index === activeIndex ? "scale-105 opacity-100" : "scale-90 opacity-60"}`}
            />
        </div>
    ));

    return { settings, SliderImages };
}
);
export default useCenterMode;
