// @flow
import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import type {Match} from 'react-router-dom' // came from flow typed
import {Provider} from 'react-redux'
import store from './store'
import Landing from './Landing'
import Search from './Search'
import Details from './Details'
import preload from '../data.json'

const FourOhFour = () => <h1>lol what</h1>
// Parenthesis are not curly braces and ref the return (JSX) so the return is implicit
const App = () => (
    <BrowserRouter>
    <Provider store={store}>
        <div className='app'>
            <Switch>
                <Route exact path="/" component={Landing} />
                <Route path="/search" component={(props) => <Search shows={preload.shows} {...props}/>} />
                <Route path="/details/:id" component={(props: {match: Match}) => {
                    const selectedShow = preload.shows.find(show => props.match.params.id === show.imdbID)
                    return (<Details show={selectedShow} {...props} />)
                }
            } />
                <Route component={FourOhFour} />
            </Switch>
        </div>
        </Provider>
    </BrowserRouter>
)

export default App