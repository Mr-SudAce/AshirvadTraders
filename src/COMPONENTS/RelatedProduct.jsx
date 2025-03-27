import React, { memo, useEffect, useState } from 'react'
import { UseCard } from '../index.jsx'
import relatedItemAPI from "../../bikeapi.json";


const RelatedProduct = memo(() => {
    const [relatedData, setMotoData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setMotoData(relatedItemAPI);
        setLoading(false);
    }, []);

    return (
        <div>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <UseCard data={relatedData} title="Related Product" />

            )}
        </div>
    );
});

export default RelatedProduct
