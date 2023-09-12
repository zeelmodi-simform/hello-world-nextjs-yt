import { draftMode } from 'next/headers';
import React from 'react';

const NewsArticleList = async () => {

  const {isEnabled} = draftMode()

  const { articles } = await getNews(isEnabled);
  return (
    <>
      <h1>List of News Articles</h1>
      {articles.map((article) => {
        return (
          <div key={article?.id}>
            <h2>
              {article?.id} {article?.title} | {article?.category}{' '}
            </h2>
          </div>
        );
      })}
    </>
  );
};

export default NewsArticleList;

export async function getNews(isDraftMode) {

  if (isDraftMode) {
    return {articles: [{
      "id": 1,
      "title": "Draft article",
      "description": "This is a draft article",
      "category": "draft"
    },]}
  }

  //   console.log('Generating / Regenerating ProductList');
  const response = await fetch(`http://localhost:4000/news`);
  const data = await response.json();

  
  return {
    articles:  data,
  };
}
