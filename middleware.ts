import { NextRequest, NextResponse } from "next/server";
import { isProtectedRoute, isAuthRoute, isPublicRoute } from "@/lib/auth-utils";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const sessionCookie = request.cookies.get(
    `a_session_${process.env.APPWRITE_PROJECT_ID}`
  );
  
  const isAuthenticated = Boolean(sessionCookie?.value);
  const isProtected = isProtectedRoute(pathname);
  const isAuth = isAuthRoute(pathname);
  const isPublic = isPublicRoute(pathname);

  if (!isAuthenticated && isProtected) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("redirect", pathname);
    return NextResponse.redirect(loginUrl);
  }

  if (isAuthenticated && isAuth) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  if (isAuthenticated && pathname === "/") {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  if (isPublic) {
    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\.png$|.*\\.jpg$|.*\\.jpeg$|.*\\.gif$|.*\\.svg$|.*\\.webp$).*)",
  ],
};
