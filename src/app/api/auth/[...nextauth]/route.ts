import NextAuth from "next-auth";
import GithubProvier from "next-auth/providers/github";
import { postLogin } from "@service/api/auth";
import { setToken } from "@service/api";

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
        // const { data } = await postLogin({ id, name, avatar_url });
        return {
          ...profile,
          id,
          name,
          avatar_url,
          accessToken: "0",
        };
      },
    }),
  ],
  callbacks: {
    async signIn({ profile }) {
      //   let body = {
      //     id: 0,
      //     name: "",
      //     avatar_url: "",
      //   };
      //   if (profile) {
      //     const { id, name, avatar_url } = profile;
      //     body = {
      //       id: id as number,
      //       name: name as string,
      //       avatar_url: avatar_url as string,
      //     };
      //   }
      //   postLogin(body)
      //     .then(res => {
      //       console.log(res.data.data);
      //       setToken(res.data.data.accessToken);
      //     })
      //     .catch(err => console.log(err));
      return true;
    },
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
