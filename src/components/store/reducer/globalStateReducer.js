import { HANDLE_EMAIL, HANDLE_LOADING, HANDLE_NOTIFICATION } from "../actions/actionTypes";

const initialState = {
    isLoading: false,
    isEmail: false,
    isNotification: false,
    notificationInfo: {
        head: 'Notification',
        text: 'Your info is being processed'
    }
};

const globalStateReducer = (state = initialState, action) => {
    // ? Global Actions Reducer
    switch(action.type){
        case HANDLE_LOADING:
            return {
                ...state,
                isLoading: action.value
            }
        case HANDLE_EMAIL:
            return {
                ...state,
                isEmail: action.value
            }
        case HANDLE_NOTIFICATION:
            return {
                ...state,
                isNotification: !state.isNotification,
                notificationInfo: action.value.notificationInfo && action.value.notificationInfo
            }
        default:
            return state;
    }
};

export default globalStateReducer;