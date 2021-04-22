import { LOGIN_USER, LOGOUT_USER, STORE_USER_DATA, STORE_USER_EMAILS } from "./actionTypes";

export const loginUser = (value, tokenExpiry) => {
    // ? Login user with redux
    let date = new Date();
    let date2 = new Date(date.setDate(date.getDate() + 2));
    let currentDate = new Date()
    
    let timeRemaining = date2.getTime() - currentDate.getTime()

    localStorage.setItem("userInfo",
        JSON.stringify({ ...value, expiryDate: date2, timeRemaining: tokenExpiry ? tokenExpiry : timeRemaining })
    );

    localStorage.setItem("isLoggedIn", JSON.stringify(true));

    return {
        type: LOGIN_USER,
        payload: value
    }
};

export const logoutUser = () => {
    // ? Logout user with redux
    localStorage.removeItem("userInfo");
    localStorage.setItem("isLoggedIn", JSON.stringify(false));
    return {
        type: LOGOUT_USER
    }
};

export const storeUserInfo = (value) => {
    return {
        type: STORE_USER_DATA,
        payload: value
    }
};

export const storeUserSentEmails = value => {
    return {
        type: STORE_USER_EMAILS,
        payload: value
    }
};