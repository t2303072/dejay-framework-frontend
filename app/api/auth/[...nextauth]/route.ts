import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      credentials: {
        userName: {},
        password: {},
      },
      async authorize(credentials) {
        const credentialsDetails = {
          userName: credentials?.userName,
          password: credentials?.password,
          roles: ['SUPERVISOR'],
        }
        const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/token`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(credentialsDetails),
        })

        if (res.ok) {
          const user = await res.json()
          return user
        } else {
          return null
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, account }) {
      if (account) {
        token.accessToken = user.data.tokenObject.accessToken
        token.id = user.data.tokenObject.key
      }
      return token
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken
      session.user.id = token.id

      return session
    },
  },
  pages: {
    signIn: '/',
  },
})

export { handler as GET, handler as POST }
