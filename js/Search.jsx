// @flow
import React, { Component } from 'react'
import preload from '../data.json'
import ShowCard from './ShowCard'



// react class must 100% have render method, must return markup
class Search extends Component {
    // boiler plate, that you have to do
    state = {
        searchTerm: ''
    }
    handleSearchTermChange = (event: SyntheticKeyboardEvent & { target: HTMLInputElement }) => {
        this.setState({ searchTerm: event.target.value })
    }

    render() {
        return (
            <div className='search'>
                <header>
                    <h1>{this.state.searchTerm}</h1>
                    <input onChange={this.handleSearchTermChange} value={this.state.searchTerm} type="text" placeholder="Search" />
                </header>
                <div>
                    {preload.shows
                        .filter(show => `${show.title} ${show.description}`.toUpperCase().indexOf(this.state.searchTerm.toUpperCase()) >= 0)
                        .map(show => (<ShowCard key={show.imdbID} show={show} />))}
                </div>
            </div>
        )
    }
}



export default Search;