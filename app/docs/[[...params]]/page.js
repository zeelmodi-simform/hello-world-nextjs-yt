import React from 'react';

const Doc = ({ params: { params } }) => {
  if (params?.length === 2) {
    return (
      <h1>
        Viewing docs for Feature {params[0]} and Concept {params[1]}
      </h1>
    );
  } else if (params?.length === 1) {
    return <h1>Viewing docs for Feature {params[0]} </h1>;
  }

  return <h1>Docs Home Page {JSON.stringify(params)}</h1>;
};

export default Doc;

// URL: http://localhost:3000/docs/feature1/concept/example1
// Ref: https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes#catch-all-segments
