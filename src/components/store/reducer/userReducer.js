import { LOGOUT_USER, LOGIN_USER, STORE_USER_DATA, STORE_USER_EMAILS } from "../actions/actionTypes";

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
        case STORE_USER_DATA:
            return {
                ...state,
                userInfo: action.payload
            }
        case STORE_USER_EMAILS:
            return {
                ...state,
                userSentEmails: action.payload
            }
    }
    return state;
};

export default userReducer;