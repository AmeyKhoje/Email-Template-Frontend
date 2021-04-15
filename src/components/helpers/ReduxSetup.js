import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import globalStateReducer from '../store/reducer/globalStateReducer';
import userReducer from '../store/reducer/userReducer';

// ? Combine Reducers
const rootReducer = combineReducers({
    user: userReducer,
    global: globalStateReducer
});

// ? Middleware
const logger = store => {
    return next => {
        return action => {
            const result = next(action);
            return result;
        }
    }
};

// ? Enable Redux Chrome Devtools
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// ? Creating store and export it.
export const store = createStore(rootReducer, composeEnhancer(applyMiddleware(logger, thunk)));