import {SET_SEARCH_TERM} from './actions'

const DEFAULT_STATE = {
    searchTerm: ''
}

const setSearchTerm = (state, action) => {
    // return new state, not modify old one
    // must return new object. 
    // only override searchTerm
    Object.assign({}, state, {searchTerm: action.payload})
}

const rootReducer = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case SET_SEARCH_TERM:
            return setSearchTerm(state, action)
        default:
            return state;
    }
}

export default rootReducer