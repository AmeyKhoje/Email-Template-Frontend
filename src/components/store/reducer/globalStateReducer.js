import { HANDLE_EMAIL, HANDLE_LOADING } from "../actions/actionTypes";

const initialState = {
    isLoading: false,
    isEmail: false
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
        default:
            return state;
    }
};

export default globalStateReducer;