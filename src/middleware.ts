// ./middleware
import { auth } from "@/lib/auth";
import { NextResponse } from "next/server";

const publicRoutes = ["/", "/login", "/signup"]; // Add your public routes here

export default auth((req) => {
  // const path = req.nextUrl.pathname;
  // if (publicRoutes.includes(path)) NextResponse.next();
  // console.log("✅✅", req.nextUrl.pathname.startsWith("/courses"));
  // if (req.nextUrl.pathname.startsWith("/courses")) {
  //   return NextResponse.redirect(new URL("/login", req.url));
  // }
  if (!req.auth) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
});

export const config = {
  matcher: ["/app", "/profile", "/search", "/company"],
};