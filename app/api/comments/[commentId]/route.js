import { comments } from '@/app/_data/comments';
import { NextResponse } from 'next/server';

export async function GET(request, { params: { commentId } }) {
  // return new Response(JSON.stringify({ name: 'Home API route' }), {
  //   status: 200,
  // });

  const comment = comments.find(
    (comment) => comment?.id === parseInt(commentId)
  );
  return NextResponse.json(comment, { status: 200 });
}

export async function DELETE(request, { params: { commentId } }) {
  const deletedComment = comments?.find(
    (comment) => comment?.id === parseInt(commentId)
  );

  const index = comments.findIndex(
    (comment) => comment?.id === parseInt(commentId)
  );
  comments.splice(index, 1);

  return NextResponse.json(deletedComment, { status: 200 });
}
