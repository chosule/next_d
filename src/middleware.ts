import { NextRequest, NextResponse } from "next/server";

export function middleware(request:NextRequest) {
     console.log('미들웨어가 실해되고있음 !!');
    if(request.nextUrl.pathname.startsWith('/products/1004')){
        console.log('미들웨어 - 경로 리다이렉팅');
        return NextResponse.redirect(new URL('/products',request.url)) //기존의 baseurl
    }
}