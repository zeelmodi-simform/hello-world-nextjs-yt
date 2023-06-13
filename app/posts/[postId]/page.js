// import { useRouter } from 'next/router';
import React from 'react';
import { getData } from '../page';

// ref: https://nextjs.org/docs/app/building-your-application/upgrading/app-router-migration#dynamic-paths-getstaticpaths

// ref: https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config#dynamicparams
export const dynamicParams = false;

export async function generateStaticParams() {
  // NOTE: will be used when dynamicParams=false
  const { posts } = await getData();

  return posts.map((post) => ({ postId: post.id?.toString() }));

  // return [{ postId: '1' }, { postId: '2' }]; NOTE: will be use when dynamicParams are true
}

const Post = async ({ params: { postId } }) => {
  const { post } = await getPostDetails(postId);
  //   const router = useRouter();
  return (
    <>
      <h2>
        {post?.id} {post?.title}
      </h2>
      <p>{post?.body}</p>
    </>
  );
};

export default Post;

async function getPostDetails(postId) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`,
    { cache: 'no-cache' }
  );
  let data = await response.json();
  //   setTimeout(async () => {
  //     console.log('hi');
  //     data = await response.json();
  //   }, 1000);
  return {
    post: data,
  };
}
