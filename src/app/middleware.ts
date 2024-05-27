// import { getToken } from "next-auth/jwt";
// import { NextRequest, NextResponse } from "next/server";

// const FALLBACK_URL = "";
// const withAuth = async (req: NextRequest, token: boolean) => {
//   const url = req.nextUrl.clone();
//   const { pathname } = req.nextUrl;
//   if (!token) {
//     url.pathname = "/login";
//     url.search = `callbackUrl=${pathname}`;
//     return NextResponse.redirect(url);
//   }
// };

// const withOutAuth = async (
//   req: NextRequest,
//   token: boolean,
//   to: string | null,
// ) => {
//   const url = req.nextUrl.clone();
//   const { pathname } = req.nextUrl;
//   if (token) {
//     url.pathname = to ?? FALLBACK_URL;
//     url.search = "";
//     return NextResponse.redirect(url);
//   }
// };

// const withAuthList = ["/mypage", "/write"];
// const withOutAuthList = ["/login", "/signup"];

// export default async function middleware(req: NextRequest) {
//   let cookie = req.cookies.get("Authroization")?.value || "";
//   const requestHeaders = new Headers(req.headers);
//   requestHeaders.set("Authroization", cookie);
//   const token = await getToken({ req });
//   const { searchParams } = req.nextUrl;
//   const callbackUrl = searchParams.get("callbackUrl");
//   const pathname = req.nextUrl.pathname;
//   const isWithAuth = withAuthList.includes(pathname);
//   const isWithOutAuth = withOutAuthList.includes(pathname);
//   if (isWithAuth) return withAuth(req, !!token);
//   if (isWithOutAuth) return withOutAuth(req, !!token, callbackUrl);
// }

// export const config = {
//   mathcher: [...withAuthList, ...withOutAuthList],
// };
