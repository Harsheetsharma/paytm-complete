import { url } from "inspector";
import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req: NextRequest) {
    const token = await getToken({ req: req as any });
    if (!token) {
        return NextResponse.next();
    }
    const currenturl = req.nextUrl.pathname;

    if ((!token.name || token.name.trim() === "") && currenturl !== "/setName") {
        const url = req.nextUrl.clone();
        url.pathname = "/setName"
        return NextResponse.redirect(url)
    }
    return NextResponse.next();
}

export const config = {
    matcher: ["/((?!api|_next|signin|setName|favicon.ico).*)"]
}