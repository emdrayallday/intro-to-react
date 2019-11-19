// @flow
import {createStore, compose, applyMiddleware} from 'redux'
import reducer from './reducers'
import thunk from 'redux-thunk'

const store = createStore(reducer, compose(
    applyMiddleware(thunk),
    typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f))

/**
    if im in the browser and find the dev tools extension, use it, other do nothing
 */
export default store