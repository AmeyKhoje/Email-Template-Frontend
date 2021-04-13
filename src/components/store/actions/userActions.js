import { LOGIN_USER } from "./actionTypes";

export const loginUser = value => {
    console.log(value);
    return {
        type: LOGIN_USER,
        payload: value
    }
};