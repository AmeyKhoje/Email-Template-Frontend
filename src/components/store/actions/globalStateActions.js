import { HANDLE_LOADING } from "./actionTypes"

export const handleLoading = value => {
    return {
        type: HANDLE_LOADING,
        value: value
    }
}