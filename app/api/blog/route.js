import { NextResponse } from 'next/server';

export async function GET(Request) {
  // return new Response(JSON.stringify({ name: 'Home API route' }), {
  //   status: 200,
  // });
  return NextResponse.json({ name: 'Blog API route' }, { status: 200 });
}
