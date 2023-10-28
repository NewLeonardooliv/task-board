import { NextResponse, NextRequest } from "next/server";
import { PATHNAMES } from "./constants/pathnames.constant";

export default async function middleware(request: NextRequest) {
  const hasToken = request.cookies.has("token");

  if (!hasToken && request.nextUrl.pathname === PATHNAMES.FIRST_ACCESS) {
    return;
  }

  if (!hasToken && request.nextUrl.pathname !== PATHNAMES.SIGNIN) {
    return NextResponse.redirect(new URL("/auth/signin", request.url));
  }

  if (hasToken && request.nextUrl.pathname === PATHNAMES.SIGNIN) {
    return NextResponse.redirect(new URL("/", request.url));
  }
}

export const config = {
  matcher: "/((?!api|_next|static|public|favicon.ico).*)",
};
