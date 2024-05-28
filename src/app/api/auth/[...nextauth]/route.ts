import NextAuth from "next-auth";
import GithubProvier from "next-auth/providers/github";
import { postLogin } from "@service/api/auth";

const handler = NextAuth({
  pages: {
    signIn: "/login",
  },
  providers: [
    GithubProvier({
      clientId: process.env.OAUTH_GITHUB_CLIENT_ID as string,
      clientSecret: process.env.OAUTH_GITHUB_CLIENT_SECRET as string,
      async profile(profile) {
        const { id, name, avatar_url } = profile;
        const { data } = await postLogin({ id, name, avatar_url });
        return {
          ...profile,
          id,
          name,
          image: avatar_url,
          accessToken: data.data.accessToken,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, profile, user }) {
      return { ...token, ...profile, ...user };
    },
    async session({ session, token }) {
      if (session.user && token.accessToken) {
        session.user.accessToken = token.accessToken as string;
      }
      return session;
    },
  },
});

export { handler as GET, handler as POST };
