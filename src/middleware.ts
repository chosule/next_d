import { NextRequest, NextResponse } from "next/server";

export function middleware(request:NextRequest) {
     console.log('미들웨어가 실행중');
    if(request.nextUrl.pathname.startsWith('/products/1004')){
        console.log('미들웨어 - 경로 리다이렉팅');
        return NextResponse.redirect(new URL('/products',request.url)) //기존의 baseurl
    }
}


// 특정페이지에서만 필요한 경우에만 설정
export const config = {
    matcher: ['/products/:path+']
}