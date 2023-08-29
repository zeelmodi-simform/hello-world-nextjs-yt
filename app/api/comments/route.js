import { NextResponse } from 'next/server';
import { comments } from '@/app/_data/comments';

export async function GET(request) {
  // return new Response(JSON.stringify({ name: 'Home API route' }), {
  //   status: 200,
  // });
  return NextResponse.json(comments, { status: 200 });
}

export async function POST(request) {
  const { comment } = await request.json();

  if (!comment) {
    return new NextResponse(
      JSON.stringify({ name: 'Please provide something to search for' }),
      { status: 400 }
    );
  }

  const newComment = {
    id: Date.now(),
    text: comment,
  };
  comments.push(newComment);

  return new NextResponse(JSON.stringify(newComment), {
    status: 201,
  });
}
