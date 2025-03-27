import React, { memo, useEffect, useState } from 'react';
import { UseCard } from '../index.jsx';

const domain = "https://app.aashirwadtraders.com.np";
const relatedItemAPI = `${domain}/api/product/all`;

const RelatedProduct = memo(() => {
    const [relatedData, setMotoData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(relatedItemAPI);
                const data = await response.json();
                setMotoData(data);
                console.log("related data: ", data);
            } catch (error) {
                console.error("There has been a problem with your fetch operation: ", error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
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

export default RelatedProduct;
