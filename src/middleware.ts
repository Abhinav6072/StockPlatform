import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const isDashboard = request.nextUrl.pathname.startsWith("/dashboard");
  const sessionToken = request.cookies.get("next-auth.session-token")?.value
    ?? request.cookies.get("__Secure-next-auth.session-token")?.value;
  const isLoggedIn = !!sessionToken;

  if (isDashboard && !isLoggedIn) {
    return NextResponse.redirect(
      new URL("/login?callbackUrl=/dashboard", request.url)
    );
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
