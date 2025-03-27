import React from 'react'
import { UseRelatedItem } from '../index.jsx'

const RelatedProduct = ({
    name = "Yamaha Mt-15 BS6",
    description = "Best Bike",
    price = "5,50,000",
    image = "https://picsum.photos/id/252/1080/",
    model_year = "2015",
    mileage = "120",
    engine_cc = "150",
    fuel_type = "Petrol",
    transmission = "Manual",
    color = "Black",
    KMdriven = "20000",
}) => {
    return (
        <UseRelatedItem
            name={name}
            description={description}
            price={price}
            image={image}
            model_year={model_year}
            mileage={mileage}
            engine_cc={engine_cc}
            fuel_type={fuel_type}
            transmission={transmission}
            color={color}
            KMdriven={KMdriven}
        />
    )
}

export default RelatedProduct
