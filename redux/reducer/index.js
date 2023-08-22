import {combineReducers} from 'redux';
import product from './product';
import cart from './cart';


const rootReducer = combineReducers({
    product : product,
    cart : cart
});

export default rootReducer;