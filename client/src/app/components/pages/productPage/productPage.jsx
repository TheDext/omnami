import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MainLayout from "../../../layouts/mainLayout";
import productService from "../../../services/product.service";
import ProductCard from "../../productCard/productCard";
import "./productPage.scss";

const ProductPage = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState();

    useEffect(() => {
        async function getProductById() {
            return await productService.getById(productId);
        }
        getProductById(productId).then(({ content }) => setProduct(...content));
    }, []);

    return (
        <MainLayout>
            {product && (
                <div className="product-page">
                    <div className="page__conatiner _container">
                        <ProductCard
                            id={product._id}
                            name={product.name}
                            weight={product.weight}
                            composition={product.composition}
                            price={product.price}
                        />
                    </div>
                </div>
            )}
        </MainLayout>
    );
};

export default ProductPage;
