import { NextResponse } from "next/server";
import {User} from "../models/users";
import dbconnection from "../database/config";

dbconnection();
export async function POST(request: Request) {
    const body = await request.json();
    const user = await User.create(body);
    return NextResponse.json(user);
}