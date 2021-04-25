import { CLOSE_NOTIFICATION, HANDLE_EMAIL, HANDLE_LOADING, HANDLE_NOTIFICATION } from "./actionTypes"

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

// const closeNotification = () => {
//     const notiVal = {
//         isNotification: false
//     }

//     return {
//         type: HANDLE_NOTIFICATION,
//         value: notiVal
//     }
// }

export const handleNotification = value => {
    let randomNum = parseInt(new Date().valueOf().toString());
    console.log(randomNum);
    let notiVal = {
        ...value,
        id: randomNum
    }
    console.log(notiVal);
    return {
        type: HANDLE_NOTIFICATION,
        value: notiVal
    }
}

export const closeNotification = value => {
    console.log(value);
    return {
        type: CLOSE_NOTIFICATION,
        value
    }
}