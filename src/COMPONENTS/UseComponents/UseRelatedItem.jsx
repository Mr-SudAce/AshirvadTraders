import React from 'react';

const UseRelatedItem = ({
    name,
    description,
    price,
    image,
    model_year,
    mileage,
    engine_cc,
    fuel_type,
    transmission,
    color,
    KMdriven
}) => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-4">
                    <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                        <a className="block relative h-48 rounded overflow-hidden">
                            <img 
                                alt={name} 
                                className="object-cover object-center w-full h-full block" 
                                src={image || "https://dummyimage.com/420x260"} 
                            />
                        </a>
                        <div className="mt-4">
                            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                            <h2 className="text-gray-900 title-font text-lg font-medium">{name}</h2>
                            <p className="mt-1">Price: ${price}</p>
                            <p className="mt-1">Description: {description}</p>
                            <p className="mt-1">Model Year: {model_year}</p>
                            <p className="mt-1">Mileage: {mileage} km</p>
                            <p className="mt-1">Engine CC: {engine_cc} cc</p>
                            <p className="mt-1">Fuel Type: {fuel_type}</p>
                            <p className="mt-1">Transmission: {transmission}</p>
                            <p className="mt-1">Color: {color}</p>
                            <p className="mt-1">KM Driven: {KMdriven} km</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UseRelatedItem;
