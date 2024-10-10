import { NextURL } from "next/dist/server/web/next-url";
import { NextRequest, NextResponse } from "next/server"

export default function middleware(request: NextRequest) {
     
    const {pathname, origin} = request.nextUrl; 
    
    if((pathname === "/dashboard") && !request.cookies.get("cookieToken")?.value) {
         const loginUrl = new NextURL("/login", origin)
         return NextResponse.redirect(loginUrl)
    } else {
       return NextResponse.next()   
    }
 }

 