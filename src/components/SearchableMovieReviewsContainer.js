import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'uJCLFPj5oADfZHBnDngXngNd6RB4ekAb';
const URL = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=${NYT_API_KEY}`;


class SearchableMovieReviewsContainer extends Component {
    constructor(){
        super()
        this.state = {
            reviews: [],
            searchTerm: ''
        }
    }

    fetchInfo = (searchParam) => {
        fetch(`${URL}&query=${searchParam}`)
        .then(resp=>resp.json())
        .then(data=>console.log(data.results))
    }

    handleSearchChange = (event) => {
        this.setState({
            searchTerm: event.target.value
        })
    }

    setSearchParams = (event) => {
        event.preventDefault()
        this.fetchInfo(this.state.searchTerm)
    }
    render(){
        return (
            <div>
                <form onSubmit={this.setSearchParams}>
                    <input type="text" placeholder="Search for review" onChange={this.handleSearchChange}></input>
                    <button type="submit">Search</button>
                </form>
            </div>
            )
    }

}

export default SearchableMovieReviewsContainer
