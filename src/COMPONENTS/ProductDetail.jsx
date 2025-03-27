import React from 'react'
import { UseItemDetail } from '../index.jsx'

const ProductDetail = ({
  // name,description,price,image,model_year,mileage,engine_cc,fuel_type,transmission,color

    name = "2022 Royal Enfield Classic 350",
    description = "kdvchsvdhskcsk ",
    price = "4,80,000",
    image = "https://picsum.photos/id/247/1080",
    model_year = "2025",
    mileage = "522",
    engine_cc = "150",
    fuel_type = "Petrol",
    transmission = "Automatic",
    color = "Black",
    KMdriven = "100",
}) => {
    return (
        <div className="flex justify-between items-center py-6 px-8 space-x-4 min-h-screen">
            <UseItemDetail
                name={name}
                KMdriven={KMdriven}
                price={price}
                image={image}
                model_year={model_year}
                description={description}
                mileage = {mileage}
                engine_cc = {engine_cc}
                fuel_type = {fuel_type}
                transmission={transmission}
                color={color}

            />
        </div>
    )
}

export default ProductDetail
