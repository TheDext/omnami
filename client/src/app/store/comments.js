import { createSlice } from "@reduxjs/toolkit";
import commentService from "../services/comment.service";

const cartSlice = createSlice({
    name: "comments",
    initialState: {
        entities: [],
        errors: null,
        isLoading: false
    },
    reducers: {
        commentLoad: (state) => {
            state.isLoading = true;
        },
        commentEmpty: (state) => {
            state.isLoading = false;
        },
        commentLoaded: (state, action) => {
            state.entities = action.payload;
            state.isLoading = false;
        },
        commentLoadFailed: (state, action) => {
            state.errors = action.payload;
            state.isLoading = false;
        },
        commentCreate: (state) => {
            state.isLoading = true;
        },
        commentCreated: (state, action) => {
            state.entities.push(action.payload);
            state.isLoading = false;
        },
        commentCreateFailed: (state, action) => {
            state.errors = action.payload;
            state.isLoading = false;
        },
        commentRemoved: (state, action) => {
            state.entities = state.entities.filter((c) => c._id !== action.payload);
        }
    }
});

const { reducer: commentsReducer, actions } = cartSlice;
const {
    commentLoad,
    commentEmpty,
    commentLoaded,
    commentLoadFailed,
    commentCreate,
    commentCreated,
    commentCreateFailed,
    commentRemoved
} = actions;

export const loadComments = (productId) => async (dispatch) => {
    dispatch(commentLoad());
    try {
        const data = await commentService.getCommentByProductId(productId);
        if (data.length) {
            dispatch(commentLoaded(data));
        } else {
            dispatch(commentEmpty());
        }
    } catch (error) {
        dispatch(commentLoadFailed(error.message));
    }
};
export const createComment = (comment) => async (dispatch) => {
    dispatch(commentCreate());
    try {
        const data = await commentService.create(comment);
        dispatch(commentCreated(data));
    } catch (error) {
        dispatch(commentCreateFailed(error.message));
    }
};
export const deleteComment = (commentId) => async (dispatch) => {
    try {
        const data = await commentService.delete(commentId);
        if (!data) {
            dispatch(commentRemoved(commentId));
        }
    } catch (error) {}
};

export const getCommentsByProductId = (productId) => (state) =>
    state.comments.entities.filter(
        (comment) => comment.productId === productId
    );

export default commentsReducer;
