import React from 'react';

// export const dynamicParams = false;

// export async function generateStaticParams() {
//   // NOTE: will be used when dynamicParams=false
//     const response = await fetch(`http://localhost:3000/api/comments`);
//     const data = await response.json();
//     console.log({data});

//     return data.map((comment) => ({ commentId: comment.id?.toString() }));

//   // NOTE: will be use when dynamicParams are true
//   // return [{ commentId: '1' }, { commentId: '2' }];
// }

// const Comment = async ({ params: { commentId } }) => {
//   const { comment } = await getCommentDetails(commentId);

//   return (
//     <div>
//       {comment?.id} {comment?.text}{' '}
//     </div>
//   );
// };


const CommentPage = () => {
  return (
    <div>
      CommentPage
    </div>
  )
}

export default CommentPage



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
