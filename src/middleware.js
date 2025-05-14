import { NextResponse } from "next/server";
const user = true;
export const middleware = (request) => {
  if (!user) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
};
export const config = {
  matcher: "/dashboard",
};
