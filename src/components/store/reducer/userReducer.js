import { LOGOUT_USER, LOGIN_USER } from "../actions/actionTypes";

const initialState = {
    userInfo: {},
    loggedInUserInfo: {},
    isLoggedIn: false,
    token: null
};

const userReducer = (state = initialState, action) => {
    // ? User State Reducer
    switch(action.type) {
        case LOGIN_USER:
            return {
                ...state,
                loggedInUserInfo: action.payload,
                token: action.payload.token,
                isLoggedIn: true
            }
        case LOGOUT_USER:
            return {
                ...state,
                userInfo: {},
                isLoggedIn: false,
                loggedInUserInfo: {},
                token: null,
            }
    }
    return state;
};

export default userReducer;