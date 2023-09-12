import { draftMode } from 'next/headers'
 
export async function GET(request) {
    // http://localhost:3000/api/disable-draft to disable draft mode
  draftMode().disable()
  return new Response('Draft mode is disabled')
}