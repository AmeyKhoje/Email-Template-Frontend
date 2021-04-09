import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import globalStateReducer from '../store/reducer/globalStateReducer';
import userReducer from '../store/reducer/userReducer';

const rootReducer = combineReducers({
    user: userReducer,
    global: globalStateReducer
});

const logger = store => {
    return next => {
        return action => {
            const result = next(action);
            return result;
        }
    }
};

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer, composeEnhancer(applyMiddleware(logger, thunk)));