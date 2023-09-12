// route handler enabling draft mode
import { draftMode } from 'next/headers'
import { redirect } from 'next/navigation'
 
export async function GET(request) {

const { searchParams } = new URL(request.url)
  const redirectURL = searchParams.get('redirect')
// http://localhost:3000/api/preview?redirect=/news


  draftMode().enable()
    //   return new Response('Draft mode is enabled')
    redirect(redirectURL)
};