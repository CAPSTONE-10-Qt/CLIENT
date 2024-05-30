import middleware from "next-auth/middleware";

export default middleware;

export const config = {
  matcher: ["/interview/((?!setup).*)(.+)", "/question/:path*", "/my"],
};
