import React from 'react';

// export const dynamicParams = true;

// export async function generateStaticParams() {
//   // NOTE: will be used when dynamicParams=false
//   //   const { posts } = await getData();

//   //   return posts.map((post) => ({ postId: post.id?.toString() }));

//   // NOTE: will be use when dynamicParams are true
//   return [{ commentId: '1' }, { commentId: '2' }];
// }

const Comment = async ({ params: { commentId } }) => {
  const { comment } = await getCommentDetails(commentId);

  return (
    <div>
      {comment?.id} {comment?.text}{' '}
    </div>
  );
};

export default Comment;

async function getCommentDetails(commentId) {
  const response = await fetch(
    `http://localhost:3000/api/comments/${commentId}`,
    {
      cache: 'no-cache',
    }
  );

  let data = await response.json();
  //   setTimeout(async () => {
  //     console.log('hi');
  //     data = await response.json();
  //   }, 1000);
  return {
    comment: data,
  };
}
