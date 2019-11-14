// Import is statically used so it can be used by our tools for tree shaking
// Only include code that will be ran
import React from 'react'
import { render } from 'react-dom'
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

render(<App />, document.getElementById('app'))