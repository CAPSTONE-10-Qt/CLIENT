import NextAuth from "next-auth";
import GithubProvier from "next-auth/providers/github";
import { postLogin } from "@service/api/auth";
import type { JWT } from "next-auth/jwt";
import type { Session } from "next-auth";

export const authOptions = {
  pages: {
    signIn: "/login",
  },
  providers: [
    GithubProvier({
      clientId: process.env.OAUTH_GITHUB_CLIENT_ID as string,
      clientSecret: process.env.OAUTH_GITHUB_CLIENT_SECRET as string,
      async profile(profile) {
        const { id, name, avatar_url, login } = profile;
        const { data } = await postLogin({
          id,
          name: name as string,
          avatar_url,
        });
        return {
          ...profile,
          id,
          userId: login,
          name,
          image: avatar_url,
          accessToken: data.data.accessToken,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }: { token: JWT; user: any }) {
      return { ...token, ...user } as JWT;
    },
    async session({ session, token }: { session: Session; token: JWT }) {
      if (session.user && token) {
        session.user.id = token.id as number;
        session.user.userId = token.userId as string;
        session.user.accessToken = token.accessToken as string;
      }
      return { ...session };
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
