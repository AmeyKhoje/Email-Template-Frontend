import { LOGIN_USER, LOGOUT_USER } from "./actionTypes";

export const loginUser = (value) => {
    // ? Login user with redux
    localStorage.setItem("userInfo",
        JSON.stringify(value)
    );

    return {
        type: LOGIN_USER,
        payload: value
    }
};

export const logoutUser = () => {
    // ? Logout user with redux
    return {
        type: LOGOUT_USER
    }
};