import React from 'react'
import { UseItemDetail } from '../index.jsx'

const ProductDetail = ({
    productTitle = "2022 Royal Enfield Classic 350",
    postdate = "3",
    KMdriven = "100",
    location = "Kathmandu",
    price = "4,80,000",
    contact = "9876543210",
    imageUrl = "https://picsum.photos/id/247/1080",
    year = "2025",
    description = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit, eaque hic! Autem, sed? Excepturi quidem cupiditate qui fugit quaerat sed amet harum, culpa nemo enim ullam hic dicta accusamus ipsa.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit, eaque hic! Autem, sed? Excepturi quidem cupiditate qui fugit quaerat sed amet harum, culpa nemo enim ullam hic dicta accusamus ipsa.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit, eaque hic! Autem, sed? Excepturi quidem cupiditate qui fugit quaerat sed amet harum, culpa nemo enim ullam hic dicta accusamus ipsa.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit, eaque hic! Autem, sed? Excepturi quidem cupiditate qui fugit quaerat sed amet harum, culpa nemo enim ullam hic dicta accusamus ipsa.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit, eaque hic! Autem, sed? Excepturi quidem cupiditate qui fugit quaerat sed amet harum, culpa nemo enim ullam hic dicta accusamus ipsa.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit, eaque hic! Autem, sed? Excepturi quidem cupiditate qui fugit quaerat sed amet harum, culpa nemo enim ullam hic dicta accusamus ipsa.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit, eaque hic! Autem, sed? Excepturi quidem cupiditate qui fugit quaerat sed amet harum, culpa nemo enim ullam hic dicta accusamus ipsa.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit, eaque hic! Autem, sed? Excepturi quidem cupiditate qui fugit quaerat sed amet harum, culpa nemo enim ullam hic dicta accusamus ipsa.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit, eaque hic! Autem, sed? Excepturi quidem cupiditate qui fugit quaerat sed amet harum, culpa nemo enim ullam hic dicta accusamus ipsa.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit, eaque hic! Autem, sed? Excepturi quidem cupiditate qui fugit quaerat sed amet harum, culpa nemo enim ullam hic dicta accusamus ipsa.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit, eaque hic! Autem, sed? Excepturi quidem cupiditate qui fugit quaerat sed amet harum, culpa nemo enim ullam hic dicta accusamus ipsa.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit, eaque hic! Autem, sed? Excepturi quidem cupiditate qui fugit quaerat sed amet harum, culpa nemo enim ullam hic dicta accusamus ipsa.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit, eaque hic! Autem, sed? Excepturi quidem cupiditate qui fugit quaerat sed amet harum, culpa nemo enim ullam hic dicta accusamus ipsa.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit, eaque hic! Autem, sed? Excepturi quidem cupiditate qui fugit quaerat sed amet harum, culpa nemo enim ullam hic dicta accusamus ipsa.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit, eaque hic! Autem, sed? Excepturi quidem cupiditate qui fugit quaerat sed amet harum, culpa nemo enim ullam hic dicta accusamus ipsa.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit, eaque hic! Autem, sed? Excepturi quidem cupiditate qui fugit quaerat sed amet harum, culpa nemo enim ullam hic dicta accusamus ipsa.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit, eaque hic! Autem, sed? Excepturi quidem cupiditate qui fugit quaerat sed amet harum, culpa nemo enim ullam hic dicta accusamus ipsa.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit, eaque hic! Autem, sed? Excepturi quidem cupiditate qui fugit quaerat sed amet harum, culpa nemo enim ullam hic dicta accusamus ipsa.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit, eaque hic! Autem, sed? Excepturi quidem cupiditate qui fugit quaerat sed amet harum, culpa nemo enim ullam hic dicta accusamus ipsa.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit, eaque hic! Autem, sed? Excepturi quidem cupiditate qui fugit quaerat sed amet harum, culpa nemo enim ullam hic dicta accusamus ipsa.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit, eaque hic! Autem, sed? Excepturi quidem cupiditate qui fugit quaerat sed amet harum, culpa nemo enim ullam hic dicta accusamus ipsa.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit, eaque hic! Autem, sed? Excepturi quidem cupiditate qui fugit quaerat sed amet harum, culpa nemo enim ullam hic dicta accusamus ipsa.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit, eaque hic! Autem, sed? Excepturi quidem cupiditate qui fugit quaerat sed amet harum, culpa nemo enim ullam hic dicta accusamus ipsa.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit, eaque hic! Autem, sed? Excepturi quidem cupiditate qui fugit quaerat sed amet harum, culpa nemo enim ullam hic dicta accusamus ipsa."
}) => {
    return (
        <div className="flex justify-between items-center py-6 px-8 space-x-4 min-h-screen">
            <UseItemDetail
                productTitle={productTitle}
                postdate={postdate}
                KMdriven={KMdriven}
                location={location}
                price={price}
                contact={contact}
                imageUrl={imageUrl}
                year={year}
                description={description}
            />
        </div>
    )
}

export default ProductDetail
