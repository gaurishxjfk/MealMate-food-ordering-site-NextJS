import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
        clientId: '323723985920-m4uu4cmv43dal8doar6ci4evf3cp37cg.apps.googleusercontent.com',
        clientSecret: "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"
      }),
    // ...add more providers here
  ],
}

export default NextAuth(authOptions)