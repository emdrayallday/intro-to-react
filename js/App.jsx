// @flow
import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Landing from './Landing'
import Search from './Search'

const FourOhFour = () => <h1>lol what</h1>
// Parenthesis are not curly braces and ref the return (JSX) so the return is implicit
const App = () => (
    <BrowserRouter>
        <div className='app'>
            <Switch>
                <Route exact path="/" component={Landing} />
                <Route path="/search" component={Search} />
                <Route component={FourOhFour} />
            </Switch>
        </div>
    </BrowserRouter>
)

export default App