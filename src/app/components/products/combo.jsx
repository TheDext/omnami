import React, { useEffect, useState } from "react";
import API from "../../api";
import ProductSlider from "../productSlider/productSlider";

const Combo = () => {
    const [products, setProducts] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        console.log("isLoading__combo");
        API.combo.getPart().then((data) => {
            setProducts(data);
            setIsLoading(false);
        });
    }, []);

    const getProduct = async () => {
        const product = await API.combo.getOneProduct(products.length);
        if (product) {
            setProducts((prevState) => [...prevState, product]);
        }
    };
    return (
        <>
            <ProductSlider
                products={products}
                onGetProduct={getProduct}
                isLoading={isLoading}
            />
        </>
    );
};

export default Combo;
