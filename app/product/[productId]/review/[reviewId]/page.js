import React from 'react';

const ReviewDetails = ({ params }) => {
  const { productId, reviewId } = params;

  return (
    <h1>
      Review {reviewId} for product {productId}
    </h1>
  );
};

export default ReviewDetails;
