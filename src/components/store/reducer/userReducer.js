import { LOGOUT_USER, PERSIST_USER } from "../actions/actionTypes";

const initialState = {
    userInfo: {},
    isLoggedIn: false
};

const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case PERSIST_USER:
            localStorage.setItem(
                "userInfo",
                JSON.stringify({
                    user: action.value,
                })
            );

            return {
                ...state,
                userInfo: action.value,
                isLoggedIn: true
            }
        case LOGOUT_USER:
            localStorage.removeItem("userInfo");

            return {
                ...state,
                userInfo: {},
                isLoggedIn: false
            }
    }
    return state;
};

export default userReducer;