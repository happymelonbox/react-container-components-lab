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

    componentDidMount(){
            fetch(URL_NYT)
            .then(resp=>resp.json())
            .then(reviewData => {
                this.setState({ reviews: reviewData.results})
            })
        }

    render(){
        return (
            <div className ="latest-movie-reviews" >
                <h3>Latest Movie Reviews</h3>
                < MovieReviews key = {this.state.summary_short} reviews={this.state.reviews}/>
            </div>
        )
    }
}

export default LatestMovieReviewsContainer