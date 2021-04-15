import { HANDLE_EMAIL, HANDLE_LOADING } from "./actionTypes"

export const handleLoading = value => {
    // ? Handle Loading actions
    // ? Accepts Boolean value
    return {
        type: HANDLE_LOADING,
        value: value
    }
}

export const handleEmail = value => {
    // ? Handle Email Box
    // ? Accepts Boolean value
    return {
        type: HANDLE_EMAIL,
        value: value
    }
}