import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Check if the request URL is the root URL
  if (request.nextUrl.pathname === "/") {
    // Redirect to /dashboard
    return NextResponse.redirect(new URL("/", request.url));
  }

  // Continue with the request if no redirection is needed
  return NextResponse.next();
}

export const config = {
  matcher: "/", // This matcher ensures the middleware is applied only for the root URL
};
