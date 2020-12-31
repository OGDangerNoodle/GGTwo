import React, { useState, useEffect } from 'react';
import '../../public/styles.css'

const Reviews = () => {

  const [reviews, setReviews] = useState([]);

  // useEffect
  useEffect(() => {
    console.log('fetching reviews')
    fetch('/all')
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setReviews(data);
      })
      .catch((err) => console.log(err));
    // empty array below represents componentDidUpdate, 
    // empty array stops the use of useEffect
  }, [])


  const renderReviews = () => {
    console.log('this is state:', reviews)
    return reviews.map(review => {
      // spreading game array to have access to all properties therein
      return (
        <div key={review.title} className='review'>
          <p>Game:{review.title}</p>
          <p>Review:{review.review}</p>
        </div>
      )
    })
  }


  return (
    <div>
      {renderReviews()}
    </div>
  )


}

export default Reviews;