import React, { useState } from "react";
import API from "../../app/api";
// import ProductSlider from "../productSlider/producSlider";

const Combo = () => {
    const [index, setIndex] = useState(0);
    const [products, setProducts] = useState([]);

    const getProduct = () => {
        if (API.combo.getPart(index)) {
            setProducts((prevState) => [
                ...prevState,
                API.combo.getPart(index)
            ]);
        }
        setIndex((prevState) => prevState + 1);
    };

    return (
        <>
            <button onClick={() => getProduct()}>Click</button>;
            {products && products.map((el) => <p key={el.id}>{el.name}</p>)}
        </>
    );
};

export default Combo;
