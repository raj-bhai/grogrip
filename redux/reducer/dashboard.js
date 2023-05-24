import {
    TASKS,
    CLIENTTYPE,
    SHEET
} from '../action/dashboard';


const initialState = {
    Task: [],
    ClientType: [],
    Sheet: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case TASKS:
            return {
                ...state,
                Task: action.data,
            };
        case CLIENTTYPE:
            return {
                ...state,
                ClientType: action.data,
            };
        case SHEET:
            return {
                ...state,
                Sheet: action.data,
            };
    }
    return state;
}