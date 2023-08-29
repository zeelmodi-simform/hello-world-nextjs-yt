// 'use client';

import { useRouter } from 'next/navigation';
import { NextResponse } from 'next/server';
import React from 'react';
import { headers, cookies } from 'next/headers';

const ArticleListByCategory = async ({ params: { category } }) => {
  // const router = useRouter();
  // router.setCookie('name', 'Zeel');

  // cookies().set('name', 'Zeel');
  // console.log('cookie', cookies().get('name'));

  const { articles } = await getArticleDetails(category);

  // useEffect(() => {
  // const nextCookies = cookies();
  // nextCookies.set('name', 'Zeel');
  // console.log(nextCookies.get('name'));
  // }, []);

  return (
    <>
      <h1>Showing news for Category: {category}</h1>
      {articles.map((article) => {
        return (
          <div key={article?.id}>
            <h2>
              {article?.id} {article?.title}
            </h2>
            <p>{article?.category}</p>
            <hr />
          </div>
        );
      })}
    </>
  );
};

export default ArticleListByCategory;

export async function getArticleDetails(categoryName) {
  //   console.log('Generating / Regenerating ProductList');

  // document.cookie = 'name=Zeel';

  // 'use server';

  // let response = NextResponse.next();
  // response.cookies.set('name', 'Zeel');

  // setCookie();

  const responseData = await fetch(
    `http://localhost:4000/news?category=${categoryName}`
  );
  const data = await responseData.json();

  return {
    articles: data,
  };
}
