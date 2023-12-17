import { getServerSession } from 'next-auth';
import { getSession } from 'next-auth/react';
import React from 'react';
import { authOptions } from '../lib/auth';
import { redirect } from 'next/navigation';

const Blog = async () => {
  const { data, session } = await getSessionDetails()
  
  if (!session) {
    redirect(`/api/auth/signin?callbackUrl=${process.env.NEXT_PUBLIC_CALLBACK_URL}/blog`,'replace')
  }

  return <h1>Blog Page - {data}</h1>;
};

async function getSessionDetails() {
  const session = await getServerSession(authOptions);

  console.log({session});
  
  return {
    session,
    data: session ? 'List of 100 personalized blogs': 'List of free blogs'
  }
}

export default Blog;
