import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductById } from "../../../store/products";
import ProductCard from "../../productCard/productCard";
import productService from "../../../services/product.service";
import "./productPage.scss";
import MainLayout from "../../../layouts/mainLayout";
import { getCurrentUserId } from "../../../store/users";
import { deleteComment, getCommentsByProductId } from "../../../store/comments";
import AddComment from "./addComment";
import CommentsList from "./commentsList";

const ProductPage = () => {
    const dispatch = useDispatch();
    const { productId } = useParams();
    const [product, setProduct] = useState(
        useSelector(getProductById(productId))
    );
    const comments = useSelector(getCommentsByProductId(productId));
    const userId = useSelector(getCurrentUserId());
    const handleDelete = (commentId) => {
        dispatch(deleteComment(commentId));
    };
    useEffect(() => {
        if (!product) {
            productService
                .getById(productId)
                .then(({ content }) => setProduct(...content));
        }
    }, []);
    return (
        <MainLayout>
            {product && (
                <div className="product-page">
                    <div className="product-page__conatiner _container">
                        <div className="product-page__body">
                            <div className="product-page__row">
                                <div className="product-page__column product-page__column_product">
                                    <ProductCard
                                        id={product._id}
                                        name={product.name}
                                        weight={product.weight}
                                        composition={product.composition}
                                        price={product.price}
                                        img={product.img}
                                    />
                                </div>
                                <div className="product-page__column product-page__column_add-comment">
                                    <AddComment
                                        productId={productId}
                                        userId={userId}
                                        comments={comments}
                                    />
                                </div>
                            </div>
                            <div className="product-page__comments-list">
                                {comments.length ? (
                                    <CommentsList
                                        comments={comments}
                                        userId={userId}
                                        onDelete={handleDelete}
                                    />
                                ) : (
                                    <p className="_box">
                                        Будьте первым, кто оставит отзыв...
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </MainLayout>
    );
};

export default ProductPage;
