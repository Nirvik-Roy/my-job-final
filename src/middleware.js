

import { NextResponse, NextRequest } from 'next/server'

export function middleware(request) {
    const token = request.cookies.get('job_token')?.value;
    const path = request.nextUrl.pathname;
    if (!token && path !== '/login' && path !== '/register' && path != '/find-job' ) {
        return NextResponse.redirect(new URL('/login', request.url))
    }
    if (token && (path === '/login' || path === '/register')) {
        return NextResponse.redirect(new URL('/', request.url));
    }

    return NextResponse.next()
}

export const config = {
    matcher: ['/dashboard', '/login', '/register', '/find-job','/single-job' ],
}