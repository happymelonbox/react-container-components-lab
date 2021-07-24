import React from 'react'

const MovieReviews = ({ reviews }) => {
    return (
        <div className="review-list">
            {reviews.map(eachReview)}
        </div>
    )
}

const eachReview = ({display_title, publication_date, summary_short}) =>{
    return (
        <ul className = "review" key={display_title+summary_short}>
            <li className="display_title">{display_title}</li>
            <li className="publication_date">{publication_date}</li>
            <li className="summary_short">{summary_short}</li>
        </ul>
    )
}

export default MovieReviews