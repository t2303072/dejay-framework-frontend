import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        const { userName, password } = credentials
        const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/test/login`, {
          method: 'POST',
          body: JSON.stringify({ userName }),
          headers: { 'Content-Type': 'application/json' },
        })

        // const user = await res.json()

        console.log(res)
        console.log('테스트')

        // if (user) {
        //   return user
        // } else {
        //   return null
        // }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        console.log(account)
        token.accessToken = account.access_token
      }
      return token
    },
  },
  pages: {
    signIn: '/',
  },
})

export { handler as GET, handler as POST }
