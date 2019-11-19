// @flow
import React, { Component } from 'react'
import ShowCard from './ShowCard'
import Header from './Header'


// react class must 100% have render method, must return markup
class Search extends Component {
    // boiler plate, that you have to do
    state = {
        searchTerm: ''
    }

    // NEED A COLON
    props: {
        shows: Array<Show>
    }

    handleSearchTermChange = (event: SyntheticKeyboardEvent & { target: HTMLInputElement }) => {
        this.setState({ searchTerm: event.target.value })
    }

    render() {
        return (
            <div className='search'>
            <Header searchTerm={this.state.searchTerm} showSearch handleSearchTermChange={this.handleSearchTermChange} />

                <div>
                    {this.props.shows
                        .filter(show => `${show.title} ${show.description}`.toUpperCase().indexOf(this.state.searchTerm.toUpperCase()) >= 0)
                        .map(show => (<ShowCard key={show.imdbID} show={show} />))}
                </div>
            </div>
        )
    }
}



export default Search;