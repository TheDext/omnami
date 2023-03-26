import { createAction, createSlice } from "@reduxjs/toolkit";
import userService from "../services/user.service";
import authService from "../services/auth.service";
import localStorageService from "../services/localStorage.service";
import generateAuthErrors from "../utils/generateAuthErrors";

const initialState = localStorageService.getAccessToken()
    ? {
          entities: null,
          isLoading: true,
          error: null,
          isLoggedIn: true,
          dataLoaded: false
      }
    : {
          entities: null,
          isLoading: false,
          error: null,
          auth: null,
          isLoggedIn: false,
          dataLoaded: false
      };

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        userRequested: (state) => {
            state.isLoading = true;
        },
        userReceived: (state, action) => {
            state.entities = action.payload;
            state.dataLoaded = true;
            state.isLoading = false;
        },
        userRequestFailed: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        },
        authRequestSuccess: (state, action) => {
            state.auth = action.payload;
            state.isLoggedIn = true;
        },
        authRequestFailed: (state, action) => {
            state.error = action.payload;
        },
        userCreated: (state, action) => {
            if (!Array.isArray(state.entities)) {
                state.entities = [];
            }
            state.entities.push(action.payload);
        },
        userUpdated: (state, action) => {
            state.entities = action.payload;
        },
        userLoggedOut: (state) => {
            state.entities = null;
            state.isLoggedIn = false;
            state.auth = null;
            state.dataLoaded = false;
        }
    }
});

const { reducer: usersReducer, actions } = usersSlice;
const {
    userRequested,
    userReceived,
    userRequestFailed,
    authRequestSuccess,
    authRequestFailed,
    userLoggedOut,
    userUpdated
} = actions;

const authRequested = createAction("users/authRequested");
const updateUserRequest = createAction("users/updateUserRequest");
const updateUserFailed = createAction("users/updateUserFailed");

export const login =
    ({ payload, redirect }) =>
    async (dispatch) => {
        const { email, password } = payload;
        dispatch(authRequested());
        try {
            const data = await authService.login({ email, password });
            dispatch(authRequestSuccess({ userId: data.localId }));
            localStorageService.setTokens(data);
            redirect();
        } catch (error) {
            const { code, message } = error.response.data.error;
            if (code === 400) {
                const authError = generateAuthErrors(message);
                dispatch(authRequestFailed(authError));
            } else {
                dispatch(authRequestFailed(error.message));
            }
        }
    };

export const signUp =
    ({ payload, redirect }) =>
    async (dispatch) => {
        console.log(payload);
        dispatch(authRequested());
        try {
            const data = await authService.register(payload);
            localStorageService.setTokens(data);
            dispatch(authRequestSuccess({ userId: data.userId }));
            redirect();
        } catch (error) {
            dispatch(authRequestFailed(error.message));
        }
    };

export const logOut = () => (dispatch) => {
    localStorageService.removeAuthData();
    localStorageService.resetCart();
    dispatch(userLoggedOut());
};

export function updateUser(payload) {
    return async function (dispatch) {
        dispatch(updateUserRequest());
        try {
            const { content } = await userService.update(payload);
            dispatch(userUpdated(content));
        } catch (error) {
            dispatch(updateUserFailed(error.message));
        }
    };
}

export const loadUserData = () => async (dispatch) => {
    dispatch(userRequested());
    try {
        const { content } = await userService.getCurrentUser();
        dispatch(userReceived(content));
    } catch (error) {
        dispatch(userRequestFailed(error.message));
    }
};

export const getCurrentUserData = () => (state) => state.users.entities;
export const getUserInfo = (userId) => (state) => {
    if (state.users.entities) {
        return state.users.entities.find((u) => u._id === userId);
    }
};

export const getIsLoggedIn = () => (state) => state.users.isLoggedIn;
export const getDataStatus = () => (state) => state.users.dataLoaded;
export const getUsersLoadingStatus = () => (state) => state.users.isLoading;
export const getCurrentUserId = () => (state) => state.users.entities?._id;
export const getAuthErrors = () => (state) => state.users.error;
export const getOrdersList = () => (state) => state.users.entities.orders;
export const getUserName = () => (state) => state.users.entities?.name;

export default usersReducer;
