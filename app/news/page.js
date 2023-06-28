import React from 'react';

const NewsArticleList = async () => {
  const { articles } = await getNews();
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

export async function getNews() {
  //   console.log('Generating / Regenerating ProductList');
  const response = await fetch(`http://localhost:4000/news`);
  const data = await response.json();

  return {
    articles: data,
  };
}
