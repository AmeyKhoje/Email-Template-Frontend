import { HANDLE_EMAIL, HANDLE_LOADING, HANDLE_NOTIFICATION } from "./actionTypes"

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

const closeNotification = () => {
    const notiVal = {
        isNotification: false
    }

    return {
        type: HANDLE_NOTIFICATION,
        value: notiVal
    }
}

export const handleNotification = value => {
    setTimeout(() => {
        console.log("hello");
        closeNotification()
    }, 3000)
    return {
        type: HANDLE_NOTIFICATION,
        value
    }
}