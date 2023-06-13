import Link from 'next/link';
import React from 'react';

const PostList = async () => {
  const { posts } = await getData();
  return (
    <>
      <h1>List of Posts</h1>
      {posts.map((post) => {
        return (
          <div key={post?.id}>
            <Link href={`/posts/${post?.id}`} passHref>
              <h2>
                {post?.id} {post?.title}{' '}
              </h2>
            </Link>
            <hr />
          </div>
        );
      })}
    </>
  );
};

export default PostList;

export async function getData() {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
    cache: 'no-cache',
  });
  const data = await response.json();
  // await new Promise((resolve) => setTimeout(resolve, 3000));

  return {
    // posts: data.slice(0, 3),
    posts: data,
  };
}
