// @flow

import React from 'react'
import { render } from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import App from './App'


const renderApp = () => {
    render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('app'))
}

renderApp()

if (module.hot) {
    module.hot.accept('./App', () => {
        renderApp()
    })
}

/*
    * This is a webpack thing

    When in development, module.hot will be true. Anytime the app has changed,
    call the function, rerender the the entire app
*/