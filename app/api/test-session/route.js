import { authOptions } from "@/app/lib/auth";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

// http://localhost:3000/api/test-session
export async function GET(request) {
  const session = await getServerSession(authOptions);
  console.log(session);

    if (!session) {
        return NextResponse.json({ error: 'Unauntheticated user' }, { status: 401 });
    }
    
    return NextResponse.json({
        message: 'success',
        session
    }, {status: 200});
}