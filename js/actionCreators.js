import {SET_SEARCH_TERM} from './actions'

export function setSearchTerm(searchTerm) {
    console.log(searchTerm)
    return {type: SET_SEARCH_TERM, payload: searchTerm}
}