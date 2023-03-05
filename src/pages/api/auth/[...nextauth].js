import NextAuth from "next-auth";
// import GithubProvider from "next-auth/providers/github";
import Auth0Provider from 'next-auth/providers/auth0';


export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    // GithubProvider({
    //   clientId: process.env.GITHUB_ID,
    //   clientSecret: process.env.GITHUB_SECRET,
    // }),
    // ...add more providers here
    Auth0Provider({
      clientId: process.env.AUTH0_CLIENT_ID,
      clientSecret: process.env.AUTH0_CLIENT_SECRET,
      issuer: process.env.AUTH0_ISSUER,
    }),
  ],
  debug: true,
  pages: {
    signIn: '/auth/signin',
  },
  userInfo: {
    url: "http://localhost:3000/api/auth/oauth/userinfo",
    params: { some: 'pet' },
  },
};

export default NextAuth(authOptions);