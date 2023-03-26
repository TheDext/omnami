import React from "react";
import { orderBy } from "lodash";
import PropTypes from "prop-types";
import displayDate from "../../../utils/displayDate";
import { ReactComponent as CloseButton } from "../../../icons/closeButton.svg";

const CommentsList = ({ comments, userId, onDelete }) => {
    const sortedComments = orderBy(comments, ["createdAt"], ["desc"]);
    return sortedComments.map(
        ({ comment, _id, createdAt, userName, userId: commentUserId }) => (
            <div
                key={_id}
                className="product-page__comment comment-product _box"
            >
                {commentUserId === userId && (
                    <div className="comment-product__remove">
                        <CloseButton className="comment-product__remove-btn" onClick={() => onDelete(_id)} />
                    </div>
                )}
                <div className="comment-product__text">{comment}</div>
                <div className="comment-product__name">{userName}</div>
                <div className="comment-product__date">
                    {displayDate(createdAt)}
                </div>
            </div>
        )
    );
};

CommentsList.propTypes = {
    comments: PropTypes.array,
    userId: PropTypes.string,
    onDelete: PropTypes.func
};

export default CommentsList;
