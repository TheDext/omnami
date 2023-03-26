import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { createComment, loadComments } from "../../../store/comments";
import TextAreaField from "../../form/textAreaField";

const AddComment = ({ productId, userId }) => {
    const dispatch = useDispatch();
    const [commentData, setCommentData] = useState("");
    const [error, setError] = useState("");
    useEffect(() => {
        dispatch(loadComments(productId));
    }, []);

    const handleChange = ({ value }) => {
        setCommentData((prevState) => ({
            ...prevState,
            value
        }));
    };
    const handleSubmit = (e) => {
        const { value: comment } = commentData;
        e.preventDefault();
        if (userId) {
            dispatch(
                createComment({
                    comment: comment.trim(),
                    userId,
                    productId
                })
            );
            setCommentData("");
        } else {
            setError(
                "Чтобы оставить коментарий необходимо войти в учетную запись"
            );
        }
    };
    return (
        <>
            <form className="product-page__form _box" onSubmit={handleSubmit}>
                <div className="product-page__form-title _small-title">
                    Вам всё понравилось? <br /> Поделитесь впечатлениями о
                    качестве этого продукта.
                </div>
                <TextAreaField
                    label="Комментарий"
                    name="comment"
                    value={commentData.value || ""}
                    onChange={handleChange}
                />
                {error && <h1 className="product-page__form-error">{error}</h1>}
                <button
                    disabled={
                        !commentData.value || commentData.value.trim() === ""
                    }
                    className="product-page__form-submit"
                >
                    Отправить
                </button>
            </form>
        </>
    );
};

AddComment.propTypes = {
    productId: PropTypes.string,
    userId: PropTypes.string
};

export default AddComment;
