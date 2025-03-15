// this token valid for 30 days from the time it was created
//this generally doesn't need in real world applications, but here just to understand the concept under the hood,
import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request : NextRequest) {
  const token = await getToken({req: request,secret: process.env.AUTH_SECRET}) //await this gettoken because it returns a promise object that we need to wait for
  return NextResponse.json(token);
}