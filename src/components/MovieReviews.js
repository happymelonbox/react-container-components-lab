import React from 'react' 

import Review from './Review'

const MovieReviews = ({reviews}) => (
    <div className = "review-list">
        {reviews.map(review => < Review key = {review.display_title} publication_date = {review.publication_date} summary_short = {review.summary_short} display_title ={review.display_title}/>)}
    </div>
)

export default MovieReviews