import {combineReducers} from 'redux';
import dashboard from './dashboard';


const rootReducer = combineReducers({
    dashboard: dashboard
});

export default rootReducer;