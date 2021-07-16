import { CLOSE_NOTIFICATION, HANDLE_EMAIL, HANDLE_LOADING, HANDLE_NOTIFICATION, HANDLE_SINGLE_EMAIL } from "../actions/actionTypes";

const initialState = {
    isLoading: false,
    isEmail: false,
    isNotification: false,
    isSingleEmail: false,
    notificationInfo: [
        {
            id: 1,
            head: 'Notification',
            text: 'Your info is being processed'
        }
    ],
    singleEmail: {
        title: "Test Email",
        from: "ameykhoje@gmail.com",
        to: ["ameykhoje@gmail.com"],
        message: "Test Message"
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
            let arr1 = state.notificationInfo;
            if(state.notificationInfo.length >= 3) {
                arr1 = arr1.filter(x => x.id !== arr1[0].id);
                let arr2 = arr1.concat(action.value)
                return {
                    ...state,
                    notificationInfo: arr2
                }
            }
            return {
                ...state,
                notificationInfo: state.notificationInfo.concat(action.value)
            }
        case CLOSE_NOTIFICATION:
            let notiArr = state.notificationInfo.filter(x => x.id !== action.value);
            return {
                ...state,
                notificationInfo: notiArr
            }
        case HANDLE_SINGLE_EMAIL:
            return {
                ...state,
                isSingleEmail: action.payload.isOpen,
                singleEmail: action.payload?.data
            }
        default:
            return state;
    }
};

export default globalStateReducer;