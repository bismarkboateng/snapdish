import { authRoutes, publicRoutes } from "./utils";

export function isPublicRoute(pathname: string): boolean {
  return publicRoutes.includes(pathname);
}

export function isProtectedRoute(pathname: string): boolean {
  const protectedRoutes = ["/dashboard"];

  return protectedRoutes.some((route) => pathname.startsWith(route));
}

export function isAuthRoute(pathname: string): boolean {
  return authRoutes.some(
    (route) => pathname === route || pathname.startsWith(route)
  );
}
