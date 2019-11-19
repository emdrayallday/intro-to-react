// @flow
import React from 'react'
import { Route, Switch } from 'react-router-dom'
import type {Match} from 'react-router-dom' // came from flow typed
import {Provider} from 'react-redux'
import store from './store'
import AsyncRoute from './AsyncRoute'
import preload from '../data.json'

const FourOhFour = () => <h1>lol what</h1>
// Parenthesis are not curly braces and ref the return (JSX) so the return is implicit
const App = () => (
    <Provider store={store}>
        <div className='app'>
            <Switch>
                <Route exact path="/" component={props => <AsyncRoute props={props} loadingPromise={import('./Landing')} />}  />
                <Route path="/search" component={props => <AsyncRoute props={Object.assign({shows: preload.shows}, props)} loadingPromise={import('./Search')} />} />
                <Route path="/details/:id" component={(props: {match: Match}) => {
                    const selectedShow = preload.shows.find(show => props.match.params.id === show.imdbID)
                    return (
                    <AsyncRoute 
                        props={Object.assign({show: selectedShow, match: {} }, props)} 
                        loadingPromise={import('./Details')} 
                    />)
                }
            } />
                <Route component={FourOhFour} />
            </Switch>
        </div>
        </Provider>
)

export default App