import { HANDLE_EMAIL, HANDLE_LOADING } from "./actionTypes"

export const handleLoading = value => {
    return {
        type: HANDLE_LOADING,
        value: value
    }
}

export const handleEmail = value => {
    return {
        type: HANDLE_EMAIL,
        value: value
    }
}