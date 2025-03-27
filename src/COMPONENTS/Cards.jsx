import React, { useState, useEffect, memo } from "react";
import { UseCard } from "../index.jsx"; // Ensure the correct import path
import bikeAPI from "../../bikeapi.json";

const Cards = memo(() => {
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
                <UseCard data={motoData} title="Products" />
            )}
        </div>
    );
});

export default Cards;
