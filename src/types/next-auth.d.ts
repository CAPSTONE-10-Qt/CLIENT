import NextAuth, { type DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      accessToken: string;
    } & DefaultSession["user"];
  }
  interface Profile extends DefaultProfile {
    id: number;
    avatar_url: string;
    accessToken: string;
  }
}

import { JWT } from "@auth/core/jwt";

declare module "@auth/core/jwt" {
  interface JWT {
    accessToken: string;
  }
}
