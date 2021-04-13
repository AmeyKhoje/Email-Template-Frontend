import { LOGOUT_USER, LOGIN_USER } from "../actions/actionTypes";

const initialState = {
    userInfo: {},
    isLoggedIn: false
};

const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOGIN_USER:
            // console.log("Reducer",action.value);
            return {
                ...state,
                userInfo: action.payload,
                isLoggedIn: true
            }
        case LOGOUT_USER:
            return {
                ...state,
                userInfo: {},
                isLoggedIn: false
            }
    }
    return state;
};

export default userReducer;