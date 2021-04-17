import { LOGIN_USER, LOGOUT_USER } from "./actionTypes";

export const loginUser = (value, tokenExpiry) => {
    // ? Login user with redux
    let date = new Date();
    date.setDate(date.getDate() + 2);

    localStorage.setItem("userInfo",
        JSON.stringify({ ...value, tokenExpiry: tokenExpiry ? tokenExpiry : date })
    );

    return {
        type: LOGIN_USER,
        payload: value
    }
};

export const logoutUser = () => {
    // ? Logout user with redux
    localStorage.removeItem("userInfo")
    return {
        type: LOGOUT_USER
    }
};