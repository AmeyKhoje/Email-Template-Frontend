import { CLOSE_NOTIFICATION, HANDLE_EMAIL, HANDLE_LOADING, HANDLE_NOTIFICATION, HANDLE_SINGLE_EMAIL } from "./actionTypes"

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

    let notiVal = {
        ...value,
        id: randomNum
    }
    
    return {
        type: HANDLE_NOTIFICATION,
        value: notiVal
    }
}

export const closeNotification = value => {
   
    return {
        type: CLOSE_NOTIFICATION,
        value
    }
}

export const handleSingleEmail = payload => {
    return {
        type: HANDLE_SINGLE_EMAIL,
        payload
    }
}

