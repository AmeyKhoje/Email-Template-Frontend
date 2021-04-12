import { LOGIN_USER } from "./actionTypes";

export const loginUser = value => {
    return {
        type: LOGIN_USER,
        payload: value
    }
};