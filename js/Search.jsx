import React, { Component } from 'react'
import preload from '../data.json'
import ShowCard from './ShowCard'



// react class must 100% have render method, must return markup
class Search extends Component {
    // boiler plate, that you have to do
    constructor(props) {
        super(props)

        this.state = {
            searchTerm: 'this is some sort of debug statement'
        }

        this.handleSearchTermChange = this.handleSearchTermChange.bind(this)
        // do not bind directly on the onChange event
    }

    // Another way to bind this is instead use an arrowfunction which does not create a new context
    // This is dangerous though which uses class properties and not officially in js
    handleSearchTermChange(event) {
        this.setState({ searchTerm: event.target.value })
    }
    render() {
        return (
            <div className='search'>
                <header>
                    <h1>svideo</h1>
                    <input onChange={this.handleSearchTermChange} value={this.state.searchTerm} type="text" placeholder="Search" />
                </header>
                <div>
                    {preload.shows.map(show => (<ShowCard key={show.imdbID} show={show} />))}
                </div>
            </div>
        )
    }
}



export default Search;