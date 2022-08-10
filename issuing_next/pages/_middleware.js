import { NextResponse } from "next/server";

export default async function middleware(request) {
    const { cookies } = request;
    const { pathname } = request.nextUrl
    const paths = ["/login", "/register","/password/reset_code","/password/reset","/confirm"]
    const jwt = cookies.CognitoJWT; 
    

    if( pathname.search("favicon") != -1 || 
        pathname.search("fonts") != -1   ||
        pathname.search("images") != -1  || 
        pathname.search("api") != -1     ||
        pathname.search("error") != -1
        ) {
      
    } else if(paths.includes(pathname)){
       
    } else if(jwt === undefined) {
 
        return NextResponse.redirect(new URL('/login', request.url))
    } else {
 
    }
    return NextResponse.next()
  

    


} 