import { createAction, createSlice } from "@reduxjs/toolkit";
import userService from "../services/user.service";
import authService from "../services/auth.service";
import localStorageService from "../services/localStorage.service";
// import history from "../utils/history";
import generateAuthErrors from "../utils/generateAuthErrors";

const initialState = localStorageService.getAccessToken()
    ? {
          entities: null,
          isLoading: true,
          error: null,
          auth: { userId: localStorageService.getUserId() },
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
    userCreated,
    userLoggedOut,
    userUpdated
} = actions;

const authRequested = createAction("users/authRequested");
const userCreateRequested = createAction("users/userCreateRequested");
const createUserFailed = createAction("users/createUserFailed");
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
    ({ email, password, name }) =>
    async (dispatch) => {
        dispatch(authRequested());
        try {
            const data = await authService.register({ email, password });
            localStorageService.setTokens(data);
            dispatch(authRequestSuccess({ userId: data.localId }));
            dispatch(
                createUser({
                    _id: data.localId,
                    email,
                    name
                })
            );
        } catch (error) {
            dispatch(authRequestFailed(error.message));
        }
    };

export const logOut = () => (dispatch) => {
    localStorageService.removeAuthData();
    dispatch(userLoggedOut());
    history.push("/");
};

function createUser(payload) {
    return async function (dispatch) {
        dispatch(userCreateRequested());
        try {
            const { content } = await userService.create(payload);
            dispatch(userCreated(content));
            history.push("/profile");
        } catch (error) {
            dispatch(createUserFailed(error.message));
        }
    };
}

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

// export const getUsersList = () => (state) => state.users.entities;
export const getCurrentUserData = () => (state) => state.users.entities;
// export const getCurrentUserData = () => (state) => {
//     return state.users.entities
//         ? state.users.entities.find((u) => u._id === state.users.auth.userId)
//         : null;
// };
export const getUserInfo = (userId) => (state) => {
    if (state.users.entities) {
        return state.users.entities.find((u) => u._id === userId);
    }
};

export const getIsLoggedIn = () => (state) => state.users.isLoggedIn;
export const getDataStatus = () => (state) => state.users.dataLoaded;
export const getUsersLoadingStatus = () => (state) => state.users.isLoading;
export const getCurrentUserId = () => (state) => state.users.auth.userId;
export const getAuthErrors = () => (state) => state.users.error;

export default usersReducer;
