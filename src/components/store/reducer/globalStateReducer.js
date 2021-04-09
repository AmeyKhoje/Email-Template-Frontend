import { HANDLE_LOADING } from "../actions/actionTypes";

const initialState = {
    isLoading: false
};

const globalStateReducer = (state = initialState, action) => {
    switch(action.type){
        case HANDLE_LOADING:
            return {
                ...state,
                isLoading: action.value
            }
        default:
            return state;
    }
};

export default globalStateReducer;