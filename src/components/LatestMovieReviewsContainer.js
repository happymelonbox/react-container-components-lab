import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'uJCLFPj5oADfZHBnDngXngNd6RB4ekAb';
const URL_NYT = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;


class LatestMovieReviewsContainer extends Component {
    constructor(){
        super()
        this.state = {
            reviews: []
        }
    }

    showReviews = () => {
            fetch(URL_NYT)
            .then(resp=>resp.json())
            .then(reviewData => {
                this.setState({ reviews: reviewData.results})
            })
        }

    render(){
        return (
            <div className ="latest-movie-reviews" >
                <button onClick={this.showReviews}>Latest Movie Reviews</button>
                < MovieReviews key = {this.state.display_title} reviews={this.state.reviews}/>
            </div>
        )
    }
}

export default LatestMovieReviewsContainer