import { NextResponse } from "next/server"
import { NextRequest } from "next/server";
import users from './data'

export async function GET(request:NextRequest) {
    let searchParams = request.nextUrl.searchParams;
    let query = searchParams.get('query');
    let filterUsers =  query ? users.filter((user) => user.name.includes(query)) : users;

    return NextResponse.json(filterUsers)
}
    


export async function POST(request: Request) {
    const body = await request.json();
    users.push(body)
    return NextResponse.json(users)
}