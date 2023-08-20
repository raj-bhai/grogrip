import {combineReducers} from 'redux';
import product from './product';


const rootReducer = combineReducers({
    product : product
});

export default rootReducer;