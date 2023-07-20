import { NextResponse } from 'next/server'
import { getToken } from 'next-auth/jwt'
import { withAuth } from 'next-auth/middleware'

export default withAuth(
  async function middleware(req) {
    // const token = await getToken({ req })
    // if (token && req.nextUrl.pathname.startsWith('/')) {
    //   return NextResponse.redirect(new URL('/dashboard', req.url))
    // }
  },
  {
    pages: {
      signIn: '/',
    },
  },
)
