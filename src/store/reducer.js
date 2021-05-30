import * as actionTypes from './actionTypes';

const initialState = {
    test: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case (actionTypes.REDUX_TEST):
            return {
                ...state,
                test: true
            }
        default:
            return state
    }
}

export default reducer;