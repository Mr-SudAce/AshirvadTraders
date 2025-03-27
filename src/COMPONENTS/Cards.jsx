import React, { useState, useEffect } from "react";
import { UseCard } from "../index.jsx"; // Ensure the correct import path
import bikeAPI from "../../bikeapi.json";

const Cards = () => {
    const [motoData, setMotoData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setMotoData(bikeAPI);
        setLoading(false);
    }, []);

    return (
        <div>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <UseCard items={motoData} />
            )}
        </div>
    );
};

export default Cards;
