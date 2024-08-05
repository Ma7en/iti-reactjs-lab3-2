/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../../../api/config";

function ProductDetails() {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        console.log("Start API Call");

        setLoading(true);

        axiosInstance
            .get(`products/${id}`)
            .then((respons) => {
                console.log(respons.data);
                setProduct(respons.data);
            })
            .catch(() => {
                setError(true);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [id]);

    return (
        <>
            <div>ProductDetails</div>
        </>
    );
}

export default ProductDetails;
