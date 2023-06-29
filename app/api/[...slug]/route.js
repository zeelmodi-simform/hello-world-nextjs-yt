import { NextResponse } from 'next/server';

export async function GET(request, { params: { slug } }) {
  return NextResponse.json(slug, {
    status: 200,
  });
}
